const quoteText = document.getElementById("quoteText");
const quoteAuthor = document.getElementById("quoteAuthor");
const categorySelector = document.getElementById("categorySelector");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const randomBtn = document.getElementById("randomBtn");
const modeToggle = document.getElementById("modeToggle");
const increaseFont = document.getElementById("increaseFont");
const decreaseFont = document.getElementById("decreaseFont");

let currentCategory = "all";
let currentIndex = 0;
let currentQuotes = [];

function updateQuotes() {
    currentCategory = categorySelector.value;
    currentQuotes = currentCategory === "all"
      ? Object.values(quotes).flat()
      : quotes[currentCategory];
    currentIndex = 0;
    showQuote();
  }

  function showQuote() {
    const quote = currentQuotes[currentIndex];
    if (quote) {
      quoteText.textContent = `"${quote.text}"`;
      quoteAuthor.textContent = `— ${quote.author}`;
    }
  }

  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) currentIndex--;
    showQuote();
  });

  nextBtn.addEventListener("click", () => {
    if (currentIndex < currentQuotes.length - 1) currentIndex++;
    showQuote();
  });

  randomBtn.addEventListener("click", () => {
    currentIndex = Math.floor(Math.random() * currentQuotes.length);
    showQuote();
  });

  categorySelector.addEventListener("change", updateQuotes);

modeToggle.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");
});

let fontSize = 1.5;
increaseFont.addEventListener("click", () => {
  fontSize += 0.1;
  quoteText.style.fontSize = `${fontSize}rem`;
});

decreaseFont.addEventListener("click", () => {
    fontSize = Math.max(1, fontSize - 0.1);
    quoteText.style.fontSize = `${fontSize}rem`;
  });

  updateQuotes();
