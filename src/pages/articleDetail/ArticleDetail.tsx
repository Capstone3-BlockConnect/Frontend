import React from "react";
import { useParams } from "react-router-dom";

export default function ArticleDetail() {
  const { id } = useParams();
  return <div>{id}</div>;
}
