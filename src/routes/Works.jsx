import React from "react";
import { useLoaderData } from "react-router-dom";
import Searchbar from "../components/Searchbar";
import axiosData from "../utils/axiosData";
import search from "../utils/search";

export async function loader({ request }) {
  let url = new URL(request.url);
  let searchTerm = url.searchParams.get("query");

  const { getData } = axiosData();
  const { books, art, music } = await getData();

  const works = search(searchTerm, art, books, music);
  return { works };
}

export default function Works() {
  const { works } = useLoaderData();

  const mappedWorks = works.map((work) => (
    <div key={work.id}>
      <label className="swap swap-flip">
        <input type="checkbox" />
        <div className="swap-on">
          <div className="flex-col items-center justify-center font-bold card card-compact w-60 sm:w-full sm:h-full bg-base-100 shadow-xl">
            <h2 className="text-center">{work.title}</h2>
            <span className="text-center">by</span>
            <p className="text-center">
              {work.author ? work.author : work.artist}
            </p>
            <a
              target="blank"
              href={work.link}
              className="btn btn-primary w-40 self-center "
            >
              More Info
            </a>
          </div>
        </div>
        <div className="card card-compact w-60 sm:w-max sm:h-max bg-base-100 shadow-xl swap-off">
          <figure>
            <img
              className=""
              src={work.artworks ? work.artworks : work.cover}
              alt={`Book cover of ${work.title} by ${
                work.artist ? work.artist : work.author
              }`}
            />
          </figure>
        </div>
      </label>
    </div>
  ));

  return (
    <div className="flex flex-col items-center ">
      <div className="container prose h1 my-10">
        <h1 style={{ textAlign: "center" }}>Works</h1>
      </div>
      <div className="flex flex-col sm:flex-row sm:flex-wrap space-y-10 space-x-5 mb-10">
        <div></div>
        {mappedWorks}
      </div>
      <Searchbar />
    </div>
  );
}
