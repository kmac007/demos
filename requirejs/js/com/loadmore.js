define(['jquery', 'com/waterfall'], function ($, Waterfall) {
  var LoadMore = function () {
    this.init()
  }

  LoadMore.prototype = {
    init: function () {
      var pageIdx = 0
      var _this = this
      var ctHeight = 1000
      $('.load-more').on('click', function (e) {
        e.preventDefault()
        $(".images-container").height(ctHeight)
        ctHeight += 1000
        $.ajax({
          url: 'getData',
          type: 'GET',
          data: {
            index: pageIdx,
            length: 6
          },
          success: function (ret) {
            _this.render(ret)
            pageIdx += 6
          },
          error: function () {
            console.log("error")
          }
        })
      })
    },

    render: function (ret) {
      var html = ''
      $.each(ret, function (idx, val) {
        html += '<li class=item><img src="' + val + '" alt="">'
      })
      $(".images-container").append(html)
      new Waterfall($(".images-container"))
    }
  }

  return LoadMore;
})