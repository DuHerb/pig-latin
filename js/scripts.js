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
      var index = 0;
      outerBlock:
        for (var i = 0; i < word.length; i++){
          innerBlock:
          for (var j = 0; j < vowels.length; j++)
            if(word.charAt(i)===vowels[j]){
              index = i;
              break outerBlock;
            }
          }
          //check out word.substring()
      var vowelSlice = word.slice(index);
      var conSlice = word.slice(-word.length,-(word.length - index)) + "ay";
      return vowelSlice + conSlice;
    };
    //form submit
  $('#userInputSubmit').click(function(){
    var userInput = $('.userInput').val();

    $('output').append("<br>" + "isSingleChar(): " + isSingleChar(userInput));
    $('output').append("<br>" +  "isFirstLetterVowel(): " + isFirstLetterVowel(userInput));
    $('output').append("<br>" +  "leadingConsonats(): " + leadingConsonats(userInput));

    // var index = testInput.indexOf("a");
    // var conSlice = testInput.slice(-testInput.length,-(testInput.length - index));
    // var vowelSlice = testInput.slice(index);
    // console.log(testInput, index, conSlice, vowelSlice, vowelSlice + conSlice + "ay");

    //searching for first vowel
    // var index = "";
    // // var breakOut = "false";
    // outerBlock:
    //   for (var i = 0; i < testInput.length; i++){
    //     innerBlock:
    //     for (var j = 0; j < vowels.length; j++)
    //       if(testInput.charAt(i)===vowels[j]){
    //         index = i;
    //         break outerBlock;
    //       }
    //
    //     }
    // var testInput = "happy";
    // console.log(leadingConsonats(testInput));
  })
//end of $document.ready()
});
