export default function search(searchTerm, art, books, music) {
  const data = art.concat(...books, ...music);
  const works = data
    .map((work) => work)
    .filter((work) => {
      return work.fields.title.toLowerCase().trim().includes(searchTerm)
        ? work
        : work.fields.artist &&
          work.fields.artist.toLowerCase().trim().includes(searchTerm)
        ? work
        : work.fields.author &&
          work.fields.author.toLowerCase().trim().includes(searchTerm);
    });

  return works;
}
