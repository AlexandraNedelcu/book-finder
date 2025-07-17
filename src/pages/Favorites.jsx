import React from 'react'
import { useSelector } from 'react-redux'
import { Container, Grid, Typography } from '@mui/material'
import BookCard from '../components/BookCard'

const Favorites = () => {
  const { favorites } = useSelector((state) => state.books)

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Favorite Books
      </Typography>
      {favorites.length === 0 ? (
        <Typography>No favorite books added.</Typography>
      ) : (
        <Grid container spacing={2}>
          {favorites.map((book) => (
            <Grid item xs={12} sm={6} md={4} key={book.id}>
              <BookCard book={book} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  )
}

export default Favorites
