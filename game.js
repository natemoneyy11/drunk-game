// game.js

// ─── GLOBAL STATE ─────────────────────────────────────────
let isMuted = false;           // 🔇 mute flag

// ─── QUESTIONS ────────────────────────────────────
const questions = [
  "Question: Who's most likely to drunk text their ex?",
  "Question: Who's most likely to black out tonight?",
  "Question: Who's most likely to kiss a stranger?",
  "Question: Who's most likely to start a bar fight?",
  "Question: Who's most likely to take a shot without being asked?",
  "Question: Who's most likely to forget where they live?",
  "Question: Who's most likely to end up dancing on a table?",
  "Question: Who's most likely to puke and rally?",
  "Question: Who's most likely to cry while drunk?",
  "Question: Who's most likely to lose their phone tonight?",
  "Question: Who's most likely to flirt with the bartender?",
  "Question: Who's most likely to order 10 shots out of nowhere?",
  "Question: Who's most likely to call their ex at 2 a.m.?",
  "Question: Who's most likely to deny they’re drunk (while clearly drunk)?",
  "Question: Who's most likely to start a conga line?",
  "Question: Who's most likely to spill everyone's drinks?",
  "Question: Who's most likely to blackout and wake up in a different city?",
  "Question: Who's most likely to challenge someone to a dance-off?",
  "Question: Who's most likely to fall asleep at the bar?",
  "Question: Who's most likely to start crying over a song?",
  "Challenge: Name 3 songs by Drake.",
    "Challenge: Impersonate another player.",
    "Question: Which player would you kiss if you had the chance?",
    "Challenge: Do 5 jumping jacks right now!",
    "Challenge: Sing the chorus of your favorite song out loud.",
    "Challenge: Choose one player. They must drink one sip or take a shot right now.",
    " Challenge: Finish your drink right now!",
    "Challenge: Point to two different players, you all must take a sip together.",
    "Challenge: Tell us one rule everyone in this game must follow until the end of the game",
    "READ TO YOURSELF! Challenge: Attempt your best pick-up line. If the group laughs or groans, you drink. If they dont, you pick somoeone to drink",
    " READ TO YOURSELF! Challenge: Say 'Cheers!' out loud. Everyone must repeat 'Cheers!' and take a sip. If someone doesn't, they drink",
    "Challenge: Name a category (ex: fast food chains). Go around the circle, each person names one item in that category. If you can't name the category or if the group can't continue, drink.",
    "Challenge: Take one sip of your drink for every player in the game.",
    "Challenge: Take on sip of your drink right now",
    "Question: What's one truth about yourself that no one here knows? If you can't think of one, drink.",
    "READ TO YOURSELF! Challenge: Tell the group a quick joke. If no one laughs, drink.",
    "Challenge: Show the group the last photo in your phone gallery. If it's boring (group votes), drink.",
    "Challenge: Name three words that rhyme with 'chair.' If you fail, drink.",
    "Complete the sentence: 'Never have I ever...' (e.g., '...gone skinny dipping.') If anyone has, they drink.",
"Question: Who is your favorite music artist or band right now? If you can't decide, drink.",
"Challenge: Try to balance your drink on your head for 3-5 seconds, if it falls or spills, drink.",
"Challenge: ALL players that identify themselves as female, drink",
"Challenge: All ladies drink.", 
"Challenge: If you are currently wearing earrings, take a drink",
"Challenge: If you have hair longer than your shoulders, take a drink",
"Challenge: If you are wearing something pink, take a drink",
"Challenge: If you love romantic comedies, take a drink",
"Challenge: If you prefer wine over beer, take a drink",
"Challenge: If you love to dance, take a drink",
"Challenge: If you have painted nails, take a drink",
"Challenge: If you consider yourself excellent at multi-tasking, take a drink.",
"READ TO YOURSELF! Challenge: Place your thumb on the table. The last person to do so drinks.",
"READ TO YOURSELF! Challenge: Place your thumb on your forehead. The last person to copy drinks.",
"READ TO YOURSELF! Challenge: Make eye contact with someone and stick your tongue out. If they don't do it back, they drink.",
"READ TO YOURSELF! Challenge: Point to the ceiling. The last person to copy drinks.",
"READ TO YOURSELF! Challenge: Make a funny face. The last person to copy drinks.",
"READ TO YOURSELF! Challenge: Say 'I love you' to the person on your right. If they don't say it back, they drink.",
"READ TO YOURSELF! Place your finger on your nose. The last person to do so drinks.",
"Challenge: All players that identify themselves as male, drink",
"Challenge: All guys drink.",
"Challenge: If you are currently wearing a hat, take a drink",
"Challenge: If you have facial hair, take a drink",
"Challenge: If you are wearing something blue, take a drink",
"Challenge: If you love video games, take a drink",
"Challenge: If you prefer beer over wine, take a drink",
"Challenge: If you've been to a sporting event this year, take a drink",
"Challenge: If you've been to a concert this year, take a drink",
"Challenge: Perform 3 push-ups right now, if you can't do them, drink",
"Challenge: If anyone can't touch their toes without bending their knees, take a drink",
    "Challenge: If you have a tattoo, take a drink",
    "Challenge: If you consider yourself a foodie, take a drink",
    "Challenge: If you love to cook, take a drink",
    "Challenge: Name all the planets in our solar system, if you fail take a drink",
    "Challenge: Name all the continents, if you fail take a drink",
    "Challenge: Name all the oceans, if you fail take a drink",
    "Challenge: Name all the countries in Europe, if you fail take a drink",
    "Challenge: Name all the countries in Asia, if you fail take a drink",
    "Challenge: Name all the countries in Africa, if you fail take a drink",
    "Challenge: Name all the countries in North America, if you fail take a drink",
    "Challenge: Name all the countries in South America, if you fail take a drink",
    "Challenge: If you have ever gone fishing, take a drink",
    "Challenge: If you have ever gone camping, take a drink",
    "Challenge: If you have ever gone hiking, take a drink",
    "Challenge: If you have ever gone skiing or snowboarding, take a drink",
    "Challenge: If you have ever gone surfing, take a drink",
    "Challenge: If you have ever gone scuba diving or snorkeling, take a drink",
    "Challenge: If you have ever gone skydiving or bungee jumping, take a drink",
    "Challenge: If you have ever gone rock climbing, take a drink",
    "Challenge: If you have ever gone zip-lining, take a drink",
    "Challenge: If you have ever gone white-water rafting, take a drink",
    "Challenge: If you have ever gone horseback riding, take a drink",
    "Challenge: If you have ever gone skinny dipping, take a drink",
    "Challenge: If you consider yourself good at grilling, take a drink",
    "Challenge: If you own a gaming console, take a drink",
    "Challenge: If you have ever played a musical instrument, take a drink",
    "Challenge: If you have ever sung karaoke, take a drink",
    "Challenge: If you have ever been in a mosh pit, take a drink",
    "READ TO YOURSELF! Challenge: Put your hand over your heart. The last person to do so drinks.",
    "READ TO YOURSELF! Challenge: Stand on one leg. The last person to do so drinks.",
    "READ TO YOURSELF! Challenge: Close your eyes, the last person to do so drinks.",
    "Challenge: Hold your breath, first person to let go (breathe) drinks.",
    "READ TO YOURSELF! Challenge: Wave your hands in the air like you just don't care. The last person to do so drinks.",
    "READ TO YOURSELF! Challenge: Make a silly noise. The last person to do so drinks.",
    "Challenge: Choose a person to be your drink mate, they must drink every time you drink for the rest of the game.",
    "Challenge: Choose two people (NOT YOURSELF). They become drink mates with each other and must take a sip together every time one of them drinks for the rest of the game.",
    "Challenge: Choose a person to be your drink buddy, they must drink every time you drink for the rest of the game.",
    "Challenge: You and your chosen mate must take a sip right now, if you dont have a mate take two because you are lonely.",
    "Challenge: Tell your mate to name 3 types of trees in 5 seconds, if they fail, you both drink.",
    "Challenge: Tell your mate to name 3 types of flowers in 5 seconds, if they fail, you both drink.",
    "Challenge: Tell your mate to name 3 types of birds in 5 seconds, if they fail, you both drink.",
    "Challenge: Tell your mate to name 3 types of fish in 5 seconds, if they fail, you both drink.",
    "Challenge: Tell your mate to name 3 types of animals in 5 seconds, if they fail, you both drink.",
    "Challenge: Tell your mate to name 3 types of insects in 5 seconds, if they fail, you both drink.",
    "Challenge: Tell your mate to name 3 types of reptiles in 5 seconds, if they fail, you both drink.",
    "Challenge: Tell your mate to name 3 types of mammals in 5 seconds, if they fail, you both drink.",
    "Challenge: Tell your mate to name 3 types of amphibians in 5 seconds, if they fail, you both drink.",
    "Challenge: You and your mate play 'Rock, Paper, Scissors'. Loser drinks.",
    "Challenge: You and your mate play 'Thumb War'. Loser drinks.",
    "Challenge: Tell your mate something you like about them, now you both drink.",
    "Challenge: You and your mate must take a sip now, if you don't have a mate, take two because you are lonely.",
    "Challenge: You and your mate must hold hands for the next round. If either of you lets go, you both drink.",
    "Challenge: Say a word (e.g., blue), Go around the circle, each person says a word that rhymes (e.g., 'blue'... 'clue'... etc.). If you hesitate or repeat, drink.",
    "Challenge: Say a color. Go around, each person names an object of that color. If you hesitate or repeat, drink.",
    "Challenge: Say a body part. Go around, each person names another body part. If you hesitate or repeat, drink.",
    "Challenge: Say a type of fruit. Go around, each person names another fruit. If you hesitate or repeat, drink.",
    "Challenge: Say a type of vegetable. Go around, each person names another vegetable. If you hesitate or repeat, drink.",
    "Challenge: Say a type of animal. Go around, each person names another animal. If you hesitate or repeat, drink.",
    "Challenge: Say a country. Go around, each person names another country. If you hesitate or repeat, drink.",
    "Challenge: Say a musical instrument. Go around, each person names another. If you hesitate or repeat, drink.",
    "Challenge: Say a popular candy. Go around, each person names another. If you hesitate or repeat, drink.",
    "Challenge: Pick a category (e.g., movies). Go around, each person names one item in that category. If you can't name it or if the group can't continue, drink.",
    "Challenge: Pick a category (e.g., TV shows). Go around, each person names one item in that category. If you can't name it or if the group can't continue, drink.",
    "Challenge: Pick a category (e.g., books). Go around, each person names one item in that category. If you can't name it or if the group can't continue, drink.",
    "Challenge: Pick a player to do a funny dance. If they refuse, they drink.",
    "Challenge: Pick a player to do a funny impression. If they refuse, they drink.",
    "Challenge: Pick a player to tell a joke. If they refuse, they drink.",
    "Challenge: Pick a player to sing a song. If they refuse, they drink.",
    "Challenge: Pick a player to do a silly face. If they refuse, they drink.",
    "Challenge: Pick a player to do a funny walk. If they refuse, they drink.",
    "Challenge: Pick a player to do a funny voice. If they refuse, they drink.",
    "Challemge: Play 'Never Have I Ever'. Each player put up 3 fingers. Everyone takes turns saying something they have never done. If anyone has done it,they put a finger down.First one to put all 3 fingers down, drinks.",
    "Challenge: Play 'Two Truths and a Lie'. Each player says two true things and one lie about themselves. The group guesses the lie. If they guess wrong, they drink. If they guess right, the liar drinks.",
    "Challenge: You are now the 'Question Master'. If you ask a question and someone answers, they drink. You can only be Question Master for 3 rounds. If you ask a question and no one answers, you drink.",
    "Challenge: Waterfall! Start drinking. Everyone else follows. The player who drew the Ace can stop whenever they want. The person to their left can only stop once the Ace drawer has stopped, and so on around the circle. The last person to stop must keep drinking until the person before them stops.)",
    


];




// ─── SOUND SETUP ───────────────────────────────────────────
const buzzSound = new Audio("buzz.mp3");
const bgMusic   = new Audio("music.mp3");
bgMusic.loop    = true;

// ─── NEXT QUESTION BUTTON ──────────────────────────
document.getElementById("next-btn").addEventListener("click", () => {
  // debug logs:
  console.log("questions.length =", questions.length);
  console.log("questions =", questions);

  const box = document.getElementById("question-box");
  const idx = Math.floor(Math.random() * questions.length);
  console.log("picked index:", idx);
  box.innerText = questions[idx];

  if (!isMuted && bgMusic.paused) {
    bgMusic.play().catch(() => {});
  }

  if (!isMuted) buzzSound.play();
});

// ─── CUSTOM QUESTION BUTTON ────────────────────────
document.getElementById("custom-btn").addEventListener("click", () => {
  const userQ = prompt("Type your custom question or challenge:");
  if (userQ) {
    questions.push(userQ);
    alert("Added!");
  }
});

// ─── MUTE/UNMUTE BUTTON ────────────────────────────
document.getElementById("mute-btn").addEventListener("click", () => {
  isMuted = !isMuted;
  const btn = document.getElementById("mute-btn");
  btn.textContent = isMuted ? "🔇" : "🔊";
  if (isMuted) bgMusic.pause();
  else        bgMusic.play().catch(() => {});
});
