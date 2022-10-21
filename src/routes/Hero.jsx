import React from "react";
import RandomBook from "../components/RandomBook";
import RandomArt from "../components/RandomArt";
import RandomMusic from "../components/RandomMusic";
import Searchbar from "./Searchbar";
import { Link, useLoaderData } from "react-router-dom";
import contentful from "../data/fetchData";
import { sample } from "lodash";
import useForceUpdate from "use-force-update";

export async function loader() {
  const { getBooks, getArt, getMusic } = contentful();
  const books = await getBooks();
  const art = await getArt();
  const music = await getMusic();

  return { books, art, music };
}

export default function Hero() {
  const { books, art, music } = useLoaderData();

  const book = sample(books);
  const fart = sample(art);
  const song = sample(music);

  const forceUpdate = useForceUpdate();

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div>
          <h1 className="text-5xl font-bold">Enjoy the Art</h1>
          <p className="py-6">
            Experience 3 types of different fine art genres.
          </p>
          <div className="flex justify-center">
            <button className=" btn btn-primary" onClick={forceUpdate}>
              Get Random Art
            </button>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row space-x-10">
          <Link to={`heroBook/:bookId`}>
            <RandomBook book={book} />
          </Link>
          <Link to={`heroArt/:${fart.fields.title}`}>
            <RandomArt fart={fart} />
          </Link>
          <Link to={`heroMusic/:songId`}>
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
