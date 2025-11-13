function displaySong(response) {
  const songElement = document.querySelector("#song");
  songElement.innerHTML = "";

  const songText = response.data.answer?.trim();

  if (!songText) {
    songElement.innerHTML = "❌ Sorry, I couldn’t generate a song this time.";
    return;
  }

  songElement.classList.remove("hidden");
  songElement.classList.add("visible");

  const typewriter = new Typewriter(songElement, {
    loop: false,
    delay: 20,
    cursor: "",
  });

  typewriter.typeString(songText).start();
}

function generateSong(event) {
  event.preventDefault();

  const instructionsInput = document.querySelector("#user-instructions");
  const songElement = document.querySelector("#song");
  const apiKey = "2d69fd45aab0o483c2bccbf7b7ct0850";

  const prompt = `User instructions: Generate an Italian song about ${instructionsInput.value}`;
  const context =
    "You are a talented Italian songwriter. Your mission is to write a short song of exactly two strophes, separated by <br /><br />. Each strophe should contain 3 to 5 lines. Only output the lyrics of the song, using <br /> for line breaks — no other HTML tags. Do not add introductions, titles, or extra comments. Just return the song itself.";

  const apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(
    prompt
  )}&context=${encodeURIComponent(context)}&key=${apiKey}`;

  songElement.innerHTML = "🎵 Generating your song... please wait 🎶";
  songElement.classList.remove("hidden");
  songElement.classList.remove("visible");

  axios
    .get(apiUrl)
    .then(displaySong)
    .catch((error) => {
      songElement.innerHTML =
        "❌ Oops, something went wrong. Please try again.";
      console.error(error);
    });
}

const songFormElement = document.querySelector("#song-generator-form");
songFormElement.addEventListener("submit", generateSong);
