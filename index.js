
/**
 * Module dependencies.
 */

var Emitter = require('emitter');

/**
 * Expose `fullscreen()`.
 */

exports = module.exports = fullscreen;

/**
 * Mixin emitter.
 */

Emitter(exports);

/**
 * document element.
 */

var element = document.documentElement;

/**
 * fullscreen supported flag.
 */

exports.supported = !!(element.requestFullscreen
  || element.webkitRequestFullscreen
  || element.mozRequestFullScreen);

/**
 * Enter fullscreen mode for `el`.
 *
 * @param {Element} [el]
 * @param {Object} opts - optional
 * @api public
 */

function fullscreen(el, opts){
  el = el || element;
  if (el.requestFullscreen) return el.requestFullscreen(opts);
  if (el.mozRequestFullScreen) return el.mozRequestFullScreen(opts);
  if (el.webkitRequestFullscreen) return el.webkitRequestFullscreen(opts);
  if (el.msRequestFullscreen) return el.msRequestFullscreen(opts);
}

/**
 * Exit fullscreen.
 *
 * @api public
 */

exports.exit = function(){
  var doc = document;
  if (doc.exitFullscreen) return doc.exitFullscreen();
  if (doc.mozCancelFullScreen) return doc.mozCancelFullScreen();
  if (doc.webkitCancelFullScreen) return doc.webkitCancelFullScreen();
  if (doc.msCancelFullScreen) return doc.mdCancelFullScreen();
};

/**
 * Change handler function.
 */

function change(prop) {
  return function(){
    var val = document[prop];
    if (false === val) { document[prop] = true; }
    if (null == val) { document[prop] = true; }
    val = document[prop];
    exports.emit('change', val);
  }
}

/**
 * Handle events.
 */

if (document.addEventListener) {
  document.addEventListener('fullscreenchange', change('fullscreen'));
  document.addEventListener('mozfullscreenchange', change('mozFullScreen'));
  document.addEventListener('webkitfullscreenchange', change('webkitIsFullScreen'));
  document.addEventListener('msfullscreenchange', change('msFullscreenEnabled'));
}
