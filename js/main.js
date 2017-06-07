const btn = $('#searchButton')          //the same: const btn = document.querySelector('#searchButton')
const box = $('#searchBox')
const div = $('#articlesContainer')

box.focus()

btn.on('click',function(){               // the same: btn.addEventListener)(......)
  console.log(box.val());                 //the same: box.value
  getArticles(box.val())                //the same: box.value
})
box.on('keypress', function(event){
  if(event.keyCode === 13){
    getArticles(box.val())
  }
})
const WIKI_URL = "https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch="

function getArticles(term) {
  if(term.length === 0) return; // quit if term is empty
  $.ajax({
    url: WIKI_URL + term,
    dataType: 'jsonp',
    success: function(response){
      console.log(response);
      var str = ''
      response.query.search.forEach(function(article){
       str += '<a class = "article" href="https://en.wikipedia.org/wiki/' + article.title + '">'
        str += '<h2>' + article.title + ' </h2>'
        str += '<h2>' + article.snippet + ' </h2>'
        str += '</a>'
      })

      div.html(str)           //  the same: div.innerHTML = ......
      box.select()
    }
  })
}
