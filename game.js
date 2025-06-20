// game.js
let isMuted = false; // define it at the top so it works
async function getAIQuestion() {
  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": "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", // 🔁 Replace with your key
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "deepseek/deepseek-r1-0528:free", // ✅ You can switch this model later
      messages: [
        {
          role: "system",
          content: "You are a chaotic party AI that only responds with one hilarious, edgy, but fun drinking game question or challeneg each time you're asked. No explanations. No repeats."
        },
        {
          role: "user",
          content: "Give me a new random drinking game question or challenge."
        }
      ],
      max_tokens: 60,
    })
    
  });

  const data = await response.json();
  const question = data.choices?.[0]?.message?.content || "🍻 Error getting question";
  return question;
}
let lastQuestionIndex = -1;
async function showNextQuestion() {
  const question = await getAIQuestion();
  document.getElementById("question-box").innerText = question;
}
const fallbackQuestions = [
  "Who's most likely to drunk text their ex?",
  "Who's most likely to black out tonight?",
  "Who's most likely to kiss a stranger?",
  "Who's most likely to start a bar fight?",
  "Who's most likely to take a shot without being asked?",
  "Who's most likely to forget where they live?",
  "Who's most likely to end up dancing on a table?",
  "Who's most likely to puke and rally?",
  "Who's most likely to cry while drunk?",
  "Who's most likely to lose their phone tonight?",
  "Who's most likely to flirt with the bartender?",
  "Who's most likely to order 10 shots out of nowhere?",
  "Who's most likely to call their ex at 2 a.m.?",
  "Who's most likely to deny they’re drunk (while clearly drunk)?",
  "Who's most likely to start a conga line?",
  "Who's most likely to spill everyone's drinks?",
  "Who's most likely to blackout and wake up in a different city?",
  "Who's most likely to challenge someone to a dance-off?",
  "Who's most likely to fall asleep at the bar?",
  "Who's most likely to start crying over a song?"
];

function getRandomFallbackQuestion() {
  let index;
  do {
    index = Math.floor(Math.random() * fallbackQuestions.length);
  } while (index === lastQuestionIndex);

  lastQuestionIndex = index;
  return fallbackQuestions[index];

if (!currentQuestion || typeof currentQuestion !== "string") {
    currentQuestion = getRandomFallbackQuestion();
  // fallback to a random question


} 
}
// Sound Effects
const buzzSound = new Audio("buzz.mp3"); // add file to folder
const bgMusic = new Audio("music.mp3"); // optional music
bgMusic.loop = true;

// Connect button to AI + fallback system
document.getElementById("next-btn").addEventListener("click", async () => {
  const box = document.getElementById("question-box");

  // Play background music only after user interaction
  if (!isMuted && bgMusic.paused) {
    bgMusic.play();
  }

  // Try AI
  let question = await getAIQuestion();

  // Fallback if AI fails
  if (!question || typeof question !== "string") {
    question = getRandomFallbackQuestion();
  }

  if (!isMuted) buzzSound.play();
  box.innerText = question;
});

  

document.getElementById("custom-btn").addEventListener("click", () => {
  const userQuestion = prompt("Type your custom question:");
  if (userQuestion) {
   fallbackQuestions.push(userQuestion); // store in fallback question list
    alert("Saved!");
  }
});

document.getElementById("mute-btn").addEventListener("click", () => {
  isMuted = !isMuted;
  document.getElementById("mute-btn").textContent = isMuted ? "🔇" : "🔊";
  if (isMuted) {
    bgMusic.pause();
  } else {
    bgMusic.play();
  }
});

