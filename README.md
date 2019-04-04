# YouTube embed maker

Convert YouTube video url to url for embedding.

## Usage

```js
const youtubeEmbed = require('youtube-embed')

const embed = youtubeEmbed('https://www.youtube.com/watch?v=98_ZSZVTbgo')

const html = `<iframe width="600" height="380" src="${embed}" frameborder="0"></iframe>`
```

## License

MIT