var result = null;

function choose() {
  if (!result) {
    var houses = [
      'Borderlands',
      'Koo Fitness Club'
    ];
    var randInt = Math.floor(Math.random()*2);
    console.log(randInt);
    result = houses[randInt];
  }
  $('#result').text(result);
  $('#result-container').addClass('show');
}

