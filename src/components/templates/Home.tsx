import React from "react";

import Home from "../templates/Home";

interface Props {
  results: any;
}

const HomePage: React.FC<Props> = ({ results }) => {
  return (
    <>
      <Home results={results} />
    </>
  );
};

export default HomePage;
