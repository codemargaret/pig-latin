// Business Logic
function translator(userSentence) {
  var words = userSentence.toLowerCase().split(" ");

  for (var i = 0; words.length > i; i +=1) {
    var word = words[i];
    var firstLetter = word.charAt(0);
    alert(firstLetter);

    if (firstLetter === 'a' || firstLetter === 'e' || firstLetter === 'i' || firstLetter === 'o' || firstLetter === 'u') {
      words[i] = word + "way"
      alert(word);
    } else if (firstLetter !== 'a' || firstLetter !== 'e' || firstLetter !== 'i' || firstLetter !== 'o' || firstLetter !== 'u') {
      words[i] = word + firstLetter + "ay";
    }

  }
  return words.join(" ");
};


// User Interface
$(document).ready(function() {
  $("form#translator").submit(function(event) {
    event.preventDefault();
    var userSentence = $("input.userInput").val();
    var result = translator(userSentence);

    $("#result").text(result);
    $("#result").show();
  });
});





// function translator(sentence) {

//   // var word = words[0];
// //   // var firstLetter = words.charAt(0);
// //
// // // for (var i = 0; words.length > i; i +=1) {
// // //   if (firstLetter === "a" || firstLetter === "e" || firstLetter === "i" || firstLetter === "o" || firstLetter === "u") {
// // //     word[i] + "way";
// // //   }
//   // }
// }

  // alert(letter);
// var letter = userSentence[0];
