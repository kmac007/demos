  var $ = require('../lib/jquery-3.2.1.min')
  
  var LoadMore = (function () {
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
        this.bind($(".images-container"))
      },
      bind: function ($ct) {
        var colCount = parseInt($ct.width() / $ct.find('.item').width())
        var itemArr = []
        for (var i = 0; i < colCount; i++) {
          itemArr[i] = 0
        }
        $ct.find('.item').each(function () {
          var minValue = Math.min.apply(null, itemArr)
          var minIndex = itemArr.indexOf(minValue)
          $(this).css({
            top: itemArr[minIndex],
            left: $(this).outerWidth(true) * minIndex
          })
          itemArr[minIndex] += $(this).outerHeight(true)
        })
      }
    }

    return {
      init: function () {
        new LoadMore()
      }
    }
  })()


  module.exports = LoadMore