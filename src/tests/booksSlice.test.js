import booksReducer, { addToFavorites, removeFromFavorites } from '../features/booksSlice'

const sampleBook = { id: 'abc123', volumeInfo: { title: 'Test Book' } }

describe('booksSlice reducer', () => {
  it('should handle addToFavorites', () => {
    const initialState = { items: [], favorites: [] }
    const state = booksReducer(initialState, addToFavorites(sampleBook))
    expect(state.favorites).toContainEqual(sampleBook)
  })

  it('should handle removeFromFavorites', () => {
    const initialState = { items: [], favorites: [sampleBook] }
    const state = booksReducer(initialState, removeFromFavorites('abc123'))
    expect(state.favorites).toHaveLength(0)
  })
})
