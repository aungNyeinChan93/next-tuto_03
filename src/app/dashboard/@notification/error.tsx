"use client";
import React from "react";

const NotificationError = ({ error }: { error: Error }) => {
  return (
    <React.Fragment>
      <section className="flex justify-center items-center text-2xl bg-red-200 w-full h-screen">
        {error && error.message}
      </section>
    </React.Fragment>
  );
};

export default NotificationError;
