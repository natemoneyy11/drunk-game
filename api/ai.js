export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST requests allowed" });
  }

  // Forward the request to OpenRouter
  const openRouterResponse = await fetch(
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
          {
            role: "system",
            content: "You are a chaotic party AI that only responds with one hilarious, edgy, but fun drinking game question each time. No explanations."
          },
          {
            role: "user",
            content: "Give me a new random drinking game question."
          }
        ],
        max_tokens: 60
      })
    }
  );

  const data = await openRouterResponse.json();
  return res.status(200).json(data);
}