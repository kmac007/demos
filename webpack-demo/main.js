var $ = require('./js/lib/jquery-3.2.1.min')
var GoTop = require('./js/com/gotop')
var Carousel = require('./js/com/carousel')
var LoadMore = require('./js/com/loadmore')


var infoList = [{
    url: '#',
    imgSrc: "img/banner1.jpg"
  },
  {
    url: '#',
    imgSrc: "img/banner2.jpg"
  },
  {
    url: '#',
    imgSrc: "img/banner3.jpg"
  },
  {
    url: '#',
    imgSrc: "img/banner4.jpg"
  }
]
GoTop.init($('body'))
Carousel.init($(".container"), infoList)
LoadMore.init()