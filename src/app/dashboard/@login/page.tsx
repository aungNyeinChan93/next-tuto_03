import Link from "next/link";
import React from "react";

const LoginSlot = async () => {
  return (
    <React.Fragment>
      <section>
        <Link href="/login">Go to login</Link>
      </section>
    </React.Fragment>
  );
};

export default LoginSlot;
