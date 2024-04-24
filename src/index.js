function displayLyrics(response) {
  let songGeneratedElement = document.querySelector("#song-generating");
  songGeneratedElement.innerHTML = "💜 Give this song a listen:";

  let lyricContainer = document.querySelector("#song-lyrics");
  lyricContainer.classList.remove("hidden");

  new Typewriter("#song-lyrics", {
    strings: response.data.answer,
    autoStart: true,
    delay: 5,
    cursor: "",
  });
}

function generateSong(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "0a140ebb07f1ea6t77816o3e4ffa1319";
  let context =
    "As an AI assistant, you are equipped with extensive knowledge about the South Korean boy band known as Bangtan Boys, or BTS. Your expertise encompasses their entire discography, including lyrics and the deeper meanings embedded within. Please provide the information in basic HTML format as follows: <strong>Song Title</strong><br />YouTube URL (make sure this is written out in URL format and can open in a new tab)<br /><br /><strong>Description: </strong>(write the description of the song theme here)<br /><br /><strong>Lyrics: </strong><br />(provide only 10 lines, no more and no less, of the song lyrics here and <br /> for every lyric line) Mandatory instructions: Do not include bullet points, list numbers, parentheses, or quotation marks on the lyrics; Make sure to provide the lyrics in English; Do not include suggestive words or phrases. It is absolutely mandatory to follow the basic HTML format and to have <br /> in between the YouTube URL, Description, and Lyrics.";
  let prompt = `Recommend a BTS song that is about ${instructionsInput.value}.`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  // Show song container
  let songContainer = document.querySelector("#song-container");
  songContainer.classList.remove("hidden");

  let songGenerating = document.querySelector("#song-generating");
  songGenerating.innerHTML = `⏳ <span id="generating">Generating song...</span>`;

  // Function to type "Generating song..."
  function typeGeneratingSong() {
    let generatingSpan = document.querySelector("#generating");
    new Typewriter(generatingSpan, {
      strings: "Generating song...",
      autoStart: true,
      delay: 20,
      cursor: "",
      deleteSpeed: 0.1,
      loop: true,
    });
  }

  typeGeneratingSong();

  axios.get(apiUrl).then(displayLyrics);
}

let songFormElement = document.querySelector("#song-lyrics-form");
songFormElement.addEventListener("submit", generateSong);
