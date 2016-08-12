
var fullscreen = require('..')

var go = document.getElementById('go')
var video = document.getElementById('myvideo')
var go_video = document.getElementById('go_video')
var exit = document.getElementById('exit')

go.addEventListener('click', function () {
  fullscreen()
})

go_video.addEventListener('click', function () {
  fullscreen(video)
})

exit.addEventListener('click', function () {
  fullscreen.exit()
})

fullscreen.on('change', function (full) {
  console.log('changed to %s', full ? 'fullscreen' : 'regular')
})
