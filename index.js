'use strict'

/**
 * Convert URL from Youtube video for URL for embeding.
 *
 * @param {string} videoUrl - URL of Youtube VIdeo
 */
module.exports = function makeYoutubeEmbed(videoUrl) {
  if (typeof videoUrl !== 'string') {
    return undefined
  }

  const getId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/
    const match = url.match(regExp)

    if (match && match[2].length == 11) {
      return match[2]
    }
  }

  const id = getId(videoUrl)

  if (id) {
    return '//www.youtube.com/embed/' + id
  }
}