import ErrorWrapper from "@/app/components/share/ErrorWrapper";
import Link from "next/link";
import React from "react";

const NotificationDefault = async () => {
  return (
    <React.Fragment>
      <ErrorWrapper>
        <main className="w-full p-4 h-screen text-black">
          Notification Default Page
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            mollitia quisquam voluptates odio, consequuntur a ratione at minima
            corrupti commodi magni voluptas exercitationem neque placeat nobis
            odit maiores sit soluta?
          </p>
          <Link
            className="text-lg font-mono text-indigo-600 underline decoration-red-600 underline-offset-8"
            href={"/dashboard/nested"}
          >
            Go To nested Notifiaction page
          </Link>
        </main>
      </ErrorWrapper>
    </React.Fragment>
  );
};

export default NotificationDefault;
