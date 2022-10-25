import React from "react";

export default function RandomMusic({ song }) {
  return (
    <div className="flex flex-col items-center">
      <img
        src={song.cover}
        className="max-w-xs rounded-lg shadow-2xl"
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}
