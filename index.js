// 防止多个音频同时播放
document.addEventListener('DOMContentLoaded', () => {
  const audioElements = document.querySelectorAll('.audio-player');

  audioElements.forEach((audio) => {
    audio.addEventListener('play', () => {
      audioElements.forEach((other) => {
        if (other !== audio && !other.paused) {
          other.pause();
          other.currentTime = 0;
        }
      });
    });
  });
});

