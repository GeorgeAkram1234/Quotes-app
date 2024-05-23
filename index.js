var quotesList = [
quote1 = {
    quote : "It's not what happens to you, but how you react to it that matters.",
    author :"Epictetus"
},
quote2 = {
    quote :"Resentment is like drinking poison and waiting for your enemies to die.",
    author :"Nelson Mandela"
},
quote3 = {
    quote :"The best revenge is massive success.",
    author :"Frank Sinatra"
},
quote4 = {
    quote :"Do not take life too seriously. You will not get out alive.",
    author : "Elbert Hubbard"
},
quote5 = {
    quote :"You miss 100% of the shots you don't take.",
    author :"Wayne Gretzy"
},
];


var previousRandom = null;

function displayQuotes() {
    var random;
    
    do {
        random = Number.parseInt(Math.random() * quotesList.length);
    } while (random === previousRandom);
    
    previousRandom = random;
    
    if (random < quotesList.length) {
        document.getElementById('quoteAuthor').innerHTML = 
        `<p>${quotesList[random].quote}</p>
        <p>--${quotesList[random].author}</p>`;
    }
}
