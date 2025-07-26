"use client";
import React from "react";
import { useRouter } from "next/navigation";
const MailDefault = () => {
  const router = useRouter();
  return (
    <React.Fragment>
      <section className="p-4 w-full h-screen bg-red-300">
        Mail Page Default
        <ul>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            eligendi minima sed, error ex molestiae libero ullam modi inventore
            esse quaerat? Ipsa corrupti cum cupiditate nostrum assumenda
            obcaecati dolorum velit!
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            eligendi minima sed, error ex molestiae libero ullam modi inventore
            esse quaerat? Ipsa corrupti cum cupiditate nostrum assumenda
            obcaecati dolorum velit!
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            eligendi minima sed, error ex molestiae libero ullam modi inventore
            esse quaerat? Ipsa corrupti cum cupiditate nostrum assumenda
            obcaecati dolorum velit!
          </li>
        </ul>
        <button
          className="text-sm text-red-700"
          type="button"
          onClick={() => router.push("/")}
        >
          Go To Home
        </button>
      </section>
    </React.Fragment>
  );
};

export default MailDefault;
