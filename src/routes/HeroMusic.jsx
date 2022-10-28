import React from "react";
import { useLoaderData } from "react-router-dom";
import axiosData from "../utils/axiosData";

export async function loader({ params }) {
  const { getSong } = axiosData();
  const song = await getSong(params.id);

  return { song };
}

export default function HeroMusic() {
  const { song } = useLoaderData();

  return (
    <div>
      <div className="flex flex-col items-center ">
        <div className="container prose h1 my-10 text-center">
          <h1>{song.title}</h1>
          <span className="text-xl font-bold">by {song.artist}</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:flex-wrap space-y-10 space-x-5">
          <div></div>
          <div key={song.id}>
            <div className="card card-compact  bg-base-100 shadow-xl swap-off">
              <figure className="h-full">
                <a href={song.link} target="_blank">
                  <img
                    src={song.cover}
                    alt={`song cover of ${song.title} by ${song.artist}`}
                    className="max-w-sm rounded-lg shadow-2xl"
                  />
                </a>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
