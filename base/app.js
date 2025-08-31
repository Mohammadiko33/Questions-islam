// آرایه‌ای از سلام‌های متنوع
const greetings = [
  "🙋‍♂️ سلام وقت‌تون بخیر 🌹",
  "🙋‍♀️ سلام دوست عزیز 🌸",
  "✨ سلام و درود خدمت شما 🌺",
  "💫 سلام بر شما 🌻",
  "🌞 سلام روزتون پرانرژی باشه 💐",
  "🌷 سلام و عرض ادب خدمتتون 🌷",
  "🤝 سلام رفیق خوبم 🙌",
  "😇 سلام مهربون 🌼",
  "🔥 سلام پرانرژی 💥",
  "⭐ سلام ناب و خاص برای شما ✨",
  "💎 سلام ارزشمند 🌟",
  "🌈 سلام رنگین‌کمانی برای دل شما 🌈",
  "🎉 سلامی به شادی و لبخند 😊",
  "🍀 سلام خوش‌شانس 🍀",
  "🕊️ سلام آرامش‌بخش 🕊️",
  "🏖️ سلام پر از حس خوب تعطیلات 🏖️",
  "😎 سلام رفیق خفن 🤟",
  "📖 سلام دانشمند عزیز 📚",
  "🌹 سلام گلِ مهربونی 🌹",
  "🌙 سلامی از جنس ماه و ستاره 🌙",
];

// گرفتن یه سلام تصادفی
function getRandomGreeting() {
  return greetings[Math.floor(Math.random() * greetings.length)];
}

// آرایه‌ی پست‌ها
const posts = [
  {
    id: 1,
    title: "در تاریخ پیامبر اسلام وجود ندارد",
    cover: "./Muhammad-is-not-in-history/evidence/1.png",
    link: "./Muhammad-is-not-in-history/response.html",
  },
  {
    id: 2,
    title: "ازدواج جنجالی پیامبر با دختر بچه 9 ساله",
    cover: "./Marred-Muhammad-with-girl-9year-old/cover.jpg",
    link: "./Marred-Muhammad-with-girl-9year-old/response.html",
  },
  {
    id: 3,
    title: "پاسخ خسرو پرویز به محمد",
    cover: "./Khosrow-Parviz's-response-to-Muhammad's-letter/cover.jpg",
    link: "./Khosrow-Parviz's-response-to-Muhammad's-letter/response.html",
  },
  {
    id: 4,
    title: "محمد شورش گر یا مسیح",
    cover: "./Jesus-vs-Muhammad/cover.jpg",
    link: "./Jesus-vs-Muhammad/response.html",
  },
  {
    id: 5,
    title: "دروغی به نام بهشت !",
    cover: "./Behasht-in-qatar/cover.png",
    link: "./Behasht-in-qatar/response.html",
  },
  {
    id: 6,
    title: "تجـاوز به دختران ایرانی توسط اعراب",
    cover: "./forty-daughters-of-Fahraj/cover.png",
    link: "./forty-daughters-of-Fahraj/response.html",
  },
  {
    id: 7,
    title: "قران تحریف شده ! 1400 سال دروغ گفتن",
    cover: "./is-it-real-quran/cover.jpg",
    link: "./is-it-real-quran/response.html",
  },
  {
    id: 8,
    title: "دروغ های شاخدار معجزات پیامبر",
    cover: "./no-mojesa-in-quran/cover.jpg",
    link: "./no-mojesa-in-quran/response.html",
  },
  {
    id: 9,
    title: "چالش بزرگ اسلام توسط قار مرموز",
    cover: "./islam-in-challange/cover.jpg",
    link: "./islam-in-challange/response.html",
  },
  {
    id: 10,
    title: "اسلام و قرآن فقط برای عرب هاست",
    cover: "./islam-just-for-arab/cover.jpg",
    link: "./islam-just-for-arab/response.html",
  },
  {
    id: 11,
    title: "شکست قرآن توسط هوش مصنوعی",
    cover: "./Ai-Excellence/cover.png",
    link: "./Ai-Excellence/response.html",
  },
  {
    id: 12,
    title: "124,000 پیامبررر گاف عجیب اسلام",
    cover: "./124-prophet-of-islam-whattt/cover.png",
    link: "./124-prophet-of-islam-whattt/response.html",
  },
  {
    id: 13,
    title: "آزادی جنسـی پیامبر",
    cover: "./too-much-wife-for-muhammad/cover.png",
    link: "./too-much-wife-for-muhammad/response.html",
  },
  {
    id: 14,
    title: "تناقضات قرآن در مورد خلقت انسان",
    cover: "./Quran-contradictions-on-human-creation/cover.jpg",
    link: "./Quran-contradictions-on-human-creation/response.html",
  },
  {
    id: 15,
    title: "اسلام و ریشه پنهان آن",
    cover: "./Islam-and-its-hidden-roots/cover.jpg",
    link: "./Islam-and-its-hidden-roots/response.html",
  },
  {
    id: 16,
    title: "خنده دار ترین سوتی قران دریای شیرین",
    cover: "./Quran-varse--sweet-water/cover.png",
    link: "./Quran-varse--sweet-water/response.html",
  },
  {
    id: 17,
    title: "داستان عجیب خلقت ، اشتباه بزرگ قران",
    cover: "./strange-story-of-creation/cover.png",
    link: "./strange-story-of-creation/response.html",
  },
  {
    id: 18,
    title: "ازدواج با خواهر و مادر در اسلام",
    cover: "./marred-with-mother-or-sister-in-islam/cover.png",
    link: "./marred-with-mother-or-sister-in-islam/response.html",
  },
  {
    id: 19,
    title: "معجزه دروغین اصحاب کهف",
    cover: "./ashab-kaff/cover.png",
    link: "./ashab-kaff/response.html",
  },
  {
    id: 20,
    title: "حجر الاسود ، آلت زنانه است ؟",
    cover: "./hajarasvad-is-woman-psy/cover.jpg",
    link: "./hajarasvad-is-woman-psy/response.html",
  },
  {
    id: 21,
    title: "پاره شدن آسمان ، اشتباه علمی قرآن",
    cover: "./broken-gallxy/cover.png",
    link: "./broken-gallxy/response.html",
  },
];

// ساخت آیتم‌ها و اضافه کردن به صفحه (از آخر به اول)
const container = document.querySelector(".container");
posts
  .slice()
  .reverse()
  .forEach(({link , cover , title}) => {
    const item = document.createElement("div");
    item.classList.add("item");
    item.innerHTML = `
    <a href="${link}">
      <img src="${cover}" alt="${title}" />
      <div class="gradient"></div>
      <div class="text">${title}</div>
    </a>
    <div class="actions">
      <button class="like-btn" onclick="likeItem(this)">لایک</button>
      <button class="dislike-btn" onclick="dislikeItem(this)">دیس‌لایک</button>
    </div>
  `;
    container.appendChild(item);
  });

// توابع لایک و دیس‌لایک
function dislikeItem(button) {
  const item = button.closest(".item");
  const postTitle = item.querySelector(".text").innerText.trim();

  const telegramMessage = `${getRandomGreeting()}  
من پست «${postTitle}» شما رو 👎 دیس‌لایک کردم.  

📌 دلیل من: `;

  const telegramLink = document.createElement("a");
  telegramLink.target = "_blank";
  telegramLink.href = `https://t.me/DevMiko?text=${encodeURIComponent(
    telegramMessage
  )}`;

  document.body.appendChild(telegramLink);
  telegramLink.click();
  document.body.removeChild(telegramLink);
}

function likeItem(button) {
  const item = button.closest(".item");
  const postTitle = item.querySelector(".text").innerText.trim();

  const telegramMessage = `${getRandomGreeting()}  
من پست «${postTitle}» شما رو ❤️ لایک کردم.  

💭 نظرم درباره‌ی پست: `;

  const telegramLink = document.createElement("a");
  telegramLink.target = "_blank";
  telegramLink.href = `https://t.me/DevMiko?text=${encodeURIComponent(
    telegramMessage
  )}`;

  document.body.appendChild(telegramLink);
  telegramLink.click();
  document.body.removeChild(telegramLink);
}