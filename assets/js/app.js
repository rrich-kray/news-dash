var spanClasses = [`grid-col-span-1`, `grid-col-span-2`, `grid-col-span-3`]
var categories = ['category=', ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology']]
var colorClasses = ['bg-purple', 'bg-blue', 'bg-green', 'bg-yellow', 'bg-red', 'bg-orange', 'bg-teal']
var searchBy = ['country=', ['country', 'sources', 'category', 'top-headlines']]
var baseUrl = 'https://newsapi.org/v2/everything?'
var apiDelimiter = '&'

var chooseRandomClass = function() {return spanClasses[Math.floor(Math.random() * spanClasses.length)]}
var chooseRandomColor = function() {return colorClasses[Math.floor(Math.random() * colorClasses.length)]}
var getUserInput = function() {return document.querySelector('.search').value}
var createUrl = function(url, delimiter, ...parameters) {return parameters.forEach(parameter => url += `${delimiter}${parameter}`)}

var pullNews = function() {
    document.querySelector('.grid-container').innerHTML = ''
    var searchTerm = getUserInput();
    console.log(searchTerm)
    var url = `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=8cd14927b4cb4879b174cabe1c24f270`
    console.log(url);
    fetch(url).then(response => {if (response.ok){response.json().then(data => {
        console.log(data);
        for (var i = 0; i <= 20; i++) {
            var html = `
            <div class='grid-item ${chooseRandomClass()} ${chooseRandomColor()}'>
                <h3>${data.articles[i].title}</h3>
                <p class='author'>by ${data.articles[i].author}</p>
                <p class='content'>${data.articles[i].description}</p>
                <a href='${data.articles[i].url}' target='_blank'>Source</a>
            </div> `
            document.querySelector('.grid-container').innerHTML += html
        }
    })}})
}

document.querySelector('.search-button').addEventListener('click', pullNews)