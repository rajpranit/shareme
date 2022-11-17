import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MasonryLayout from "./MasonryLayout";
import { feedQuery, searchQuery } from "../utils/data";
import { client } from "../client";

import LoadingSpinner from "./LoadingSpinner";

const Search = ({ searchTerm }) => {
  const [pins, setPins] = useState();
  const [isLoading, setIsLoading] = useState(false);
  console.log(searchTerm);

  useEffect(() => {
    if (searchTerm !== "") {
      setIsLoading(true);
      const query = searchQuery(searchTerm);
      client.fetch(query).then((data) => {
        setPins(data);
        setIsLoading(false);
      });
    } else {
      client.fetch(feedQuery).then((data) => setPins(data));
      setPins();
    }
  }, [searchTerm]);

  if (isLoading) return <LoadingSpinner message={"searching for pins"} />;

  return (
    <div>
      {pins?.length > 0 ? <MasonryLayout pins={pins} /> : <p>No pins found</p>}
    </div>
  );
};

export default Search;
