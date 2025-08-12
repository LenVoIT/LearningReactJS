// const randomNumber1 = Math.floor(Math.random() * 6) + 1;
// Xử lý sự kiện khi nhấn nút RollDice
document.getElementById("RollDice").addEventListener("click", () => {
  // Sinh số ngẫu nhiên cho mỗi người chơi
  const rollDice1 = Math.floor(Math.random() * 6) + 1;
  const rollDice2 = Math.floor(Math.random() * 6) + 1;

  // Cập nhật hình ảnh xúc xắc
  document.getElementById("dice1").src = `/DiceImages/dice${rollDice1}.png`;
  document.getElementById("dice2").src = `/DiceImages/dice${rollDice2}.png`;

  // Hiển thị kết quả ra console
  console.log(`Player 1 rolled: ${rollDice1}`);
  console.log(`Player 2 rolled: ${rollDice2}`);

  // Hiển thị kết quả lên giao diện
  const title = document.getElementById("result");
  if (rollDice1 > rollDice2) {
    title.textContent = "Player 1 win";
  } else if (rollDice1 === rollDice2) {
    title.textContent = "Draw";
  } else {
    title.textContent = "Player 2 win";
  }
});
// $("#RollDice").css("cursor","none");
$('#JQueryBtn').click(function() {
  $('#message').text('Bạn vừa click nút!');
});
$('#JQueryBtn').hover(
  function() {
    $('#message').text('Bạn đang hover nút!');
  },
  function() {
    $('#message').text('Bạn vừa rời khỏi nút!');
  }
);

$(document).keypress(function(event){
  $(`h1`).text(event.key);
})