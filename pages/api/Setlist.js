export default async function handler(req, res) {
  const { artist, year } = req.query;

  const headers = {
    Accept: "application/json",
    "x-api-key": process.env.SETLIST_API_KEY,
  };

  const response = await fetch(
    `https://api.setlist.fm/rest/1.0/search/setlists?artistName=${encodeURIComponent(
      artist
    )}&year=${year}&p=1`,
    { headers }
  );

  if (!response.ok) {
    return res.status(500).json({ error: "Failed to fetch setlists" });
  }

  const data = await response.json();
  res.status(200).json({ setlists: data.setlist });
}
