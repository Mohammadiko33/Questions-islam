function setLocalItem({
  keyName,
  videoId = "introVideo",
  answerId = "answerCard",
  hintId = null,
  watchHintId = null
}) {
  const video = document.getElementById(videoId);
  const answerCard = document.getElementById(answerId);
  const hintBox = hintId ? document.getElementById(hintId) : null;
  const watchHint = watchHintId ? document.getElementById(watchHintId) : null;

  if (!video || !answerCard) return;

  const KEY = `videoWatched-${keyName}`;

  const revealElement = (el) => {
    if (!el) return;
    el.classList.remove("hidden");
    el.classList.add("reveal");
  };

  const showAnswer = () => {
    revealElement(answerCard);
    revealElement(hintBox);
    if (watchHint) watchHint.style.display = "none";
  };

  if (localStorage.getItem(KEY) === "true") {
    showAnswer();
  } else {
    answerCard.classList.add("hidden");
    if (hintBox) hintBox.classList.add("hidden");
    if (watchHint) watchHint.style.display = "flex";
  }

  video.addEventListener("ended", () => {
    localStorage.setItem(KEY, "true");
    showAnswer();
  });

  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible" && localStorage.getItem(KEY) === "true") {
      showAnswer();
    }
  });
}