// /pages/api/concertData.js
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY);

export default async function handler(req, res) {
  const { artist, year } = req.query;

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `
      Create a fictional concert tour for ${artist} in ${year}.
      Return this JSON:
      {
        "tourName": "string",
        "image": "short image description like 'colorful Eras Tour stage with lights'",
        "concerts": [
          {"location": "City, Country", "date": "Month Day, Year"},
          ...
        ],
        "topSongs": ["Song 1", "Song 2", ..., "Song 5"]
      }
    `;

    const result = await model.generateContent(prompt);
    const text = await result.response.text();

    const jsonStart = text.indexOf("{");
    const jsonEnd = text.lastIndexOf("}");
    const jsonString = text.substring(jsonStart, jsonEnd + 1);
    const data = JSON.parse(jsonString);

    res.status(200).json(data);
  } catch (error) {
    console.error("Gemini API error:", error);
    res.status(500).json({ error: "Failed to load concert data." });
  }
}
