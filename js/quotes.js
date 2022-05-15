const quotes =[
    {
        quote: "The way to get started is...",
        author: "Wait Disney",
    },
    {
        quote: "Life is what happens when...",
        author: "John Lennon",
    },
    {
        quote: "The world is book and...",
        author: "Saint Augstine",
    },
    {
        quote: "Life is journey",
        author: "Jinny",
    },
    {
        quote: "Practice makes perfect",
        author: "James",
    },
    {
        quote: "Praise the lord",
        author: "ASAP",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;