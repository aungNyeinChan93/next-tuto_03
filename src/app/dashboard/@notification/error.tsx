"use client";
import React from "react";

const NotificationError = ({ error }: { error: Error }) => {
  return (
    <React.Fragment>
      <section className="flex justify-center items-center text-2xl bg-red-200 w-full h-screen">
        {error && error.message}
        <button
          className="block p-3 text-sm text-red-600"
          type="button"
          onClick={() => window.location.reload()}
        >
          reload
        </button>
      </section>
    </React.Fragment>
  );
};

export default NotificationError;
