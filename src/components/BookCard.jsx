import React from 'react'
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
} from '@mui/material'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useDispatch, useSelector } from 'react-redux'
import { addToFavorites, removeFromFavorites } from '../features/booksSlice'

const BookCard = ({ book }) => {
  const dispatch = useDispatch()
  const { favorites } = useSelector((state) => state.books)
  const isFavorite = favorites.some((fav) => fav.id === book.id)
  const { title, authors, imageLinks } = book.volumeInfo
  const thumbnail = imageLinks?.thumbnail

  return (
    <Card sx={{ width: 250, height: 400}}>
      {thumbnail && <CardMedia component="img" sx={{ height: 200 }} image={thumbnail} alt={title} />}
      <CardContent sx={{ height: 150 }}>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {authors?.join(', ')}
        </Typography>
      </CardContent>
      <CardActions sx={{ height: 50 }}>
        {isFavorite ? (
          <Button size="small" onClick={() => dispatch(removeFromFavorites(book.id))}>
            <BookmarkIcon />
          </Button>
        ) : (
          <Button size="small" onClick={() => dispatch(addToFavorites(book))}>
            <BookmarkBorderIcon />
          </Button>
        )}
      </CardActions>
    </Card>
  )
}

export default BookCard
