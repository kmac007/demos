require(['jquery', 'com/carousel', 'com/gotop', 'com/loadmore'], function ($, Carousel, GoTop, LoadMore) {
  new GoTop($('body'))
  new Carousel($(".container"), infoList)
  new LoadMore()
})