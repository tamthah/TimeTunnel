# TimeTunnel 🎸
> Rewind your favorite concerts. Relive the music. Explore the moments.

**Explore the concerts that never were — powered by Gemini AI.**  
TimeTunnel lets you experience fictional yet hyper-realistic world tours by your favorite music artists. You can either pick a genre or input the artist's name, choose a year, and dive into a custom-built tour featuring cities, dates, setlist and top 10 songs (linked to YouTube). Designed with a nostalgic glow and fueled by modern AI.

---

## 🚀 Demo

[Click here to try TimeTunnel](http://localhost:3000)  
*(replace with your deployed URL)*

---

## ✨ Features

- 🔍 Search fictional concert tours by **artist name** and **year**
- 🧠 Gemini AI generates realistic **tour names**, **locations**, **dates**, and **setlists**
- 🎶 Every top song links directly to a **YouTube search**
- 🖼 Retro-themed UI with glowing visuals and genre-based navigation
- 💽 Covers major genres: Pop, Rock, Latin, Hip-Hop, R&B, Country, K-pop

---

## 🛠 How It Works

- **Frontend:** Next.js + React
- **Backend API:** Google Gemini (via `@google/generative-ai`)
- **Tour Generator:** Dynamic prompt → Gemini → Validated JSON → Rendered UI
- **Song Linking:** Top 10 songs auto-converted into YouTube search links
- **Styling:** Custom inline styles + CSS glow effects

---

## 🧪 Run Locally

```bash
git clone https://github.com/your-username/timetunnel.git
cd timetunnel
npm install
```

Create a `.env` file:
```bash
GOOGLE_GEMINI_API_KEY=your_google_gemini_api_key
```

Start the dev server:
```bash
npm run dev
```

---

## 🧠 Built With

- [Next.js](https://nextjs.org/)
- [Google Gemini API](https://makersuite.google.com/)
- [React](https://react.dev/)
- [Setlist.fm API (optional)](https://api.setlist.fm/docs/)

---

## 🏆 Project Highlights

- Gemini AI usage for **structured, creative generation**
- Song list auto-linking to **YouTube**
- Full support for 25+ iconic artists and eras
- Resilient design — Gemini or no, it delivers

---

## 📈 What's Next

- 🎧 Embedded audio previews  
- 🌐 Tour maps with pins  
- 🖼 AI-generated posters per tour  
- 🔖 User save/share functionality  
- 💬 Fan memories & comment wall

---

## 🪐 License

MIT © 2025 TimeTunnel Team

