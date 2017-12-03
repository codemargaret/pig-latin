// Business Logic
function translator(userSentence) {
  var words = userSentence.toLowerCase().split(" ");

  var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
  var vowels = ["a", "e", "i", "o", "u"];

  for (var i = 0; words.length > i; i +=1) {
    var firstLetter = words[i].charAt(0);
    var secondLetter = words[i].charAt(1);
    var thirdLetter = words[i].charAt(2);

    if (firstLetter === 'a' || firstLetter === 'e' || firstLetter === 'i' || firstLetter === 'o' || firstLetter === 'u') {
      words[i] = words[i] + "way"
    } else if (firstLetter !== 'a' || firstLetter !== 'e' || firstLetter !== 'i' || firstLetter !== 'o' || firstLetter !== 'u') {
      words[i] = words[i].slice(1) + firstLetter + "ay";
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
