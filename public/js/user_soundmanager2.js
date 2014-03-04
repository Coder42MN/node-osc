// user_soundmanager2.js

soundManager.setup({
  preferFlash: false,
  waitForWindowLoad: true,
  onready: function() {
    soundManager.createSound({
      id: 'Bass1',
      url: [
        {type:'audio/mp3',url:'/sounds/Bass1.mp3'},
        {type:'audio/ogg',url:'/sounds/Bass1.ogg'}
      ]
    });
    soundManager.createSound({
      id: 'Bass2',
      url: [
        {type:'audio/mp3',url:'/sounds/Bass2.mp3'},
        {type:'audio/ogg',url:'/sounds/Bass2.ogg'}
      ]
    });
    soundManager.createSound({
      id: 'Bass3',
      url: [
        {type:'audio/mp3',url:'/sounds/Bass3.mp3'},
        {type:'audio/ogg',url:'/sounds/Bass3.ogg'}
      ]
    });
    soundManager.createSound({
      id: 'Snare1',
      url: [
        {type:'audio/mp3',url:'/sounds/Snare1.mp3'},
        {type:'audio/ogg',url:'/sounds/Snare1.ogg'}
      ]
    });
    soundManager.createSound({
      id: 'Snare2',
      url: [
        {type:'audio/mp3',url:'/sounds/Snare2.mp3'},
        {type:'audio/ogg',url:'/sounds/Snare2.ogg'}
      ]
    });
    soundManager.createSound({
      id: 'Tom1',
      url: [
        {type:'audio/mp3',url:'/sounds/Tom1.mp3'},
        {type:'audio/ogg',url:'/sounds/Tom1.ogg'}
      ]
    });
    soundManager.createSound({
      id: 'Cymbal1',
      url: [
        {type:'audio/mp3',url:'/sounds/Cymbal1.mp3'},
        {type:'audio/ogg',url:'/sounds/Cymbal1.ogg'}
      ]
    });
    soundManager.createSound({
      id: 'Cymbal2',
      url: [
        {type:'audio/mp3',url:'/sounds/Cymbal2.mp3'},
        {type:'audio/ogg',url:'/sounds/Cymbal2.ogg'}
      ]
    });
    soundManager.createSound({
      id: 'Retro1',
      url: [
        {type:'audio/mp3',url:'/sounds/Retro1.mp3'},
        {type:'audio/ogg',url:'/sounds/Retro1.ogg'}
      ]
    });
  }
});