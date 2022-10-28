import React from "react";
import { useLoaderData } from "react-router-dom";
import { shuffle } from "lodash";
import axiosData from "../utils/axiosData";

export async function loader() {
  const { getBooks } = axiosData();
  const books = await getBooks();
  return { books };
}

export default function Literature() {
  const { books } = useLoaderData();

  const mappedBooks = shuffle(books).map((book) => (
    <div className="inline-block" key={book.id}>
      <label className="swap swap-flip ">
        <input type="checkbox" />
        <div className="swap-on ">
          <div className="bg-primary card card-compact w-60 sm:w-40 sm:h-full  shadow-xl">
            <a className="link text-secondary" href={book.link} target="_blank">
              <p className="m-6">
                {book.title} <br />
              </p>
            </a>
            <p className="m-6 text-secondary">
              {book.artist} {book.release}
            </p>
            <span className="m-6 mt-2 text-secondary"></span>
          </div>
        </div>
        <div className="card card-compact w-max h-max bg-base-100 shadow-xl swap-off">
          <figure className="h-full">
            {book.cover ? (
              <img
                src={book.cover}
                alt={`Book cover of ${book.title} by ${book.artist}`}
              />
            ) : (
              // <img
              //   src="../../public/placeholder-image.jpg"
              //   alt="placeholder image"
              //   width={300}
              // />
              <div
                style={{
                  width: 180,
                  height: 270,
                }}
              >
                <p className="mt-20 ml-10">
                  {book.title} by {book.artist}
                </p>
              </div>
            )}
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
