function displaySong(response) {
  let songElement = document.querySelector("#song");
  songElement.innerHTML = "";

  let typewriter = new Typewriter(songElement, {
    loop: false,
    delay: 20,
    cursor: "",
  });

  typewriter.typeString(response.data.answer).start();
}

function generateSong(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");

  let apiKey = "2d69fd45aab0o483c2bccbf7b7ct0850";
  let prompt = `User instructions: Generate an Italian song about ${instructionsInput.value}`;
  let context =
    "You are a great songwriter and love to write catchy songs. Your mission is to generate a 3-strophe song and separate each strophe with a <br /><br />. You are an AI that writes Italian songs. Only output the lyrics of the song using <br /> for line breaks — no other HTML tags. Do not add introductions, explanations, or extra text.";

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let songElement = document.querySelector("#song");
  songElement.innerHTML = "🎵 Generating your song... please wait 🎶";

  axios
    .get(apiUrl)
    .then(displaySong)
    .catch(function (error) {
      songElement.innerHTML =
        "❌ Oops, something went wrong. Please try again.";
      console.error(error);
    });
}

let songFormElement = document.querySelector("#song-generator-form");
songFormElement.addEventListener("submit", generateSong);
