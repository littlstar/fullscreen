
# fullscreen

  Fullscreen api

## Installation

    $ npm install @littlstar/fullscreen

## Example

```js
var fullscreen = require('@littlstar/fullscreen');

fullscreen.on('change', function(full){
  console.log('changed to %s', full ? 'fullscreen' : 'regular');
});

setTimeout(function(){
  fullscreen();
}, 2000);
```

## Events

 - "change" (fullscreen) boolean

## API

### fullscreen([el])

  Display fullscreen document or `el`.

### fullscreen.exit()

  Exit fullscreen mode.

### fullscreen.supported

  Check if fullscreen is supported.

## License

  MIT
