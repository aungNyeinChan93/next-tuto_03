import React from "react";

export const getQuotes = async () => {
  const response = await fetch(`https://dummyjson.com/quotes`);
  const { quotes } = await response.json();
  return quotes;
};

const Quotes = async () => {
  const quotes = await getQuotes();

  return (
    <React.Fragment>
      {quotes &&
        Array.isArray(quotes) &&
        quotes?.map((q) => (
          <div
            key={q.id}
            className=" p-6 bg-slate-100 rounded-2xl my-4 text-2xl font-semibold font-mono text-green-500"
          >
            {" "}
            {q.quote}
          </div>
        ))}
    </React.Fragment>
  );
};

export default Quotes;
