import Link from "next/link";
import React from "react";

const Intercepted = async () => {
  return (
    <React.Fragment>
      <section>Intercepted Page</section>
      <Link href={"/dashboard"}>To Dashboard</Link>
      <hr />
      <br />
      <Link href={"/intercepted/f2"}>To F2</Link>
      <br />
    </React.Fragment>
  );
};

export default Intercepted;
