import React from "react";

const About = () => {
  return (
    <div className="flex flex-col m-10">
      <h3 className="text-white text-4xl">Hulu clone</h3>
      <br></br>
      <p className="text-xl">This is showcase project made in Next.js with server-side rendering (SSR).</p>
      <br></br>
      <p>Tech stack:</p>
      <p>- Front-end: Next.js (TypeScript)</p>
      <p>- Styling: Tailwind CSS</p>
      <p>- Issue tracking system: Sentry</p>
    </div>
  );
};

export default About;
