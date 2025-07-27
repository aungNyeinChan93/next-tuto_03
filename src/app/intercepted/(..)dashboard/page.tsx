import React from "react";

const InterceptedDashboard = async () => {
  return (
    <React.Fragment>
      <section>
        <h3 className="text-center p-4 text-2xl font-semibold text-green-400">
          Intercepted Dashboard{" "}
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
          cupiditate porro sequi vitae. Dolorem eaque hic aspernatur, excepturi
          consequatur suscipit ipsa earum voluptas officiis dolore impedit magni
          voluptatibus fugiat consectetur!
        </p>
      </section>
      {/* <button
        type="button"
        className="text-red-600"
        onClick={() => window.location.reload()}
      >
        {" "}
        refresh
      </button> */}
    </React.Fragment>
  );
};

export default InterceptedDashboard;
