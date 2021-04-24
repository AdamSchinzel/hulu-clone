import React from "react";
import FlipMove from "react-flip-move";

import Thumbnail from "../elements/Thumbnail";

interface Props {
  results: any;
}

const Results: React.FC<Props> = ({ results }) => {
  return (
    <FlipMove className="px-5 my-10 sm:grid md:grid-cols-3 xl:grid-flow-col-4 3xl:flex flex-wrap justify-center">
      {results.map((result: any) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </FlipMove>
  );
};

export default Results;
