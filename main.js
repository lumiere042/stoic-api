
async function getQuote(){
    const response = await fetch('https://stoic-server.herokuapp.com/random')

    const data = await response.json()

    const quote = data['0']
    
    console.log(quote)
}

getQuote()

