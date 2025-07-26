import Link from "next/link";
import React from "react";

const NestedNotiPage = async () => {
  return (
    <React.Fragment>
      <section>
        <p className="text-green-500 text-base p-3">NestedNotiPage</p>
        <p className="text-sm p-4 text-slate-500 ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non
          doloremque corporis consequuntur error minus sequi natus labore
          voluptas voluptate rem. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Molestiae cum error dolores, ullam sapiente quaerat,
          adipisci nisi atque, quibusdam vero esse dicta magnam deserunt
          consectetur expedita iusto quos architecto quas.
        </p>

        <Link href={"/dashboard"} className="text-red-600 ms-6">
          Go to Dashboard
        </Link>
      </section>
    </React.Fragment>
  );
};

export default NestedNotiPage;
