const seanUrl1 = '/public/debugging-woes.mp3';
const seanUrl2 = '/public/promise.mp3';
const seanUrl3 = '/public/touch-some-grass.mp3';
const seanUrl4 = '/public/two-days-ago.mp3';

const urlArray = [seanUrl1, seanUrl2, seanUrl3, seanUrl4];

function getASean() {
  const randomSean = urlArray[Math.floor(Math.random() * 4)];

  document.getElementById('sean-audio-source').setAttribute('src', randomSean);
}

getASean();
