import React from "react";
import { Link } from "react-router-dom";

const Page: React.FC = () => {
  return(
    <React.Fragment>
      <h1>Page!</h1>
      <Link to="/">Back</Link>
    </React.Fragment>
  );
}

export default Page;