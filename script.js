function generatePoem(event){

    event.preventDefault()
    
    new Typewriter("#poem", {
      strings:"The love is not love without action",
      autoStart: true,
      Delay: 1,
      cursor:""
    });
}


let poemFormElement = document.querySelector("#poem-generator-foem");
poemFormElement.addEventListener("submit", generatePoem )

