import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptSuggestionPage from "./GptSuggestionPage";

const GptSearch = () => {
  return (
    <div>
      <div class="fixed -z-10">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/893a42ad-6a39-43c2-bbc1-a951ec64ed6d/1d86e0ac-428c-4dfa-9810-5251dbf446f8/IN-en-20231002-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg-img"
        />
      </div>
      <GptSearchBar />
      <GptSuggestionPage />
    </div>
  );
};

export default GptSearch;
