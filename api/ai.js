module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" });
  }
  try {
    const openRouterRes = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "mistralai/mistral-7b-instruct",
          messages: [
            { role: "system", content: "You are a party AI—one question only." },
            { role: "user",   content: "Give me a random drinking game question." }
          ],
          max_tokens: 60
        })
      }
    );
    const data = await openRouterRes.json();
    return res.status(200).json(data);
  } catch (err) {
    console.error("Function error:", err);
    return res.status(500).json({ error: err.message });
  }
};
