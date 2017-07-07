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
    // Carousel可传如两个参数，$ct为容器，infoList为轮播图信息（url与img.src）
    define(['jquery'], function ($) {
      function Carousel($ct, infoList) {
        this.ct = $ct
        this.isAnimate = false
        this.pageIndex = 0
        this.render(infoList)
        this.init()
        this.bind()
        this.autoPlay()
      }
      // 渲染dom节点
      Carousel.prototype.render = function (infoList) {
        var arr = ['<div id="carousel"><ul class="img-ct">']
        $.each(infoList, function (index, info) {
          arr.push('<li><a href="' + info.url + '"><img src="' + info.imgSrc + '"></a></li>')
        })
        arr.push('</ul><div class = "playPre"><</div><div class="playNext">></div><ul class="bullet">')
        $.each(infoList, function (idx, info) {
          arr.push("<li></li>")
        })
        arr.push("</ul></div>")
        var renderDom = arr.join('')
        this.ct.append($(renderDom))
        this.ct.find(".bullet li").eq(0).addClass("active")
      }
      //初始化参数
      Carousel.prototype.init = function () {
        var $imgCt = this.ct.find('.img-ct'),
          $imgs = this.ct.find('.img-ct li'),
          imgsCount = $imgs.length,
          imgWidth = $imgs.eq(0).width()

        $imgCt.append($imgs.eq(0).clone())
        $imgCt.prepend($imgs.last().clone())
        $imgCt.width((imgsCount + 2) * imgWidth)
        $imgCt.css({
          left: -imgWidth
        })

        this.imgCt = $imgCt
        this.imgs = $imgs
        this.imgsCount = imgsCount
        this.imgWidth = imgWidth
      }
      // 绑定事件
      Carousel.prototype.bind = function () {
        var _this = this
        this.ct.find(".playNext").on('click', function () {
          _this.playNext(1)
        })

        this.ct.find(".playPre").on('click', function () {
          _this.playPre(1)
        })

        this.ct.find(".bullet li").on('click', function () {
          var index = $(this).index()
          if (index > _this.pageIndex) {
            _this.playNext(index - _this.pageIndex)
          } else if (_this.pageIndex > index) {
            _this.playPre(_this.pageIndex - index)
          }
        })
      }
      // 向后播放
      Carousel.prototype.playNext = function (len) {
        var _this = this
        if (this.isAnimate) return
        this.isAnimate = true
        this.imgCt.animate({
          left: "-=" + len * _this.imgWidth
        }, function () {
          _this.pageIndex += len
          if (_this.pageIndex === _this.imgsCount) {
            _this.pageIndex = 0
            _this.imgCt.css({
              left: -_this.imgWidth
            })
          }
          _this.isAnimate = false
          _this.setBullet()
        })
      }
      // 向前播放
      Carousel.prototype.playPre = function (len) {
        var _this = this
        if (this.isAnimate) return
        this.isAnimate = true
        this.imgCt.animate({
          left: "+=" + len * _this.imgWidth
        }, function () {
          _this.pageIndex -= len
          if (_this.pageIndex < 0) {
            _this.pageIndex = _this.imgsCount - 1
            _this.imgCt.css({
              left: -_this.imgsCount * _this.imgWidth
            })
          }
          _this.isAnimate = false
          _this.setBullet()
        })
      }
      // 设置轮播图下部导航标
      Carousel.prototype.setBullet = function () {
        this.ct.find('.bullet li').removeClass('active').eq(this.pageIndex).addClass('active')
      }
      Carousel.prototype.autoPlay = function () {
        var _this = this
        setInterval(function () {
          _this.playNext(1)
        }, 3000)
      }

      return Carousel
    })