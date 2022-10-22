import { sample } from "lodash";
import { useLoaderData } from "react-router-dom";

const RandomArt = ({ fart }) => {
  // console.log(fart);
  return (
    <div className="basis-1/3 sm:w-max sm:h-max">
      <img
        src={fart.fields.artworks[0].fields.file.url}
        className="max-w-sm rounded-lg shadow-2xl"
        style={{ width: "auto", height: 300, objectFit: "contain" }}
      />
    </div>
  );
};

export default RandomArt;
