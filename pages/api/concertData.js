import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY);

const fallbackTours = {
  "Taylor Swift-2024": {
    tourName: "Eras Tour (2024 Edition)",
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
  },
  "Green Day-2024": {
    tourName: "The Saviors Tour",
    concerts: [
      { location: "San Diego, USA", date: "March 15, 2024" },
      { location: "Phoenix, USA", date: "March 18, 2024" },
      { location: "Austin, USA", date: "March 21, 2024" },
      { location: "Chicago, USA", date: "April 1, 2024" },
      { location: "London, UK", date: "April 10, 2024" },
      { location: "Berlin, Germany", date: "April 15, 2024" },
      { location: "Paris, France", date: "April 20, 2024" },
      { location: "Tokyo, Japan", date: "May 2, 2024" }
    ],
    topSongs: [
      "American Idiot",
      "Boulevard of Broken Dreams",
      "Holiday",
      "Basket Case",
      "Wake Me Up When September Ends",
      "21 Guns",
      "Still Breathing",
      "Longview",
      "Hitchin' a Ride",
      "Know Your Enemy"
    ]
  },
  "The Rolling Stones-2005": {
    tourName: "A Bigger Bang Tour",
    concerts: [
      { location: "Boston, USA", date: "August 21, 2005" },
      { location: "Chicago, USA", date: "September 13, 2005" },
      { location: "Los Angeles, USA", date: "November 18, 2005" },
      { location: "Rio de Janeiro, Brazil", date: "February 18, 2006" },
      { location: "Tokyo, Japan", date: "April 2, 2006" },
      { location: "London, UK", date: "August 20, 2006" },
      { location: "Rome, Italy", date: "July 6, 2007" },
      { location: "Dublin, Ireland", date: "August 18, 2007" }
    ],
    topSongs: [
      "Start Me Up",
      "Sympathy for the Devil",
      "Paint It Black",
      "Brown Sugar",
      "(I Can't Get No) Satisfaction",
      "Jumpin' Jack Flash",
      "Gimme Shelter",
      "You Can't Always Get What You Want",
      "Angie",
      "Wild Horses"
    ]
  },
  "Radiohead-2006": {
    tourName: "Bonnaroo Festival",
    concerts: [
      { location: "Manchester, USA (Bonnaroo)", date: "June 17, 2006" },
      { location: "New York City, USA", date: "June 20, 2006" },
      { location: "Toronto, Canada", date: "June 23, 2006" },
      { location: "Chicago, USA", date: "June 26, 2006" }
    ],
    topSongs: [
      "Karma Police",
      "Paranoid Android",
      "No Surprises",
      "Everything In Its Right Place",
      "There There",
      "Idioteque",
      "High and Dry",
      "Creep",
      "Reckoner",
      "Street Spirit (Fade Out)"
    ]
  },
  "Bad Bunny-2022": {
    tourName: "World's Hottest Tour",
    concerts: [
      { location: "Orlando, USA", date: "August 5, 2022" },
      { location: "Miami, USA", date: "August 12, 2022" },
      { location: "New York City, USA", date: "August 27, 2022" },
      { location: "Houston, USA", date: "September 1, 2022" },
      { location: "Las Vegas, USA", date: "September 23, 2022" },
      { location: "Santo Domingo, Dominican Republic", date: "October 21, 2022" },
      { location: "Buenos Aires, Argentina", date: "November 4, 2022" },
      { location: "Mexico City, Mexico", date: "December 9, 2022" }
    ],
    topSongs: [
      "Tití Me Preguntó",
      "Me Porto Bonito",
      "Efecto",
      "Moscow Mule",
      "Callaíta",
      "Ojitos Lindos",
      "Después de la Playa",
      "La Canción",
      "Un Ratito",
      "Yonaguni"
    ]
  },
  "Shakira-2006": {
    tourName: "Oral Fixation World Tour",
    concerts: [
      { location: "San Diego, USA", date: "August 9, 2006" },
      { location: "Los Angeles, USA", date: "August 11, 2006" },
      { location: "Chicago, USA", date: "August 19, 2006" },
      { location: "Toronto, Canada", date: "August 24, 2006" },
      { location: "Madrid, Spain", date: "November 15, 2006" },
      { location: "Buenos Aires, Argentina", date: "December 7, 2006" },
      { location: "Lima, Peru", date: "December 10, 2006" },
      { location: "Mexico City, Mexico", date: "March 10, 2007" }
    ],
    topSongs: [
      "Hips Don't Lie",
      "La Tortura",
      "Don't Bother",
      "Whenever, Wherever",
      "Objection (Tango)",
      "Underneath Your Clothes",
      "Estoy Aquí",
      "She Wolf",
      "Ojos Así",
      "Illegal"
    ]
  },
  "Selena-1994": {
    tourName: "Amor Prohibido Tour",
    concerts: [
      { location: "Corpus Christi, USA", date: "March 1, 1994" },
      { location: "Houston, USA (Astrodome)", date: "February 26, 1995" },
      { location: "San Antonio, USA", date: "June 10, 1994" },
      { location: "Monterrey, Mexico", date: "July 8, 1994" },
      { location: "Los Angeles, USA", date: "August 4, 1994" },
      { location: "Phoenix, USA", date: "September 17, 1994" },
      { location: "Chicago, USA", date: "October 23, 1994" },
      { location: "Houston, USA", date: "November 19, 1994" }
    ],
    topSongs: [
      "Amor Prohibido",
      "Bidi Bidi Bom Bom",
      "No Me Queda Más",
      "Como La Flor",
      "Fotos y Recuerdos",
      "Si Una Vez",
      "I Could Fall In Love",
      "Dreaming of You",
      "La Carcacha",
      "Techno Cumbia"
    ]
  },
  "Kendrick Lamar-2022": {
    tourName: "The Big Steppers Tour",
    concerts: [
      { location: "San Diego, USA", date: "July 19, 2022" },
      { location: "Phoenix, USA", date: "July 22, 2022" },
      { location: "Houston, USA", date: "July 29, 2022" },
      { location: "Atlanta, USA", date: "August 2, 2022" },
      { location: "Toronto, Canada", date: "August 6, 2022" },
      { location: "Brooklyn, USA", date: "August 9, 2022" },
      { location: "Chicago, USA", date: "August 13, 2022" },
      { location: "Paris, France", date: "October 21, 2022" }
    ],
    topSongs: [
      "N95",
      "United In Grief",
      "Alright",
      "DNA.",
      "HUMBLE.",
      "King Kunta",
      "Money Trees",
      "The Heart Part 5",
      "Swimming Pools (Drank)",
      "Backseat Freestyle"
    ]
  },
  "J. Cole-2015": {
    tourName: "Forest Hills Drive Tour",
    concerts: [
      { location: "Phoenix, USA", date: "April 10, 2015" },
      { location: "Denver, USA", date: "April 14, 2015" },
      { location: "Minneapolis, USA", date: "April 19, 2015" },
      { location: "Atlanta, USA", date: "April 24, 2015" },
      { location: "New York City, USA", date: "May 3, 2015" },
      { location: "Toronto, Canada", date: "May 9, 2015" },
      { location: "Los Angeles, USA", date: "June 12, 2015" },
      { location: "Fayetteville, USA", date: "August 29, 2015" }
    ],
    topSongs: [
      "No Role Modelz",
      "Love Yourz",
      "G.O.M.D.",
      "Fire Squad",
      "January 28th",
      "Wet Dreamz",
      "Apparently",
      "A Tale of 2 Citiez",
      "Lights Please",
      "Crooked Smile"
    ]
  },
  "Eminem-2014": {
    tourName: "The Monster Tour",
    concerts: [
      { location: "Los Angeles, USA", date: "August 7, 2014" },
      { location: "New York City, USA", date: "August 16, 2014" },
      { location: "Detroit, USA", date: "August 22, 2014" },
      { location: "Chicago, USA", date: "August 28, 2014" },
      { location: "San Francisco, USA", date: "September 2, 2014" },
      { location: "Toronto, Canada", date: "September 6, 2014" },
      { location: "Las Vegas, USA", date: "September 13, 2014" },
      { location: "Atlanta, USA", date: "September 20, 2014" }
    ],
    topSongs: [
      "The Monster",
      "Lose Yourself",
      "Rap God",
      "Love The Way You Lie",
      "Without Me",
      "Not Afraid",
      "Stan",
      "The Real Slim Shady",
      "Berzerk",
      "Till I Collapse"
    ]
  },
  "SZA-2023": {
    tourName: "SOS Tour",
    concerts: [
      { location: "Columbus, USA", date: "February 21, 2023" },
      { location: "Chicago, USA", date: "February 22, 2023" },
      { location: "Detroit, USA", date: "February 24, 2023" },
      { location: "Toronto, Canada", date: "February 25, 2023" },
      { location: "Boston, USA", date: "February 28, 2023" },
      { location: "New York City, USA", date: "March 4, 2023" },
      { location: "Atlanta, USA", date: "March 7, 2023" },
      { location: "Los Angeles, USA", date: "March 22, 2023" }
    ],
    topSongs: [
      "Kill Bill",
      "Good Days",
      "I Hate U",
      "Nobody Gets Me",
      "Snooze",
      "Shirt",
      "Blind",
      "Gone Girl",
      "Low",
      "Seek & Destroy"
    ]
  },
  "Frank Ocean-2012": {
    tourName: "Channel Orange Tour",
    concerts: [
      { location: "Los Angeles, USA", date: "July 13, 2012" },
      { location: "San Francisco, USA", date: "July 17, 2012" },
      { location: "Chicago, USA", date: "July 22, 2012" },
      { location: "Toronto, Canada", date: "July 28, 2012" },
      { location: "London, UK", date: "November 9, 2012" },
      { location: "Amsterdam, Netherlands", date: "November 13, 2012" },
      { location: "Paris, France", date: "November 15, 2012" },
      { location: "Berlin, Germany", date: "November 17, 2012" }
    ],
    topSongs: [
      "Thinkin Bout You",
      "Pyramids",
      "Sweet Life",
      "Bad Religion",
      "Lost",
      "Super Rich Kids",
      "Sierra Leone",
      "Forrest Gump",
      "Monks",
      "Crack Rock"
    ]
  },
  "Usher-2010": {
    tourName: "Raymond v. Raymond Tour",
    concerts: [
      { location: "Seattle, USA", date: "November 10, 2010" },
      { location: "Vancouver, Canada", date: "November 11, 2010" },
      { location: "Los Angeles, USA", date: "November 14, 2010" },
      { location: "Houston, USA", date: "November 17, 2010" },
      { location: "Miami, USA", date: "November 20, 2010" },
      { location: "New York City, USA", date: "November 22, 2010" },
      { location: "Atlanta, USA", date: "November 24, 2010" },
      { location: "Chicago, USA", date: "November 27, 2010" }
    ],
    topSongs: [
      "OMG",
      "DJ Got Us Fallin' In Love",
      "There Goes My Baby",
      "Lil Freak",
      "Hey Daddy (Daddy's Home)",
      "Papers",
      "Trading Places",
      "Nice & Slow",
      "Yeah!",
      "U Got It Bad"
    ]
  },
  "Morgan Wallen-2024": {
    tourName: "One Night At A Time World Tour",
    concerts: [
      { location: "Indianapolis, USA", date: "April 4, 2024" },
      { location: "Milwaukee, USA", date: "April 20, 2024" },
      { location: "Atlanta, USA", date: "May 3, 2024" },
      { location: "Dallas, USA", date: "May 16, 2024" },
      { location: "Los Angeles, USA", date: "June 6, 2024" },
      { location: "Toronto, Canada", date: "June 27, 2024" },
      { location: "London, UK", date: "July 10, 2024" },
      { location: "Nashville, USA", date: "August 23, 2024" }
    ],
    topSongs: [
      "Last Night",
      "Wasted On You",
      "You Proof",
      "Sand In My Boots",
      "7 Summers",
      "More Than My Hometown",
      "Chasin’ You",
      "Whiskey Glasses",
      "Thought You Should Know",
      "Everything I Love"
    ]
  },
  "Carrie Underwood-2016": {
    tourName: "The Storyteller Tour - Stories in the Round",
    concerts: [
      { location: "Jacksonville, USA", date: "January 30, 2016" },
      { location: "Atlanta, USA", date: "February 1, 2016" },
      { location: "New Orleans, USA", date: "February 3, 2016" },
      { location: "Baltimore, USA", date: "February 6, 2016" },
      { location: "Toronto, Canada", date: "February 17, 2016" },
      { location: "Chicago, USA", date: "March 1, 2016" },
      { location: "Denver, USA", date: "March 15, 2016" },
      { location: "Los Angeles, USA", date: "April 5, 2016" }
    ],
    topSongs: [
      "Church Bells",
      "Heartbeat",
      "Smoke Break",
      "Blown Away",
      "Something in the Water",
      "Undo It",
      "Cowboy Casanova",
      "Before He Cheats",
      "Jesus, Take the Wheel",
      "Dirty Laundry"
    ]
  },
  "Tim McGraw-2006": {
    tourName: "Soul2Soul II Tour",
    concerts: [
      { location: "Columbus, USA", date: "April 21, 2006" },
      { location: "St. Louis, USA", date: "April 28, 2006" },
      { location: "Chicago, USA", date: "May 5, 2006" },
      { location: "New York City, USA", date: "May 19, 2006" },
      { location: "Atlanta, USA", date: "June 2, 2006" },
      { location: "Denver, USA", date: "June 10, 2006" },
      { location: "Las Vegas, USA", date: "July 1, 2006" },
      { location: "Dallas, USA", date: "August 12, 2006" }
    ],
    topSongs: [
      "Live Like You Were Dying",
      "Humble and Kind",
      "My Little Girl",
      "Don't Take the Girl",
      "It's Your Love",
      "Just to See You Smile",
      "Something Like That",
      "I Like It, I Love It",
      "Real Good Man",
      "Felt Good on My Lips"
    ]
  },
  "BTS-2018": {
    tourName: "Love Yourself Tour",
    concerts: [
      { location: "Seoul, South Korea", date: "August 25, 2018" },
      { location: "Los Angeles, USA", date: "September 5, 2018" },
      { location: "Oakland, USA", date: "September 12, 2018" },
      { location: "Fort Worth, USA", date: "September 15, 2018" },
      { location: "Newark, USA", date: "September 28, 2018" },
      { location: "Chicago, USA", date: "October 2, 2018" },
      { location: "London, UK", date: "October 9, 2018" },
      { location: "Paris, France", date: "October 19, 2018" }
    ],
    topSongs: [
      "Fake Love",
      "DNA",
      "IDOL",
      "MIC Drop",
      "Anpanman",
      "The Truth Untold",
      "Euphoria",
      "I'm Fine",
      "Answer: Love Myself",
      "Go Go"
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