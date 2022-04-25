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
    },
    {
        quote: "인생은 독고다이",
        author: "unknown",
    },
    {
        quote: "물 들어올때 노 저어라",
        author: "pope",
    },
    {
        quote: "같지만 다르고 다르지만 같다",
        author: "ancle yoong",
    },
    {
        quote: "Have a nice day",
        author: "wook",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;