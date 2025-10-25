"use client";
import React from "react";
import { Mail } from "lucide-react";

function Opinionbox() {
  const [opinion, setOpinion] = React.useState("");

  const handleChange = (e) => {
    setOpinion(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Opinion submitted:", opinion);
  };

  return (
    <section className="w-full h-fit flex flex-col justify-center items-center gap-4 my-8 ">
      <h1 className="text-3xl font-medium">Share your thoughts here</h1>
      <h4 className="text-sm text-muted-foreground">
       We’d love to hear what’s on your mind!
      </h4>
      <form className="flex gap-4 mt-4" onSubmit={handleSubmit}>
        <label
          htmlFor="newsletter"
          className="flex items-center gap-2 bg-white border-2 border-neutral-800 rounded-lg w-96 h-12 p-3"
        >
          <Mail className="" />
          <input
            type="opinion"
            id="newsletter"
            placeholder="Enter your opinion"
            className="w-full h-full outline-none"
            required
            value={opinion}
            onChange={handleChange}
          />
        </label>

        <button
          type="submit"
          className="h-12 w-32 bg-neutral-900 text-accent rounded-lg font-medium text-white"
        >
          Share
        </button>
      </form>
    </section>
  );
}

export default Opinionbox;

