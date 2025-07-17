import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import BookCard from '../components/BookCard'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import booksReducer from '../features/booksSlice'

const sampleBook = {
  id: 'book1',
  volumeInfo: {
    title: 'Jest Testing Book',
    authors: ['Author One'],
    imageLinks: {
      thumbnail: 'https://via.placeholder.com/150',
    },
  },
}

const renderWithRedux = (component, initialState) => {
  const store = configureStore({
    reducer: { books: booksReducer },
    preloadedState: { books: initialState },
  })

  return render(<Provider store={store}>{component}</Provider>)
}

test('renders BookCard and toggles favorite', () => {
  renderWithRedux(<BookCard book={sampleBook} />, { items: [], favorites: [] })

  expect(screen.getByText('Jest Testing Book')).toBeInTheDocument()
  expect(screen.getByText('Author One')).toBeInTheDocument()

  const button = screen.getByText(/add favorite/i)
  fireEvent.click(button)

  expect(screen.getByText(/remove favorite/i)).toBeInTheDocument()
})
