var bigNumber = Math.floor(Math.random() * 102) + 18;
var randomNumber = randNum();
var userTotal = 0;
var total = 0;
var wins = 0;
var losses = 0;
var crystalOne = randNum();
var crystalTwo = randNum();
var crystalThree = randNum();
var crystalFour = randNum();

function randNum() {
    return Math.ceil(Math.random() * 12) + 1;
}

$(document).ready(function(){

    $('#total').text(total);
    $('#winsPoints').text(wins);
    $('#lossesPoints').text(losses);
    $('#computer-pick').text(bigNumber);

    $('#crystal').data('value', crystalOne);
    $('#crystall').data('value', crystalTwo);
    $('#crystalll').data('value', crystalThree);
    $('#crystallll').data('value', crystalFour);
});

$(document).on('click', '.points', function(){

    var thisValue = $(this).data('value');

    userTotal = thisValue + userTotal

    $('#total').text(userTotal);

    winner();
    
});

function reset(){
    userTotal = 0;
    total = 0;
    $('#total').text(total);
    bigNumber = Math.floor(Math.random() * 102) + 18;
    $('#computer-pick').text(bigNumber);
    randNum();

    // console.log(userTotal);
    // console.log('bigNumber ' + bigNumber);
}

function winner(){

if (userTotal === bigNumber){
    wins++;
    alert('You win!');
    $('#winsPoints').text(wins);
    reset();
}else if(userTotal > bigNumber){
    losses++;
    alert('You lose!');
    $('#lossesPoints').text(losses);
    reset();
    }
}