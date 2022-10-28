import React from "react";
import { Form, redirect } from "react-router-dom";
import axiosData from "../utils/axiosData";

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const { createWork } = axiosData();
  await createWork(data);

  return redirect("/");
}
export default function Request() {
  return (
    <div>
      <Form method="post" className="flex flex-col items-center space-y-5">
        <div className="flex flex-col items-start w-full max-w-xs ">
          <label htmlFor="literature"></label>
          <input
            type="radio"
            name="category"
            value="books"
            className="radio mr-10"
          />
          Literature
          <label htmlFor="music"></label>
          <input
            type="radio"
            name="category"
            value="songs"
            className="radio mr-10"
          />
          Music
          <label htmlFor="art"></label>
          <input
            type="radio"
            name="category"
            value="art"
            className="radio mr-10"
          />
          Art
        </div>
        <input
          type="text"
          name="title"
          className="input input-bordered w-full max-w-xs"
          id=""
          placeholder="Title"
        />
        <input
          type="text"
          name="creator"
          className="input input-bordered w-full max-w-xs"
          id=""
          placeholder="Creator"
        />
        <input
          type="text"
          name="release"
          className="input input-bordered w-full max-w-xs"
          id=""
          placeholder="Release"
        />
        <textarea
          name="description"
          className="textarea textarea-bordered w-full max-w-xs"
          id=""
          placeholder="Description"
          cols="40"
          rows="10"
        ></textarea>
        <button type="submit" className="btn w-full max-w-xs ">
          Create
        </button>
      </Form>
    </div>
  );
}
