import axios from "axios";

export default function axiosData() {
  const getData = async () =>
    await axios.get("http://localhost:8080/api/all").then((res) => res.data);
  const getBooks = async () =>
    await axios.get("http://localhost:8080/api/books").then((res) => res.data);
  const getMusic = async () =>
    await axios.get("http://localhost:8080/api/music").then((res) => res.data);
  const getArt = async () =>
    await axios.get("http://localhost:8080/api/art").then((res) => res.data);

  return { getData, getBooks, getMusic, getArt };
}
