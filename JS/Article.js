const shareBtn = document.getElementById("shareButton");
const sharePopup = document.getElementById("sharePopup");

// Toggle popup khi nhấn nút share
shareBtn.addEventListener("click", () => {
  sharePopup.classList.toggle("active");
});

// Đóng popup khi click ra ngoài
document.addEventListener("click", (e) => {
  if (!shareBtn.contains(e.target) && !sharePopup.contains(e.target)) {
    sharePopup.classList.remove("active");
  }
});
console.log(shareBtn, sharePopup);
