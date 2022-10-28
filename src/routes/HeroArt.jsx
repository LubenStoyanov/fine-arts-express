import React from "react";
import { useLoaderData } from "react-router-dom";
import axiosData from "../utils/axiosData";

export async function loader({ params }) {
  const { getArtPiece } = axiosData();
  const art = await getArtPiece(params.id);

  return { art };
}

export default function HeroArt() {
  const { art } = useLoaderData();

  return (
    <div>
      <div className="flex flex-col items-center ">
        <div className="container prose h1 my-10 text-center">
          <h1>{art.title}</h1>
          <span className="text-xl font-bold">by {art.artist}</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:flex-wrap space-y-10 space-x-5">
          <div></div>
          <div key={art.id}>
            <div className="card card-compact  bg-base-100 shadow-xl swap-off">
              <figure className="h-full">
                <a href={art.link} target="_blank">
                  <img
                    src={art.artworks}
                    alt={`art cover of ${art.title} by ${art.artist}`}
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
