import React from "react";
import { useLoaderData } from "react-router-dom";
import axiosData from "../utils/axiosData";

export async function loader({ params }) {
  const { getBook } = axiosData();
  const book = await getBook(params.id);

  return { book };
}

export default function HeroBook() {
  const { book } = useLoaderData();
  return (
    <div>
      <div className="flex flex-col items-center ">
        <div className="container prose h1 my-10 text-center">
          <h1>{book.title}</h1>
          <span className="text-xl font-bold">by {book.author}</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:flex-wrap space-y-10 space-x-5">
          <div></div>
          <div key={book.id}>
            <div className="card card-compact  bg-base-100 shadow-xl swap-off">
              <figure className="h-full">
                <a href={book.link} target="_blank">
                  <img
                    src={book.cover}
                    alt={`Book cover of ${book.title} by ${book.author}`}
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
