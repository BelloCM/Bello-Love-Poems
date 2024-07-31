function displayPoem(response){

  
  new Typewriter("#poem", {
    strings:response.data.answer,
    autoStart: true,
    Delay: 1,
    cursor:""
  });
}

function generatePoem(event){
  event.preventDefault();
  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "9b2ab0b45ef9f3fd42t449a3oba19480";
  let prompt = `User instructions: Generate love poems ${"instructionsInput"}`;
  let context =
    "you are the best love poem writer and your mission is to generate 5 lines of poem and separate the lines using this element <br/> and make sure that you follow user instructions, sign the buttom of the poem  with <strong>'Bello'<strong/> element..";
    let apiUrl =
    `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  
  axios.get(apiUrl).then(displayPoem);
};

let poemFormElement = document.querySelector("#poem-generator-foem");
poemFormElement.addEventListener("submit", generatePoem );
