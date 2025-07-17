import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBooks } from '../features/booksSlice'
import { Container, TextField, Button, CircularProgress, Grid, Typography } from '@mui/material'
import BookCard from '../components/BookCard'

const Home = () => {
  const [query, setQuery] = useState('')
  const dispatch = useDispatch()
  const { items, status, error } = useSelector((state) => state.books)

  const handleSearch = () => {
    if (query.trim()) dispatch(fetchBooks(query))
  }

  return (
    <Container sx={{ mt: 4 }}>
      <TextField
        label="Search books"
        variant="outlined"
        fullWidth
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button sx={{ mt: 2 }} variant="contained" onClick={handleSearch}>
        Search
      </Button>

      {status === 'loading' && <CircularProgress sx={{ mt: 4 }} />}
      {status === 'failed' && <Typography color="error">{error}</Typography>}

      <Grid container spacing={2} sx={{ mt: 2 }}>
        {items.map((book) => (
          <Grid item xs={12} sm={6} md={4} key={book.id}>
            <BookCard book={book} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Home
