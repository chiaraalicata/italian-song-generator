function generateSong(event) {
  event.preventDefault();

  let songElement = document.querySelector("#song");
  songElement.innerHTML = "";

  let songText =
    "🎵 Ti amo come il sole ama il mare... la mia canzone è per te. 🎶";

  let typewriter = new Typewriter(songElement, {
    loop: false,
    delay: 50,
  });

  typewriter.typeString(songText).pauseFor(500).start();
}

let songFormElement = document.querySelector("#song-generator-form");
songFormElement.addEventListener("submit", generateSong);
