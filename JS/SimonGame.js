// Mảng chứa màu của game
var buttonColors = ["red", "blue", "green", "yellow"];

// Pattern của game (màu mà game tạo)
var gamePattern = [];

// Pattern của người chơi (màu mà người chơi click)
var userClickedPattern = [];

// Level hiện tại
var level = 0;
var started = false;

//Bắt đầu game khi click nút bất kỳ
$(document).keypress(function () {
  //chỉ chạy khi game chưa bắt đầu
  if (!started) {
    //Đổi title name thành Level xxx
    $("#level-title").text("Level " + level);
    //Tạo màu mới khi renew game
    nextSequence();
    //Đánh dấu đã bắt đầu game
    started = true;
  }
});

//Game tự random màu cho người chơi
function nextSequence() {
  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);
  //random màu = random số theo mảng của buttonColors[0->3]
  var randomChosenNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomChosenNumber];
  //push vào gamePattern để lưu lại chuỗi màu của game.
  gamePattern.push(randomChosenColor);
  //Thêm sound khi click vào màu tương ứng
  $("#" + randomChosenColor)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  playSound(randomChosenColor);
}

//Người chơi chọn màu
$(".btn").click(function() {
  //Khai báo biến màu người chơi đã click + lấy màu ID tương ứng
  var userChosenColor = $(this).attr("id");
  //Push các màu người chơi đã chọn vào 1 mảng để so sánh với mảng màu của Game đã random
  userClickedPattern.push(userChosenColor);
  //Thêm sound cho nút user clicked
  playSound(userChosenColor);
  //Thêm hiệu ứng cho nút user clicked
  animatePress(userChosenColor);
  //Check đáp án với gamePattern
  checkAnswer(userClickedPattern.length - 1);
});

function checkAnswer(currentLevel) {
  // 1. Kiểm tra nút mới nhất
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    // 2. Nếu bấm đúng hết tất cả các nút trong level hiện tại
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence(); // qua level mới
      }, 1000);
    }
  } else {
    playSound("wrong");
    $("body").addClass("game-over");
    $("#level-title").text("You lost, press any key to restart the game");

    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 250);

    startOver();
  }
}

//Function playSound
function playSound(name) {
  var audio = new Audio("/sounds/" + name + ".mp3");
  audio.play();
}

//Function animate when click the colored button
function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

//Function gameOver
function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}
