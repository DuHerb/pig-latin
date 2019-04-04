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
  // findVowel() finds the index of the first vowel in a word
  function findVowel(word){
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
        return index;
  }
  // for words that begin with one or more consonants, return a string that pushes leading consonates + ay to the end of the word.
  function leadingConsonats(word){
    var index = findVowel(word);
  //check out word.substring()
    var vowelSlice = word.slice(index);
    var conSlice = word.slice(-word.length,-(word.length - index)) + "ay";
    return vowelSlice + conSlice;
  };
    //form submit
  $('#userInputSubmit').click(function(){
    var userInput = $('.userInput').val();

    // $('output').append("<br>" + "isSingleChar(): " + isSingleChar(userInput));
    // $('output').append("<br>" +  "isFirstLetterVowel(): " + isFirstLetterVowel(userInput));
    // $('output').append("<br>" +  "leadingConsonats(): " + leadingConsonats(userInput));
    $('output').append("<br>" +  "leadingConsonats(): " + leadingConsonats(userInput));
    $('output').append("<br>" +  "findVowel(): " + findVowel(userInput));

  })
//end of $document.ready()
});
