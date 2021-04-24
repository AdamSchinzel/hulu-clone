import React from "react";

import Footer from "../modules/Footer";
import Header from "../modules/Header";

interface Props {
  children: React.ReactNode;
}

const Default: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Default;
