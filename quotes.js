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
        quote: "You can do anything what you imagine",
        author: "Bob",
    },
    {
        quote: "Anyone can change you but you can",
        author: "unknown",
    },
    {
        quote: "I want to be with you last of life",
        author: "pope",
    },
    {
        quote: "live alive",
        author: "ancle yoong",
    },
    {
        quote: "Have a nice day",
        author: "Ellie",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;