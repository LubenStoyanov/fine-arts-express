export default function search(searchTerm, art, books, music) {
  const data = art.concat(...books, ...music);
  const works = data
    .map((work) => work)
    .filter((work) => {
      return work.title.toLowerCase().trim().includes(searchTerm)
        ? work
        : work.artist && work.artist.toLowerCase().trim().includes(searchTerm)
        ? work
        : work.author && work.author.toLowerCase().trim().includes(searchTerm);
    });

  return works;
}
