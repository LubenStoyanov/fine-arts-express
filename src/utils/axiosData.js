import axios from "axios";

export default function axiosData() {
  const getData = () =>
    axios
      .get("http://localhost:8080/api/all")
      .then((res) => res.data)
      .catch((error) => console.error(error));

  const getBooks = () =>
    axios
      .get("http://localhost:8080/api/books")
      .then((res) => res.data)
      .catch((error) => console.error(error));

  const getMusic = () =>
    axios
      .get("http://localhost:8080/api/music")
      .then((res) => res.data)
      .catch((error) => console.error(error));

  const getArt = () =>
    axios
      .get("http://localhost:8080/api/art")
      .then((res) => res.data)
      .catch((error) => console.error(error));

  const getBook = (bookId) =>
    axios
      .get(`http://localhost:8080/api/book/${bookId}`)
      .then((res) => res.data)
      .catch((error) => console.error(error));

  return { getData, getBooks, getMusic, getArt, getBook };
}
