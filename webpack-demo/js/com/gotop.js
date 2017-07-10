  var $ = require('../lib/jquery-3.2.1.min')

  var GoTop = (function () {
    function GoTop($body) {
      this.$body = $body
      this.bind()
    }

    GoTop.prototype.bind = function () {
      var _this = this
      var $node = $("<div>回到顶部<div>")
      this.$body.append($node)
      $node.css({
        'position': 'fixed',
        'border': '1px solid #ccc',
        'bottom': '20px',
        'right': '20px',
        'background': '#ccc',
        'padding': '15px',
        'cursor': 'pointer',
        'border-radius': '5px'
      })
      $node.on('click', function () {
        $(window).scrollTop(0)
      })
      $(window).on('scroll', function () {
        if ($(this).scrollTop() > 200) {
          $node.show()
        } else {
          $node.hide()
        }
      })
    }
    return {
      init: function ($ct) {
        new GoTop($ct)
      }
    }
  })()

  module.exports = GoTop