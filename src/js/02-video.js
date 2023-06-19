import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

player.on('play', function () {
  console.log('played the video!');
});

player.on(
  'timeupdate',
  throttle(function (data) {
    localStorage.setItem(
      'videoplayer-current-time',
      JSON.stringify(data.seconds)
    );
  }, 1000)
);

let currentTime = localStorage.getItem('videoplayer-current-time');
console.log(currentTime);

player
  .setCurrentTime(JSON.parse(currentTime))
  .then(function (seconds) {
    localStorage.setItem('videoplayer-current-time', seconds);
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        console.log(
          'the time was less than 0 or greater than the video’s duration'
        );

        break;

      default:
        console.log('some other error occurred');
        break;
    }
  });
