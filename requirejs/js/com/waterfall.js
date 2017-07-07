define(['jquery'], function ($) {
  var WaterFall = function ($ct) {
    this.$ct = $ct
    this.bind()
  }

  WaterFall.prototype = {
    bind: function () {
      var colCount = parseInt(this.$ct.width() / this.$ct.find('.item').width())
      var itemArr = []
      for (var i = 0; i < colCount; i++) {
        itemArr[i] = 0
      }
      this.$ct.find('.item').each(function () {
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

  return WaterFall
})
// 对图片绑定事件进行瀑布流布局
// WaterFall.prototype.bind = function () {

// }
/*
var WaterFall = function(){
  var _this = this
  this.bind()
  $(window).resize(function () {
  _this.bind()
  })
}

WaterFall.prototype.bind = function(){
   var colCount = parseInt($('.images-container').width() / $('.item').width())
}

function waterfall() {
  var colCount = parseInt($('.container').width() / $('.item').width())
  var itemArr = []
  for (var i = 0; i < colCount; i++) {
    itemArr[i] = 0
  }
  $('.item').each(function () {
    var minValue = Math.min.apply(null, itemArr)
    var minIndex = itemArr.indexOf(minValue)
    $(this).css({
      top: itemArr[minIndex],
      left: $(this).outerWidth(true) * minIndex
    })
    itemArr[minIndex] += $(this).outerHeight(true)
  })
}
*/