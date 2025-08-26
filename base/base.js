export default function setLocalItem({
  keyName,
  videoId = "introVideo",
  answerId = "answerCard",
  hintId = "watchHint",
}) {
  const video = document.getElementById(videoId);
  const answerCard = document.getElementById(answerId);
  const watchHint = hintId ? document.getElementById(hintId) : null;

  if (!video || !answerCard) return; // اگر چیزی نبود، خطا نده

  const KEY = `videoWatched-${keyName}`;

  const showAnswer = () => {
    answerCard.classList.remove("hidden");
    answerCard.classList.add("reveal");
    if (watchHint) watchHint.style.display = "none";
  };

  // وقتی قبلاً دیده شده
  if (localStorage.getItem(KEY) === "true") {
    showAnswer();
  } else {
    answerCard.classList.add("hidden");
  }

  // وقتی ویدیو تموم شد
  video.addEventListener("ended", () => {
    localStorage.setItem(KEY, "true");
    showAnswer();
  });

  // وقتی صفحه دوباره فعال شد (رفرش یا تغییر تب)
  document.addEventListener("visibilitychange", () => {
    if (
      !answerCard.classList.contains("hidden") &&
      localStorage.getItem(KEY) === "true"
    ) {
      showAnswer();
    }
  });
}
