function resetZoom() {
  var designWidth = 750
  var deviceWidth = document.documentElement.clientWidth
  var scale = deviceWidth / designWidth
  document.body.style.zoom = scale
}
resetZoom()
window.onresize = function() {
  resetZoom()
}
