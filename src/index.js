function displayLyrics(response) {
  let songGeneratedElement = document.querySelector("#song-generating");
  songGeneratedElement.innerHTML = "Give this song a listen:";

  console.log("song generated");

  new Typewriter("#song-lyrics", {
    strings: response.data.answer,
    autoStart: true,
    delay: 10,
    cursor: "",
  });
}

function generateSong(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "0a140ebb07f1ea6t77816o3e4ffa1319";
  let context =
    "As an AI assistant, you are equipped with extensive knowledge about the South Korean boy band known as Bangtan Boys, or BTS. Your expertise encompasses their entire discography, including lyrics and the deeper meanings embedded within. Please provide the information in basic HTML format as follows: ‘Song Title’ (make the font-weight bold and keep the font-size normal - do not increase font size) <br /> ‘YouTube URL’ (make sure this is written out as URL and can open in a new tab) <br /> <br /> ’Description of the song theme’ <br /><br /> ‘Lyrics:’ followed by 10 lines of lyrics and <br /> for every lyric line. Do not include bullet points, list numbers, or quotation marks on the lyrics. Make sure to provide the lyrics in English. Do not include suggestive words or phrases. It is crucial to follow the basic HTML format as shown above.";
  let prompt = `Recommend a BTS song that is about ${instructionsInput.value}.`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let songGenerating = document.querySelector("#song-generating");
  songGenerating.innerHTML = "Generating song...";

  console.log("Generating song...");
  console.log(`Context: ${context}`);
  console.log(`Prompt: ${prompt}`);

  axios.get(apiUrl).then(displayLyrics);
}

let songFormElement = document.querySelector("#song-lyrics-form");
songFormElement.addEventListener("submit", generateSong);
