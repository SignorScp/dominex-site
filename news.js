fetch("news.json")
.then(response => response.json())
.then(data => {

const newsContainer = document.getElementById("news-list")
const changelogContainer = document.getElementById("changelog-list")

/* NEWS */

if(newsContainer){

data.news.forEach(post => {

let div = document.createElement("div")
div.className = "news-card"

div.innerHTML = `

<h3>📢 ${post.title}</h3>
<p>${post.text.replace(/\n/g,"<br>")}</p>
<span class="date">${post.date}</span>
`

newsContainer.appendChild(div)

})

}

/* CHANGELOG */

if(changelogContainer){

data.changelog.forEach(post => {

let div = document.createElement("div")
div.className = "news-card"

div.innerHTML = `

<h3>📰 ${post.title}</h3>
<p>${post.text.replace(/\n/g,"<br>")}</p>
<span class="date">${post.date}</span>
`

changelogContainer.appendChild(div)

})

}

})

.catch(error => {
console.error("Errore caricamento news:", error)
})
