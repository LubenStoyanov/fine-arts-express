import React from "react";
import { useLoaderData } from "react-router-dom";
import axiosData from "../utils/axiosData";

export async function loader() {
  const { getMusic } = axiosData();
  const music = await getMusic();
  return { music };
}

export default function Music() {
  const { music } = useLoaderData();

  const mappedMusic = music.map((song) => (
    <div key={song.id}>
      <label className="swap swap-flip text-s">
        <input type="checkbox" />
        <div className="swap-on">
          <div className="card card-compact w-100 sm:w-40 bg-base-100 shadow-xl">
            <iframe
              src={song.link}
              title="YouTube video player"
              frameBorder="0"
              // allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div
          className="card card-compact w-100 sm:w-40 bg-base-100 shadow-xl swap-off"
          key={song.id}
        >
          <figure>
            <img
              src={song.cover}
              alt={`Single cover of ${song.title} by ${song.artist}`}
            />
          </figure>
        </div>
      </label>
    </div>
  ));

  return (
    <div className="flex flex-col items-center ">
      <div className="container prose h1 my-10">
        <h1 style={{ textAlign: "center" }}>Music</h1>
      </div>
      <div className="flex flex-col sm:flex-row sm:flex-wrap space-y-10 space-x-5">
        <div></div>
        {mappedMusic}
      </div>
    </div>
  );
}
