const playMusic = () => {
  const num = Math.floor(Math.random() * 3) + 1;
  var audio = document.getElementById(`audio${num}`);
  audio.play();
  document.getElementById('button-play').style.display = 'none'
};
