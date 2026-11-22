import React from "react";
// "use client";
import Link from "next/link";

const navbar = () => {
  return (
    <div className="flex justify-center gap-4 p-4 text-black bg-amber-300">
      <Link className="hover:underline hover:bg-amber-200" href="/">
        Home
      </Link>
      <Link className="hover:underline hover:bg-amber-200" href="/services">
        Services
      </Link>
      <Link className="hover:underline hover:bg-amber-200" href="/contact">
        Contact
      </Link>
    </div>
  );
};

export default navbar;

// server compoents
// securly data fecthing
// reading from a db through an service side code
// keeping secrets on the server
// rendering a component on the server and sending it to the client

// client components

// cc is usefull when we need browser specific code like event handlers, state, effects, and browser apis.

// nextjs rendering techniques

// static rendering: build a page ahead of time and send it to the client when a request is made
// dynamic server rendering: render a page on the server when a request is made and send it to the client
// revalidation and caching : resue cached and refresh it according to a time interval