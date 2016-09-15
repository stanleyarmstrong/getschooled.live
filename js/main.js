function GameManager() {
  this.timeLeft = 0;
  this.currentQuestion = 0;
  this.score = 0;
}

GameManager.prototype.startGame = function() {
  console.log("start game");
  var self = this;
  $('#start').fadeOut(function() {
    $('#game').fadeIn();
    self.nextQuestion(false);
  });

  $('.answers-list > li').click(self.answerQuestion)

}

GameManager.prototype.nextQuestion = function(shouldFade) {
  console.log('next question!')


  //
  // $('.question-area').css({
  //   opacity: 0
  // });

  if(shouldFade) {
    $('.question-area').animate({
      opacity: 0
    });
  }


  // Update values

  var question = {
    type: 'math',
    question: 'What are the first 4 digits of pie',
    answers: [
      '3.141',
      '3.142',
      '3.143',
      '3.144',
    ],
    correct: 0
  }

  $('#question-title').text(question.question);

  $('.answers-list > li').each(function(index, element) {
    $(element).find('button').html(question.answers[index]);
  })
}

GameManager.prototype.answerQuestion = function(target) {
  var self = this;

  console.log(target)


}

function startGame() {



}



$( document ).ready(function() {
    console.log( "ready!" );
    var gm = new GameManager();

    $('#start-button').click(function() {
      gm.startGame();
    })
});
