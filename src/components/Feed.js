import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { client } from "../client";
import MasonryLayout from "./MasonryLayout";
import LoadingSinner from "./LoadingSpinner";
import { feedQuery, searchQuery } from "../utils/data";

const Feed = () => {
  const [loading, setLoading] = useState(false);
  const [pins, setPins] = useState(null);
  const { categoryId } = useParams();

  useEffect(() => {
    if (categoryId) {
      setLoading(true);
      client.fetch(searchQuery(categoryId)).then((data) => {
        setPins(data);
        setLoading(false);
      });
    }
    setLoading(true);
    client.fetch(feedQuery).then((data) => {
      setPins(data);
      console.log(data);
      setLoading(false);
    });
  }, [categoryId]);

  const idea = `${categoryId} || 'new'`;

  if (loading) return <LoadingSinner message={"We are adding  your feed!"} />;

  return <div>{pins && <MasonryLayout pins={pins} />}</div>;
};

export default Feed;
