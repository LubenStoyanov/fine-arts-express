import { sample } from "lodash";
import { useLoaderData } from "react-router-dom";

const RandomArt = ({ fart }) => {
  // console.log(fart);
  return (
    <div className="flex flex-col items-center sm:flex-row">
      <img
        src={fart.artworks}
        className="max-w-xs rounded-lg shadow-2xl"
        style={{ objectFit: "contain" }}
      />
    </div>
  );
};

export default RandomArt;
