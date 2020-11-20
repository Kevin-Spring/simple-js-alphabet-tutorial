/* Uppgifter
*Skriv med hjälp av en for-loop ut hela alfabetet
*Skriv ut alfabetet baklänges
*Skriv ut varannan bokstav i alfabetet
*Skriv ut var tredje bokstav i alfabetet
*Skriv ut om en bokstav är en vokal eller konsonant (for-loop genom hela alfabetet)
*Skriv ut hela alfabetet i slumpmässig ordning
*Skriv ut ditt förnamn och efternamn med hjälp av arrayen, med korrekta versaler och gemener (exempel Anna Johansson). 
    Skriv allt på samma rad.
*/


let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",  
"o", "p", "q","r", "s", "t", "u", "v", "w", "x", "y", "z", "å", "ä", "ö", 
"A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N",  
"O", "P", "Q","R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Å", "Ä", "Ö"];

// -------- Skriv med hjälp av en for-loop ut hela alfabetet -------- //

    /* for( let i = 0; i < alphabet.length; i++){
        console.log("letter: " + alphabet[i]);
    } */

// -------- Skriv ut alfabetet baklänges -------- //

    /* for( let i = 0; i < alphabet.length; i++){
        console.log("letter: " + alphabet.reverse()[i]);
    } */

// -------- Skriv ut varannan bokstav i alfabetet -------- //

    /* for( let i = 0; i < alphabet.length; i+=2){
        console.log("letter: " + alphabet[i]);
    } */

// -------- Skriv ut var tredje bokstav i alfabetet -------- //

    /* for( let i = 0; i < alphabet.length; i+=3){
        console.log("letter: " + alphabet[i]);
    }
 */

// -------- Skriv ut om en bokstav är en vokal eller konsonant (for-loop genom hela alfabetet) -------- //

    /* let vowels = ["a", "e", "i", "o", "u", "y", "å", "ä", "ö"];
    let consonants = [""];

    for( let i = 0; i < alphabet.length; i++){

        if (vowels.includes(alphabet[i])){
            
            console.log("vowels: " + alphabet[i]);

        } else {
            
            consonants += alphabet[i];

        }
    }

    console.log("consonant: " + consonants) */

// -------- Skriv ut hela alfabetet i slumpmässig ordning -------- //

/* for( let i = 0; i < alphabet.length; i++){

    //Tar bokstävernas index och slumpar dem
        //returnerar ett slupmässigt tal mellan 0 - 29 (alfabetets längd)
    var randomIndex = Math.floor(Math.random()* alphabet.length)
    //Konverterar indexnumret till bokstäverna
        //Stoppar in det slumpmässiga talet (0 - 29) och får fram bokstaven med respektive index 
    var randomLetter = alphabet[randomIndex];
    
    console.log(randomLetter);

} */

/* Fisher-Yates Shuffle */
/* function shuffle(array) {

    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;

    }
  
    return array;

  }
  
  shuffle(alphabet);
  console.log(alphabet); */

/* ------ Skriv ut ditt förnamn och efternamn med hjälp av arrayen, 
  med korrekta versaler och gemener (exempel Anna Johansson). (Skriv allt på samma rad) ------ */

  function titleCase(name) {

    //seperar alla bokstäver var för sig.
    let letterArr = name.toLowerCase().split('');
   
    let nameArr= [];
  
    //Kikar igenom varjebokstav som skrivits in.
    for (let i = 0; i < letterArr.length; i++) {

        //Kikar igenom alfabetet och kollar så att innehållet matchar, även om det finns ett mellanslag med för att tillåta det.
        if(alphabet.includes(letterArr[i]) || letterArr[i].match(" ")){
   
            //Pushar in de godkända bokstäverna i en ny array.
            nameArr.push(letterArr[i]);      
            
        } else {
            return "Endast tillåtna tecken tack!";
        }
       
    }

    //Tar den nya arrayen och sätter ihop det till en string
        //separar det vid mellanslaget så det blir ännu en array
            //Den här gången för att loopa igenom de ihopsatta namnen som finns (som var separerade med mellanslag)
    let str = nameArr.join("").split(" ");

    //För varje namn så får första bokstaven stor bokstav
    for (var i = 0; i < str.length; i++) {
       
        str[i] = str[i].charAt(0).toUpperCase() + str[i].substring(1);     
    }
   //Sätter ihop den nya arrayen med versaler till en sträng
    return str.join(" ");
       
 }

 console.log(titleCase(""));