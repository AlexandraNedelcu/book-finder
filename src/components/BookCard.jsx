import React from 'react'
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { addToFavorites, removeFromFavorites } from '../features/booksSlice'

const BookCard = ({ book }) => {
  const dispatch = useDispatch()
  const { favorites } = useSelector((state) => state.books)

  const isFavorite = favorites.some((fav) => fav.id === book.id)

  const { title, authors, imageLinks } = book.volumeInfo
  const thumbnail = imageLinks?.thumbnail

  return (
    <Card>
      {thumbnail && <CardMedia component="img" height="200" image={thumbnail} alt={title} />}
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {authors?.join(', ')}
        </Typography>
      </CardContent>
      <CardActions>
        {isFavorite ? (
          <Button size="small" onClick={() => dispatch(removeFromFavorites(book.id))}>
            Remove Favorite
          </Button>
        ) : (
          <Button size="small" onClick={() => dispatch(addToFavorites(book))}>
            Add Favorite
          </Button>
        )}
      </CardActions>
    </Card>
  )
}

export default BookCard
