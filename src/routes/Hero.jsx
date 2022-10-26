import React from "react";
import RandomBook from "../components/RandomBook";
import RandomArt from "../components/RandomArt";
import RandomMusic from "../components/RandomMusic";
import { Link, useLoaderData } from "react-router-dom";
import axiosData from "../utils/axiosData";
import { sample } from "lodash";
import useForceUpdate from "use-force-update";
import Searchbar from "../components/Searchbar";

export async function loader() {
  const { getData } = axiosData();
  const { books, art, music } = await getData();
  return { books, art, music };
}

export default function Hero() {
  const { books, art, music } = useLoaderData();
  const book = sample(books);
  const song = sample(music);
  const fart = sample(art);

  const forceUpdate = useForceUpdate();

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div>
          <h1 className="text-5xl font-bold text-center">Enjoy the Art</h1>
          <p className="py-6 text-lg sm:text-2xl text-center">
            Experience 3 types of fine art.
          </p>
          <div className="flex justify-center">
            <button className=" btn btn-primary" onClick={forceUpdate}>
              Get Random Art
            </button>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row space-y-5 sm:space-x-10">
          <div></div>
          <Link
            to={`book/${book.title.toLowerCase().replace(/\s+/g, "-")}/${
              book.id
            }`}
          >
            <RandomBook book={book} />
          </Link>
          <div></div>
          <Link to={`works/:${fart.title}`}>
            <RandomArt fart={fart} />
          </Link>
          <div></div>
          <Link to={`works/:songId`}>
            <RandomMusic song={song} />
          </Link>
        </div>
        <div>
          <Searchbar />
        </div>
      </div>
    </div>
  );
}
