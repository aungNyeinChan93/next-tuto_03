"use client";

import React from "react";

const GlobalError = ({ error }: { error: Error }) => {
  return (
    <React.Fragment>
      <html>
        <body className="flex justify-center items-center w-full h-screen ">
          <div>
            {error && error.message} from global
            <button
              className="block px-4 py-2 bg-indigo-500 rounded"
              type="button"
              onClick={() => window.location.reload()}
            >
              refresh
            </button>
          </div>
        </body>
      </html>
    </React.Fragment>
  );
};

export default GlobalError;
