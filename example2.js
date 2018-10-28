
var wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: 'red',
    progressColor: 'purple'
  });

  wavesurfer.on('ready', function () {
    var spectrogram = Object.create(WaveSurfer.Spectrogram);
    spectrogram.init({
      wavesurfer: wavesurfer,
      container: "#wave-spectrogram",
      fftSamples: 1024,
      labels: true
    });
    if (typeof spectrogram !== 'undefined') {
  // Now we know that foo is defined, we are good to go.
}
  });

  wavesurfer.load('blobUrl');

//      wavesurfer.load(myBlob);
// //   wavesurfer.load('https://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3');

//   var slider = document.querySelector('#slider');

//   slider.oninput = function () {
//     var zoomLevel = Number(slider.value);
//     wavesurfer.zoom(zoomLevel);
//   };
