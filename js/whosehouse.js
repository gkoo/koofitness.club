var result = null;

function WhoseHouse() {
  this.houses = [
    'borderlands',
    'kfc',
    'ajlands',
    'tuscany',
  ];

  this.games = [
    {
      opponent: 'Utah',
      date: new Date(2017, 9, 7),
      imgSrc: 'utah_utes.jpg'
    },
    {
      opponent: 'Oregon',
      date: new Date(2017, 9, 14),
      imgSrc: 'oregon_ducks.jpg'
    },
    {
      opponent: 'Oregon State',
      date: new Date(2017, 9, 26),
      imgSrc: 'oregon_state.jpg'
    },
    {
      opponent: 'Washington State',
      date: new Date(2017, 10, 4),
      imgSrc: 'washington_state.png'
    },
    {
      opponent: 'Washington',
      date: new Date(2017, 10, 10),
      imgSrc: 'washington_huskies.jpg'
    },
    {
      opponent: 'Cal',
      date: new Date(2017, 10, 18),
      imgSrc: 'cal_bears.jpg'
    },
    {
      opponent: 'Notre Dame',
      date: new Date(2017, 10, 25),
      imgSrc: 'notre_dame.jpg'
    }
  ];

  this.addHouse = function(house) {
    if (this.houses.indexOf(house) >= 0) return;
    this.houses.push(house);
    $('#wheel-' + house).show();
  };

  this.removeHouse = function(house) {
    var idx = this.houses.indexOf(house);
    if (idx === -1) return;
    this.houses.splice(idx, 1);
    $('#wheel-' + house).hide();
  };

  this.selectRandomHouse = function() {
    if (this.houses.length === 0) {
      alert('Please add at least one house');
      return null;
    }
    var randInt = Math.floor(Math.random()*this.houses.length);
    return this.houses[randInt];
  };

  this.gameHasNotPassed = function(game) {
    return new Date().getTime() < game.date.getTime();
  };

  this.selectGame = function() {
    var nextGame = this.games.find(this.gameHasNotPassed);

    if (nextGame) {
      $('#opponent-name').text(nextGame.opponent);
      $('#away').css('background-image', 'url(/img/' + nextGame.imgSrc + ')');
    }
  };
}

var wh = new WhoseHouse();
wh.selectGame();

var baselineRotation = 0;
var transitionEndEvents = 'transitionend webkitTransitionEnd \
                           oTransitionEnd otransitionend MSTransitionEnd'

function displayWhoseHouseWinner() {
  $('#wheel').children().css('font-weight', 'normal');
  var winnerHouse = wh.selectRandomHouse();
  if (winnerHouse == null) return;
  var degrees;
  switch(winnerHouse) {
    case 'borderlands':
      degrees = 0;
      break;
    case 'kfc':
      degrees = 270;
      break;
    case 'ajlands':
      degrees = 180;
      break;
    case 'tuscany':
      degrees = 90;
      break;
    default:
      alert('something went wrong');
  }
  // Between 10 and 20 revolutions
  var numRevolutions = Math.floor(Math.random()*10) + 10;
  var finalRotation = numRevolutions * 360 + degrees + baselineRotation;
  baselineRotation = Math.floor(finalRotation / 360) * 360;
  console.log('houses: ' + wh.houses.join());
  console.log('winner: ' + winnerHouse);

  // Bold the winner when done rotating
  $('#wheel').bind(transitionEndEvents,
      (function(winnerHouse) {
        return function() {
          $('.wheel-check').removeAttr('disabled');
          $('#wheel-' + winnerHouse).css('font-weight', 'bold');
          $(this).unbind(transitionEndEvents)
        };
      })(winnerHouse)
  );
  $('.wheel-check').attr('disabled', true);
  $('#wheel').css('transform', 'rotate(' + finalRotation + 'deg)');
}

$('.wheel-check').on('change', function(evt) {
  var houseId = evt.target.id.split('-')[1];
  var checked = evt.target.checked;
  if (checked) {
    wh.addHouse(houseId);
  } else {
    wh.removeHouse(houseId);
  }
});

$('#whose-house-button').click(displayWhoseHouseWinner);
