console.log("here api news")

const newskey ="46202afe6a0e4a67a0ba15feb5845738"

//search Word
let searchWord=`apple`
const newUrl = `https://newsapi.org/v2/everything?q=${searchWord}&apiKey=${newskey}`

//category
let cat="general"
const catApi =`https://newsapi.org/v2/top-headlines?apiKey=${newskey}&category=${cat}
`


document.getElementById("news_search").addEventListener("click", searchNews())

function searchNews () {
    //fetch(catApi)
    fetch(newUrl)
.then(response => response.json())
.then(data => {
    console.log(data.articles)

    document.getElementById("news").innerHTML = data.articles.map(news =>
       `
       <div class="col-md-3 col-sm-6 mt-3">
       <div class="card"">
         <img class="card-img-top" src="${news.urlToImage}" style="height:200px alt="Card image cap">
         <div class="card-body">
           <h5 class="card-title">${news.title}</h5>
           <p class="card-text">${news.description}</p>
           <a href="${news.url}" class="btn btn-primary">Go somewhere</a>
         </div>
       </div>
     </div>

       ` 
        ).join(``)

}

);
}