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
  // consecCons takes one word and looks for consecutive consonates and turns it into a pig latin word
  function consecCons(input) {
    var index = 0;
    var inputLocal = input;
    var output = "";
    var breakOut = false;

    for (var i = 0; i < vowels.length; i++) {
      if (input.indexOf(vowels[i]) != -1) {
        index = input.indexOf(vowels[i]);
        breakOut = true;
      }
      if (breakOut) {
        break;
      }
    }
    console.log(index);
    // vowels.some( function(vowel){
    //   if (input.indexOf(vowel) != -1){
    //     index = input.indexOf(vowel);
    //       return true;
    //   }
    // });
    // var inputSlice = inputLocal.slice(index);
    // var inputSplice = inputLocal.split('').splice(0, index);
    // output = inputSlice + inputSplice.join('') + "ay";
    //
    // console.log(inputSlice);
    // console.log(inputSplice);
    // console.log(output);
    return index;
  };

  $("#userInputSubmit").click(function(){
    var userInput = $(".userInput").val();
    // $('output').append("<br>" + singleChar(userInput));
    // $('output').append("<br>" + firstVowel(userInput));
    $('output').append("<br>" + consecCons(userInput));
  });

//   var word = "charge";
// console.log(word.indexOf("a"));
});
