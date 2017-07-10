app.get('/getData', function (req, res) {
  var imgs = [
    'http://via.placeholder.com/350x300',
    'http://via.placeholder.com/350x350',
    'http://via.placeholder.com/350x400',
    'http://via.placeholder.com/350x280',
    'http://via.placeholder.com/350x330',
    'http://via.placeholder.com/350x430',
    'http://via.placeholder.com/350x200',
    'http://via.placeholder.com/350x150',
    'http://via.placeholder.com/350x330',
    'http://via.placeholder.com/350x380',
    'http://via.placeholder.com/350x230',
    'http://via.placeholder.com/350x130',
    'http://via.placeholder.com/350x200',
    'http://via.placeholder.com/350x350',
    'http://via.placeholder.com/350x130',
    'http://via.placeholder.com/350x680',
    'http://via.placeholder.com/350x230'
  ]

  var pageIndex = req.query.index
  var len = req.query.length

  var retImgs = imgs.slice(pageIndex, pageIndex + len)

  res.send(retImgs)
})