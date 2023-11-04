export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZGM4NWZkZjZhZmFkYmNmNjA5ZTY1MDg5YjVkMWJjOCIsInN1YiI6IjY1MmVkNTlhY2FlZjJkMDBlMjhkMTU1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5F-7k0Mf_3mrG-77e3YLEXpcBaPo-g-4qkLziefwmnk"
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const Supported_Language = [
  {
    identifier: "en",
    name: "English",
  },
  {
    identifier: "hindi",
    name: "Hindi",
  },
  {
    identifier: "spanish",
    name: "Spanish",
  },
];

// export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;
console.log(process.env.REACT_APP_OPENAI_KEY + "  process");
console.log(process.env.REACT_APP_TMDB_KEY + "  TMD");
export const OPENAI_KEY = "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";
