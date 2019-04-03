$(document).ready(function(){
  var vowels = ['a','e','i','o','u','y','A','E','I','O','U','Y'];
  var testInput = "input";
  // add "ay" to single-letter words beginning with a vowel

  function singleChar(input){
    if (vowels.indexOf(input) != -1){
      // console.log(vowels.indexOf(input));
      // console.log(input);
      return input + "ay";
    } else {
      return input;
    };
  };
// console.log(singleChar(testInput));

// for words beginning with a vowel, add "way" to the end
  function firstVowel (input){
    // console.log(input);
    if ( input.length > 1 && vowels.indexOf(input.charAt(0)) != -1){
      console.log("this works");
      return input + "way";
    } else{
      return input;
    };
  };
  // console.log(testInput.charAt(0));
  // console.log(firstVowel(testInput));

  $("#userInputSubmit").click(function(){
    var userInput = $(".userInput").val();
    $('output').append("<br>" + singleChar(userInput));
    $('output').append("<br>" + firstVowel(userInput));
  });
});
