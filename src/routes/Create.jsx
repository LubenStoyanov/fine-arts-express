import React from "react";
import { Form, redirect } from "react-router-dom";
import axiosData from "../utils/axiosData";

export async function action({ request }) {
  const { createWork } = axiosData();

  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  await createWork(data);

  return redirect(
    `/${data.category === "books" ? "literature" : data.category}`
  );
}
export default function Request() {
  return (
    <div className="flex flex-col space-y-2 my-10">
      <Form method="post" className="flex flex-col items-center space-y-5">
        <div className="flex  items-start w-full max-w-xs space-x-2 ">
          <input type="radio" name="category" value="books" className="radio" />
          <label htmlFor="literature" className="">
            Literature
          </label>
          <input
            type="radio"
            name="category"
            value="songs"
            className="radio "
            required
          />
          <label htmlFor="music">Music</label>
          <input type="radio" name="category" value="art" className="radio " />
          <label htmlFor="art">Art</label>
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
