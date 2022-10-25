import React from "react";

export default function RandomBook({ book }) {
  return (
    <div className="basis-1/3 ">
      <img
        src={book.cover}
        className="max-w-sm rounded-lg shadow-2xl"
        style={{ width: 200, height: 300, objectFit: "cover" }}
      />
    </div>
  );
}
