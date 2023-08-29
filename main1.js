document.addEventListener("DOMContentLoaded", function() {
    const playButton = document.getElementById("play-button");
    const pauseButton = document.getElementById("pause-button");
    const stopButton = document.getElementById("stop-button");
    const audioPlayer = document.getElementById("audio-player");

    playButton.addEventListener("click", function() {
        audioPlayer.play();
    });

    pauseButton.addEventListener("click", function() {
        audioPlayer.pause();
    });

    stopButton.addEventListener("click", function() {
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
    });
});
