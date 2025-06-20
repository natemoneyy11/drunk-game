// game.js

// ─── GLOBAL STATE ─────────────────────────────────────────
let isMuted = false;           // 🔇 mute flag
let lastQuestionIndex = -1;    // 🎲 tracks last fallback to avoid repeats

// ─── FALLBACK QUESTIONS ────────────────────────────────────
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

// ─── HELPER: NO-REPEAT FALLBACK ────────────────────────────
function getRandomFallbackQuestion() {
  let i;
  do {
    i = Math.floor(Math.random() * fallbackQuestions.length);
  } while (i === lastQuestionIndex);
  lastQuestionIndex = i;
  return fallbackQuestions[i];
}

// ─── AI FETCH via YOUR VERCEL PROXY ────────────────────────
async function getAIQuestion() {
  try {
    const res = await fetch("/api/ai", { method: "POST" });
    if (!res.ok) throw new Error(`Proxy error ${res.status}`);
    const data = await res.json();
    const q = data.choices?.[0]?.message?.content?.trim() || null;
    return q;
  } catch (err) {
    console.error("❌ AI fetch failed:", err);
    return null;
  }
}

// ─── SOUND SETUP ───────────────────────────────────────────
const buzzSound = new Audio("buzz.mp3");
const bgMusic   = new Audio("music.mp3");
bgMusic.loop    = true;

// ─── BUTTON: NEXT QUESTION ─────────────────────────────────
document.getElementById("next-btn").addEventListener("click", async () => {
  const box = document.getElementById("question-box");

  // 1️⃣ start background music on first click
  if (!isMuted && bgMusic.paused) {
    bgMusic.play().catch(() => {});
  }

  // 2️⃣ try AI first
  let question = await getAIQuestion();

  // 3️⃣ fallback if AI failed
  if (!question) {
    question = getRandomFallbackQuestion();
  }

  // 4️⃣ play buzz sound
  if (!isMuted) buzzSound.play();

  // 5️⃣ display the question
  box.innerText = question;
});

// ─── BUTTON: ADD CUSTOM QUESTION ──────────────────────────
document.getElementById("custom-btn").addEventListener("click", () => {
  const userQ = prompt("Type your custom question:");
  if (userQ) {
    fallbackQuestions.push(userQ);
    alert("Custom question saved!");
  }
});

// ─── BUTTON: MUTE / UNMUTE ─────────────────────────────────
document.getElementById("mute-btn").addEventListener("click", () => {
  isMuted = !isMuted;
  document.getElementById("mute-btn").textContent = isMuted ? "🔇" : "🔊";
  if (isMuted) {
    bgMusic.pause();
  } else {
    bgMusic.play().catch(() => {});
  }
});
