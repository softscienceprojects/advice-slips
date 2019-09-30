// API
const API_URL = "https://api.adviceslip.com/advice";

function get(url) {
    return fetch(url).then(resp => resp.json())
}

const API = { get }

const fontType = ["Roboto Mono", "Roboto Slab", "Abril Fatface", "Notable", "Bungee"]
const colours = ["#FFCDD2", "#FCE4EC", "#F3E5F5", "#8C9EFF", "#90CAF9", "#80D8FF", "#80DEEA", "#B2DFDB", "#69F0AE", "#AED581", "#AED581", "#FFC400", "#BCAAA4", "#90A4AE"]
const quoteP = document.querySelector("h2#quote")
const bground = document.querySelector("body")

function getQuotes() {
    API.get(API_URL).then(data => addQuote(data['slip']['advice']))
}

// FUNCTIONS

function addQuote(quote) {
    quoteP.innerText = quote;
    let fontsNum = Math.floor(Math.random()*fontType.length);
    let coloursNum = Math.floor(Math.random()*colours.length);
    quoteP.style.fontFamily=fontType[fontsNum];
    bground.style.backgroundColor = colours[coloursNum]
}

const reloadButton = document.querySelector("button#reload")
reloadButton.addEventListener("click", ()=> getQuotes())

// START PAGE
document.body.onload = getQuotes

