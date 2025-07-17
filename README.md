# 📚 Book Finder

Book Finder is a modern React application that allows users to search for books using the Google Books API, view details, and save their favorite books. Built with Redux, Material UI, and tested with Jest.

---

## 🔧 Tech Stack

- React
- Redux Toolkit
- Material UI
- Jest + React Testing Library
- Google Books API
- GitHub Actions (CI)

---

## 🚀 Features

- 🔍 Search books by title or author
- 💖 Save/remove favorite books
- 🌐 Google Books API integration
- 📱 Responsive UI (Material UI)
- ✅ Unit and component tests
- 🔄 CI workflow with GitHub Actions

---

## 📦 Setup

```
git clone https://github.com/AlexandraNedelcu/book-finder.git
cd book-finder
npm install
```

Create a .env file with:
```
REACT_APP_GOOGLE_BOOKS_API_KEY=your_api_key_here
```

Run app locally:
```
npm start
```

---

## 🧪 Run tests

```
npm test
```

---

## 🛠 CI with GitHub Actions

- All tests run on push to main
- If tests fail, the coverage report is saved as an artifact

---

## 📄 License

This project is licensed under the MIT License.