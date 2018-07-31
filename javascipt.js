var content = document.getElementById("javascipt")

$(document).ready(function() {
  $('.stBtn').click(function() {
    var btn = $('.stBtn');
    var minutes = parseInt($('#min').html());
    var seconds = parseInt($('#sec').html());
    if (minutes + seconds === 0) {
      btn.html('Start');
      btn.removeClass('red');
      alert('Please set the timer');
      return;
    }
    if (isNaN(minutes)) {
      $('#min').html('00');
      minutes = 0;
    }
    if (minutes > 59) {
      alert("Can't be used for more than 59 mins");
      $('#min').html('00');
      minutes = 0;
      return;
    }
    if (isNaN(seconds)) {
      $('#sec').html('00');
      seconds = 1;
      return;
    }
    var t = (minutes * 60) + (seconds);

    function countdownTimer(t) {
      var secLeft = Math.floor(t % 60);
      var minLeft = Math.floor((t / 60) % 60);
      var dispSeconds = '0' + secLeft;
      var dispMinutes = '0' + minLeft;
      $('#min').html(dispMinutes.slice(-2));
      $('#sec').html(dispSeconds.slice(-2));
    }
  function reStart() {
      btn.html('Start');
        btn.removeClass('red');
      }
    function updateTimer() {
      t--;
      countdownTimer(t);
      if (t <= 0) {
        clearInterval(interval);
        $('#ado').get(0).play();
        reStart();
      }
    }
    if (btn.html() == "Stop") {
      clearInterval(interval);
      reStart();
    } else {
      window.interval = setInterval(updateTimer, 1000);
      btn.html('Stop');
      btn.addClass('red');
    }
  });

  $('.refresh').click(function() {
    clearInterval(interval);
    $('#min').html('00');
    $('#sec').html('00');
    $('.stBtn').html('Start');
    $('.stBtn').removeClass('red');
  });
});


var i=0;
function new_row() {
  var table = document.getElementById("mytable");
  var row = table.insertRow(i-1);
  // var cell1 = row.insertCell(0);
  var cell1 = row.insertCell(0);
  // var cell3 = row.insertCell(1);
  var cell2 = row.insertCell(1);

  // cell1.innerHTML = "text";
  // cell1.insertHTML ='<td><input type = "text" name= "lname">';
  cell1.innerHTML = '<td><input type = "text" name= "fname">';
  // cell3.insertHTML ='<td><input type = "text" name= "lname">';
  cell2.innerHTML = '<td><input type = "text" name= "lname">';
}




function submit_assignments(){
  var mytable = document.getElementById("mytable");
  var rowCount= mytable.rows.length;
  // var cellCount = mytable.rows[rowCount - 1].cells.length;
  var counter=0;

  for (var i=1; i <rowCount; i++) {
    var currentRow = mytable.rows[i];
    // console.log("CurrentRow:" + currentRow)
    // console.log("CellCount:" + cellCount)
    var currentValue=Number(mytable.rows[i].cells[1].children[0].value);
    counter= counter + currentValue;
    }

var displayArea=document.getElementById("total");
displayArea.insertAdjacentHTML('beforeend', counter);
    // var timeCell = currentRow.cells[1].children[0].value;

}
function randomword(){
  var myArray = ['Make a study timetable','Put your phone away while studying', 'Close all tabs on computer that your are not using','Simplify your notes']
  var item = myArray[(Math.random()*myArray.length)|0];
  var displayArea=document.getElementById("hiiii");
  displayArea.insertAdjacentHTML('beforeend', item);
  // console.log('item:', item);

}

function hide_show() {
    // var item = document.getElementById("hiiii");
    if (info.style.display === "none") {
        info.style.display = "block";
    } else {
        info.style.display = "none";
    }
}
button.onclick=hide_show
