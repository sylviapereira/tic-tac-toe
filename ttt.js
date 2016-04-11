 $(document).on('ready', function() {

  var turn = 0;

  var cell1 = $('#cell-1');
  var cell2 = $('#cell-2');
  var cell3 = $('#cell-3');
  var cell4 = $('#cell-4');
  var cell5 = $('#cell-5');
  var cell6 = $('#cell-6');
  var cell7 = $('#cell-7');
  var cell8 = $('#cell-8');
  var cell9 = $('#cell-9');

  $('td').on('click', function() {

    var self = $(this);
    if($(this).hasClass('disable')){
    alert('This spot is taken!');
  } else {
    if ( turn % 2 ) {
      self.html('O').addClass('o');
    } else {
      self.html('X').addClass('x');
    }

    self.addClass('disable');
    turn++;
    checkForWinner();
    };
  });

  $('#reset').on('click', function() {
    reset();
  });

  function checkForWinner() {
    if (cell1.hasClass('o') && cell2.hasClass('o') && cell3.hasClass('o') ||
        cell4.hasClass('o') && cell5.hasClass('o') && cell6.hasClass('o') ||
        cell7.hasClass('o') && cell8.hasClass('o') && cell9.hasClass('o') ||
        cell1.hasClass('o') && cell4.hasClass('o') && cell7.hasClass('o') ||
        cell2.hasClass('o') && cell5.hasClass('o') && cell8.hasClass('o') ||
        cell3.hasClass('o') && cell6.hasClass('o') && cell9.hasClass('o') ||
        cell1.hasClass('o') && cell5.hasClass('o') && cell9.hasClass('o') ||
        cell3.hasClass('o') && cell5.hasClass('o') && cell7.hasClass('o')
    ) {
        alert('O WINS!');
        reset();
    } else if (cell1.hasClass('x') && cell2.hasClass('x') && cell3.hasClass('x') ||
          cell4.hasClass('x') && cell5.hasClass('x') && cell6.hasClass('x') ||
          cell7.hasClass('x') && cell8.hasClass('x') && cell9.hasClass('x') ||
          cell1.hasClass('x') && cell4.hasClass('x') && cell7.hasClass('x') ||
          cell2.hasClass('x') && cell5.hasClass('x') && cell8.hasClass('x') ||
          cell3.hasClass('x') && cell6.hasClass('x') && cell9.hasClass('x') ||
          cell1.hasClass('x') && cell5.hasClass('x') && cell9.hasClass('x') ||
          cell3.hasClass('x') && cell5.hasClass('x') && cell7.hasClass('x')
      ) {
        alert('X WINS!');
        reset();
      } else if(turn == 9) {
        alert("Cat's Game!");
        reset();
    }
  };

  function reset() {
    $('td').text(' ');
    $('td').removeClass('disable');
    $('td').removeClass('o');
    $('td').removeClass('x');
    turn = 0;
  }

});
