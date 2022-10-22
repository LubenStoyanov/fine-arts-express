import React from "react";
import { useLoaderData } from "react-router-dom";
import axiosData from "../utils/axiosData";

export async function loader() {
  const { getData } = axiosData();
  const { books } = await getData();
  return { books };
}

export default function Literature() {
  const { books } = useLoaderData();

  const mappedBooks = books.map((book) => (
    <div>
      <label className="swap swap-flip ">
        <input type="checkbox" />
        <div className="swap-on ">
          <div
            className="bg-primary card card-compact w-60 sm:w-40 sm:h-full  shadow-xl"
            key={book.sys.id}
          >
            <a
              className="link text-secondary"
              href={book.fields.link}
              target="_blank"
            >
              <p className="m-6">
                {book.fields.title} <br />
              </p>
            </a>
            <p className="m-6 text-secondary">
              {book.fields.author} {book.fields.release}
            </p>
            <span className="m-6 mt-2 text-secondary"></span>
          </div>
        </div>
        <div
          className="card card-compact w-60 sm:w-40 bg-base-100 shadow-xl swap-off"
          key={book.sys.id}
        >
          <figure className="h-full">
            <img
              src={book.fields.cover.fields.file.url}
              alt={`Book cover of ${book.fields.title} by ${book.fields.author}`}
            />
          </figure>
        </div>
      </label>
    </div>
  ));

  return (
    <div className="flex flex-col items-center ">
      <div className="container prose h1 my-10">
        <h1 style={{ textAlign: "center" }}>Literature</h1>
      </div>
      <div className="flex flex-col sm:flex-row sm:flex-wrap space-y-10 space-x-5">
        <div></div>
        {mappedBooks}
      </div>
    </div>
  );
}
