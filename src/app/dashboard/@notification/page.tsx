import ErrorWrapper from "@/app/components/share/ErrorWrapper";
import React from "react";

const NotificationPage = async () => {
  return (
    <React.Fragment>
      <ErrorWrapper>
        <main className="w-full p-4 h-screen text-black">
          Notification Page
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            mollitia quisquam voluptates odio, consequuntur a ratione at minima
            corrupti commodi magni voluptas exercitationem neque placeat nobis
            odit maiores sit soluta?
          </p>
        </main>
      </ErrorWrapper>
    </React.Fragment>
  );
};

export default NotificationPage;
