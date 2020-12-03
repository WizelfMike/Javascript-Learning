    "use strict"   
    let myText = document.getElementById('myText');
    let myImage = document.getElementById('myImage');
    let myButton = document.getElementById('myButton');
    let myReset = document.getElementById('myReset');

    myButton.addEventListener('click', function(){
        main();
    })

    myReset.addEventListener('click', function(){
        /* hier komt jouw code */
    })

    function main(){
        let index = randomizer(arrayLength);
         let dezeTextWordtHet = makeThisSentence();
         myText.innerHTML = dezeTextWordtHet;
         sayItLoud(dezeTextWordtHet); // say something nice say it loud
         selectThisImage(); // show a nice image
    }
    
    
    
    function randomizer(range = 1){ 
        // Math.random geeft een waarde  0 <= waarde < 1 (dus exclusief 1)
        return Math.floor((Math.random() * range));
    }
    
    
    function makeThisSentence(){
        let index = randomizer(arrayLength);
        let woord1 = onderwerp[index];
        let woord2 = werkwoord[index];
        let woord3 = restwoord[index];
        let outputString = woord1 + " " + woord2 + " " + woord3;
        return outputString;
    }
    
    function selectThisImage(){
        let index = randomizer(arrayLength);
        myImage.src = plaatjes[index]; 
    }
    
    function sayItLoud (textString) {
      let index = randomizer(arrayLength);
      let message = new SpeechSynthesisUtterance(textString);
      let voices = window.speechSynthesis.getVoices();
      message.voice = voices[1];
      message.pitch = 1; // range between 0 and 2
      message.rate = 1; // range between 0.1 (lowest) and 10 (highest) 
      window.speechSynthesis.speak(message);
    }
    
    
    const onderwerp = ["He", "Mike", "She"];
    const werkwoord = ["is", "was", "may be"];
    const restwoord = ["lit", "cool", "full of crap"];
        
    let plaatjes = ["https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Forig00.deviantart.net%2Fbf46%2Ff%2F2013%2F050%2F4%2F9%2Fprofile_picture_by_calcifer_purpledream-d5vkudb.png&f=1&nofb=1", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.anime-planet.com%2Fimages%2Fcharacters%2Fhowl-1838.jpg%3Ft%3D1373350796&f=1&nofb=1", "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fstatic2.wikia.nocookie.net%2F__cb20120610163716%2Fhowlscastle%2Fimages%2Fc%2Fca%2FSophie_H.jpg&f=1&nofb=1"]
    let arrayLength = onderwerp.length;
