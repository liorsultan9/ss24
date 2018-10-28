var player = videojs("myAudio", {
    controls: true,
    width: 600,
    height: 300,
    fluid: false,
    plugins: {
        wavesurfer: {
            src: "live",
            waveColor: "#6fffe9",
            progressColor: "black",
            debug: true,
            cursorWidth: 1,
            msDisplayMax: 20,
            hideScrollbar: true
        },
        record: {
            audio: true,
            video: false,
            maxLength: 20,
            debug: true,
            audioEngine: "recorder.js"
        }
    }
}, function () {
    // print version information at startup
    var msg = 'Using video.js ' + videojs.VERSION +
        ' with videojs-record ' + videojs.getPluginVersion('record') +
        ', videojs-wavesurfer ' + videojs.getPluginVersion('wavesurfer') +
        ' and wavesurfer.js ' + WaveSurfer.VERSION;
    videojs.log(msg);
});

// error handling
player.on('deviceError', function () {
    console.log('device error:', player.deviceErrorCode);
});

// user clicked the record button and started recording
player.on('startRecord', function () {
    console.log('started recording!');
});

// user completed recording and stream is available
function playWav(myBlob) {
    wavesurfer.load(myBlob);
    //   wavesurfer.load('https://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3');

    var slider = document.querySelector('#slider');

    slider.oninput = function () {
        var zoomLevel = Number(slider.value);
        wavesurfer.zoom(zoomLevel);
    };
}
player.on('finishRecord', function () {
    // the blob object contains the recorded data that
    // can be downloaded by the user, stored on server etc.
    debugger;
    var blobUrl = (window.URL || window.webkitURL).createObjectURL(player.recordedData);
    playWav(blobUrl);
    console.log('finished recording: ', player.recordedData);
});
