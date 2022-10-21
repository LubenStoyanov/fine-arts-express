import React from "react";
import { useParams } from "react-router-dom";

export default function HeroMusic() {
  const { songId } = useParams();
  return <div>HeroMusic</div>;
}
