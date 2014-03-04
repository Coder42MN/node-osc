// user_socket.io.js

var socket = io.connect('http://10.10.47.197');
socket.on('osc', function (data) {
  console.log(data);
  if (data[0] === "/PITTERPADDER/Vol1") {
    $('#volume').width(data[1] + "%");
    for(var i = 0;i<soundManager.soundIDs.length;i++){
      soundManager.setVolume(soundManager.soundIDs[i], data[1]);
    }
  }
  if (data[0] === "/PITTERPADDER/Bass1")  {
    if (data[1] === 1) {
    soundManager.play('Bass1');
    $('#Bass1 > .inner-pad').addClass('active');
    } else {
      $('#Bass1 > .inner-pad').removeClass('active');
    }
  }
  if (data[0] === "/PITTERPADDER/Bass2")  {
    if (data[1] === 1) {
    soundManager.play('Bass2');
    $('#Bass2 > .inner-pad').addClass('active');
    } else {
      $('#Bass2 > .inner-pad').removeClass('active');
    }
  }
  if (data[0] === "/PITTERPADDER/Bass3")  {
    if (data[1] === 1) {
    soundManager.play('Bass3');
    $('#Bass3 > .inner-pad').addClass('active');
    } else {
      $('#Bass3 > .inner-pad').removeClass('active');
    }
  }
  if (data[0] === "/PITTERPADDER/Snare1")  {
    if (data[1] === 1) {
    soundManager.play('Snare1');
    $('#Snare1 > .inner-pad').addClass('active');
    } else {
      $('#Snare1 > .inner-pad').removeClass('active');
    }
  }
  if (data[0] === "/PITTERPADDER/Snare2")  {
    if (data[1] === 1) {
    soundManager.play('Snare2');
    $('#Snare2 > .inner-pad').addClass('active');
    } else {
      $('#Snare2 > .inner-pad').removeClass('active');
    }
  }
  if (data[0] === "/PITTERPADDER/Tom1")  {
    if (data[1] === 1) {
    soundManager.play('Tom1');
    $('#Tom1 > .inner-pad').addClass('active');
    } else {
      $('#Tom1 > .inner-pad').removeClass('active');
    }
  }
  if (data[0] === "/PITTERPADDER/Cymbal1")  {
    if (data[1] === 1) {
    soundManager.play('Cymbal1');
    $('#Cymbal1 > .inner-pad').addClass('active');
    } else {
      $('#Cymbal1 > .inner-pad').removeClass('active');
    }
  }
  if (data[0] === "/PITTERPADDER/Cymbal2")  {
    if (data[1] === 1) {
    soundManager.play('Cymbal2');
    $('#Cymbal2 > .inner-pad').addClass('active');
    } else {
      $('#Cymbal2 > .inner-pad').removeClass('active');
    }
  }
  if (data[0] === "/PITTERPADDER/Retro1")  {
    if (data[1] === 1) {
    soundManager.play('Retro1');
    $('#Retro1 > .inner-pad').addClass('active');
    } else {
      $('#Retro1 > .inner-pad').removeClass('active');
    }
  }
});
