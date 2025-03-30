export default async function handler(req, res) {
  const { artist, year } = req.query;
  const apiKey = process.env.SETLISTFM_API_KEY;

  try {
    const response = await fetch(
      `https://api.setlist.fm/rest/1.0/search/setlists?artistName=${artist}&year=${year}&p=1`,
      {
        headers: {
          Accept: 'application/json',
          'x-api-key': apiKey,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Setlist API error:", error.message);
    res.status(500).json({ error: "Failed to fetch setlists" });
  }
}