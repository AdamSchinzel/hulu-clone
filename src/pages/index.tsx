import React from "react";

import Default from "../components/layouts/Default";
import Home from "../components/templates/Home";

import { GetServerSideProps } from "next";

import requests from "../../utils/requests";
import Results from "../components/modules/Results";

interface Props {
  results: any;
}

const HomePage: React.FC<Props> = ({ results }) => {
  return (
    <Default>
      <Results results={results} />
    </Default>
  );
};

export default HomePage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const genre = context.query.genre;

  const request = await fetch(
    //@ts-ignore
    `https://api.themoviedb.org/3${requests[genre]?.url || requests.trending.url}`,
  ).then((res) => res.json());

  return {
    props: {
      results: request.results,
    },
  };
};
