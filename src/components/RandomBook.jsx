import React from "react";

export default function RandomBook({ book }) {
  return (
    <div className="flex flex-col items-center">
      <img
        src={book.cover}
        className="max-w-sm rounded-lg shadow-2xl"
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}
