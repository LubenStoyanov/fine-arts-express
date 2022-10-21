import React from "react";
import { useParams } from "react-router-dom";

export default function HeroBook() {
  const { bookId } = useParams();
  console.log(bookId.fields);
  return <div>HeroBook</div>;
}
