$(document).ready(function(){
  var vowels = ['a','e','i','o','u','y','A','E','I','O','U','Y'];


  //isSingleChar() checks that a string is one character long, and if it's a vowel, returns character + ay, else returns original input
  function isSingleChar(word){
    if (vowels.indexOf(word) != -1){
      return word + "ay";
    } else {
      return word;
    };
  };
  // for words beginning with a vowel, add "way" to the end
    function isFirstLetterVowel (word){
      // console.log(input);
      if (word.length > 1 && vowels.indexOf(word.charAt(0)) != -1){
        // console.log("this works");
        return word + "way";
      } else{
        return word;
      };
    };
    // for words that begin with one or more consonants, return a string that pushes leading consonates + ay to the end of the word.
    function leadingConsonats(word){
      var pigWord = "";
      var count = 0;
      //cuts out leading consonants and add "ay"
      var vowelSlice = word.slice(index);
      var consonantSlice = word.slice(-word.length,-(word.length - index));
      return vowelSlice + conSlice + "ay";
    };
    //form submit
  $('#userInputSubmit').click(function(){
    var userInput = $('.userInput').val();

    $('output').append("<br>" + "isSingleChar(): " + isSingleChar(userInput));
    $('output').append("<br>" +  "isFirstLetterVowel(): " + isFirstLetterVowel(userInput));

      var testInput = "struggle";
    var index = testInput.indexOf("u");
    var conSlice = testInput.slice(-testInput.length,-(testInput.length - index)) + "ay";
    var vowelSlice = testInput.slice(index);
    console.log(index, testInput, conSlice, vowelSlice, vowelSlice + conSlice);
  })
//end of $document.ready()
});
