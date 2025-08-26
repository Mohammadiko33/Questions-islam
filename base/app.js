function dislikeItem(button) {
  const item = button.closest(".item");
  const postTitle = item.querySelector(".text").innerText.trim();

  // ساخت لینک تلگرام قبل از prompt
  const telegramLink = document.createElement("a");
  telegramLink.target = "_blank";

  const message = prompt("لطفاً دلیلتان را بنویسید که چرا دیس لایک کردید.");

  if (message !== null && message.trim() !== "") {
    const telegramMessage = `📌 پست: ${postTitle}\n\n💬 پیام کاربر:\n${message}`;
    telegramLink.href = `https://t.me/DevMiko?text=${encodeURIComponent(
      telegramMessage
    )}`;
    // اضافه کردن به بدنه و کلیک مستقیم
    document.body.appendChild(telegramLink);
    telegramLink.click();
    document.body.removeChild(telegramLink);
  } else {
    alert("لطفاً متن خود را وارد کنید تا ارسال شود.");
  }
}

function likeItem(button) {
  const item = button.closest(".item");
  const postTitle = item.querySelector(".text").innerText.trim();

  const telegramLink = document.createElement("a");
  telegramLink.target = "_blank";

  const message = prompt("می‌خوای چیزی همراه لایک اضافه کنی؟");

  const telegramMessage = `👍 پست: ${postTitle}\n💖 کاربر پست رو لایک کرد!\n💬 پیام کاربر: ${
    message || ""
  }`;
  telegramLink.href = `https://t.me/DevMiko?text=${encodeURIComponent(
    telegramMessage
  )}`;

  document.body.appendChild(telegramLink);
  telegramLink.click();
  document.body.removeChild(telegramLink);
}