import axios from "axios";

export default {
  // Gets all books
  getBooks: function () {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function (id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function (bookData) {
    return axios.post("/api/books", bookData);
  },
  getSounds: function (searchTerm) {
    return axios.get(`https://freesound.org/apiv2/search/text/?query=${searchTerm}&fields=name,previews&token=x5Hs2Kk9Jn3YjFmKB8A9hj9fue9bjFGnid4ua53j`);
  }
};