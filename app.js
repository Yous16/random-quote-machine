const QUOTES = [
  {
    quote: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
  {
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "Albert Einstein",
  },
  {
    quote:
      "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
    author: "Maya Angelou ",
  },
  {
    quote:
      "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    author: "Mahatma Gandhi",
  },
];

window.onload = init;
function init() {
  generateQuote();
}

const generateQuote = () => {
  let quoteSize = QUOTES.length;
  let randomIndex = Math.floor(Math.random() * quoteSize);
  let randomQuoteData = QUOTES[randomIndex];

  let twitterLink =
    "https://twitter.com/intent/tweet?hashtags=quotes&amp;related=freecodecamp&amp;text=%22";

  let quoteInApiFormat = randomQuoteData.quote.replace(/ /g, "%20");
  twitterLink += quoteInApiFormat;

  let authorInApiFormat = randomQuoteData.author.replace(/ /g, "%20");
  twitterLink += authorInApiFormat;

  document.getElementById("tweet-quote").href = twitterLink;
  document.getElementById("text").innerText = randomQuoteData.quote;
  document.getElementById("author").innerText = randomQuoteData.author;
};
