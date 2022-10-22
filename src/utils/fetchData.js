import pkg from "contentful";
const { createClient } = pkg;

const contentful = () => {
  const client = createClient({
    space: "3okd8zp7ryvu",
    accessToken: "-pnmSaf6zCMRu7wHMDVxXcgremsSGvRADeGgQs9Y3po",
  });

  const getBooks = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "literature",
        select: "fields",
      });

      return entries.items;
    } catch (error) {
      console.log(`my error: ${error}`);
    }
  };

  const getMusic = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "music",
        select: "fields",
      });

      return entries.items;
    } catch (error) {
      console.log(`my error: ${error}`);
    }
  };

  const getArt = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "visualArt",
        select: "fields",
      });

      return entries.items;
    } catch (error) {
      console.log(`my error: ${error}`);
    }
  };

  return { getBooks, getArt, getMusic };
};

export default contentful;
