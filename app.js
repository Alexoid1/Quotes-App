const paraghap=document.querySelector('.quotesP')
const author=document.querySelector('.quotesA')
const newQ=document.querySelector('.ButtonQ')
let quotes=[]
fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    quotes.push(...data);
    
    function mostrar (){
        let quote=quotes[Math.floor(Math.random() * 1643)]
        paraghap.textContent=`"${quote.text}"`
        author.textContent=`${quote.author}`
        author.setAttribute('href',`https://es.wikipedia.org/wiki/${quote.author}`)

    }
    mostrar()
    newQ.addEventListener('click',mostrar)
});
