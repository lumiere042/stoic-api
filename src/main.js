const quoteSrc = document.querySelector('.quote-source')
const quoteText = document.querySelector('.quote-text')
const quoteAuthor = document.querySelector('.quote-author')
const btn = document.querySelector('.btn')


btn.addEventListener("click", getQuote)

async function getQuote(){
    const response = await fetch('https://stoic-server.herokuapp.com/random')

    const data = await response.json()

    const quote = data['0']
    
    console.log(quote)

    quoteSrc.innerHTML = quote['quotesource']
    quoteText.innerHTML = `\"${quote['body']}\"`
    quoteAuthor.innerHTML = ` - ${quote['author']}`
}

