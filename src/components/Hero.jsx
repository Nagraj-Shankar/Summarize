import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="sumz_logo" className="w-44 object-contain" />

        <button
          type="button"
          onClick={() =>
            window.open("https://github.com/Nagraj-Shankar", "_blank")
          }
          className="black_btn"
        >
          GitHub
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient ">OpenAI GPT Version 4</span>
      </h1>
      <h2 className="desc">
        Time is precious. No more need to go through unnecessary long texts.
        Simplify your reading with summarizer. It transforms lengthy articles
        into clear and concise summaries that has just the most important data
        from the original text. Save your Time!
      </h2>
    </header>
  );
};

export default Hero;
