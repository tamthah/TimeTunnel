// /pages/api/concertData.js
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY);

const fallbackTours = {
  "Taylor Swift-2024": {
    tourName: "Eras Tour (2024 Edition)",
    image: "Taylor Swift on a dazzling stage surrounded by lights and fans",
    concerts: [
      { location: "Tokyo, Japan", date: "February 7, 2024" },
      { location: "Sydney, Australia", date: "March 2, 2024" },
      { location: "Paris, France", date: "April 14, 2024" },
      { location: "Berlin, Germany", date: "April 20, 2024" },
      { location: "Toronto, Canada", date: "May 10, 2024" },
      { location: "Chicago, USA", date: "May 22, 2024" },
      { location: "Los Angeles, USA", date: "June 1, 2024" },
      { location: "London, UK", date: "June 18, 2024" },
      { location: "Madrid, Spain", date: "July 5, 2024" },
      { location: "New York City, USA", date: "August 20, 2024" }
    ],
    topSongs: [
      "Cruel Summer",
      "Anti-Hero",
      "Shake It Off",
      "Lover",
      "Blank Space",
      "You Belong With Me",
      "Enchanted",
      "All Too Well (10 Minute Version)",
      "Style",
      "The Archer"
    ]
  },
  "Rihanna-2011": {
    tourName: "The Loud Tour",
    image: "rihanna loud tour stage performance with red hair and spotlight",
    concerts: [
      { location: "Baltimore, USA", date: "June 4, 2011" },
      { location: "Toronto, Canada", date: "June 6, 2011" },
      { location: "Atlanta, USA", date: "July 12, 2011" },
      { location: "Houston, USA", date: "July 20, 2011" },
      { location: "Barcelona, Spain", date: "October 16, 2011" },
      { location: "Paris, France", date: "October 19, 2011" },
      { location: "London, UK", date: "October 21, 2011" },
      { location: "Dublin, Ireland", date: "November 1, 2011" }
    ],
    topSongs: [
      "Only Girl (In The World)",
      "S&M",
      "California King Bed",
      "Cheers (Drink to That)",
      "What's My Name?",
      "Rude Boy",
      "Disturbia",
      "Shut Up and Drive",
      "Love the Way You Lie",
      "Umbrella"
    ]
  },
  "Britney Spears-2009": {
    tourName: "The Circus Starring Britney Spears",
    image: "britney spears circus tour with trapeze artists and glowing red curtain",
    concerts: [
      { location: "New Orleans, USA", date: "March 3, 2009" },
      { location: "Houston, USA", date: "March 16, 2009" },
      { location: "New York City, USA", date: "March 23, 2009" },
      { location: "Chicago, USA", date: "April 8, 2009" },
      { location: "London, UK", date: "June 3, 2009" },
      { location: "Berlin, Germany", date: "June 15, 2009" },
      { location: "Paris, France", date: "July 4, 2009" },
      { location: "Stockholm, Sweden", date: "July 13, 2009" }
    ],
    topSongs: [
      "Circus",
      "Womanizer",
      "If U Seek Amy",
      "Toxic",
      "Gimme More",
      "Piece of Me",
      "Radar",
      "Everytime",
      "Stronger",
      "Baby One More Time"
    ]
  }
};

export default async function handler(req, res) {
  const { artist, year } = req.query;

  if (!artist || !year) {
    return res.status(400).json({ error: "Missing artist or year" });
  }

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `
Create a fictional concert tour for ${artist} in ${year}.
Only return strict JSON, no markdown or explanations.
{
  "tourName": "string",
  "image": "short description of tour image",
  "concerts": [
    { "location": "City, Country", "date": "Month Day, Year" }
  ],
  "topSongs": ["Song 1", "Song 2", "Song 3", ..., "Song 10"]
}
`;

    const result = await model.generateContent(prompt);
    const text = result.response.text();

    const jsonStart = text.indexOf("{");
    const jsonEnd = text.lastIndexOf("}") + 1;
    if (jsonStart === -1 || jsonEnd === -1) throw new Error("Invalid JSON structure");

    const jsonText = text.slice(jsonStart, jsonEnd);
    const data = JSON.parse(jsonText);

    res.status(200).json(data);
  } catch (error) {
    console.error("Gemini API Error:", error.message);
    const key = `${artist}-${year}`;
    if (fallbackTours[key]) {
      res.status(200).json(fallbackTours[key]);
    } else {
      res.status(500).json({ error: "Failed to fetch data from Gemini and no fallback available." });
    }
  }
}