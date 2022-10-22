import axios from "axios";

export default function axiosData() {
  const getData = async () =>
    await axios.get("http://localhost:5000").then((res) => res.data);

  return { getData };
}
