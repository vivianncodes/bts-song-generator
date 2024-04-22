function generateSong(event) {
  event.preventDefault();

  new Typewriter("#song-lyrics", {
    strings: "blahblahblah",
    autoStart: true,
    delay: 10,
    cursor: "",
  });
}

let songFormElement = document.querySelector("#song-lyrics-form");
songFormElement.addEventListener("submit", generateSong);
