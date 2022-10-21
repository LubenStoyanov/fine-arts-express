import React from "react";

export default function RandomMusic({ song }) {
  return (
    <div className="basis-1/3">
      <img
        src={song.fields.cover.fields.file.url}
        className="max-w-sm rounded-lg shadow-2xl"
        style={{ width: "auto", height: 300, objectFit: "contain" }}
      />
    </div>
  );
}
