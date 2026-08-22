# Civil Engineering MCQ

A comprehensive multiple-choice question (MCQ) practice platform for Civil Engineering students and professionals preparing for **Nepal Engineering Council (NEC) licensing**, **PSC Loksewa**, and **MSc Entrance** examinations.

🌐 **Live site**: [civilengineering-mcq.web.app](https://civilengineering-mcq.web.app)

---

## Features

- 📚 **1,500+ MCQs** across 18 subjects (11 Technical Civil Engineering + 7 Loksewa Nepal GK)
- 🔍 **Global Question Search** — instantly search across all subjects from the home page or `/search`
- ⏱️ **Timed Online Tests** — 10-minute subject quizzes and 45-minute full mock exams
- 💬 **Discussion Forum** — Firestore-backed comment threads on every question
- 🌙 **Dark / Light Mode** — persisted via localStorage
- 📥 **Free Downloads** — lecture notes and solved numericals
- 📱 **Fully Responsive** — works on mobile, tablet, and desktop

---

## Tech Stack

| Layer | Technology |
|---|---|
| UI Framework | React 19 |
| Build Tool | Vite |
| Styling | Tailwind CSS v3 |
| Routing | React Router v7 |
| Backend / Database | Firebase v11 (Firestore) |
| Icons | Lucide React |
| Deployment | Firebase Hosting |

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Clone and Run

```bash
# 1. Clone the repository
git clone https://github.com/learnstructure/mcqCivil.git
cd mcqCivil

# 2. Install dependencies
npm install

# 3. Create a .env file in the project root with your Firebase config
echo "VITE_API_KEY=your_firebase_api_key" > .env

# 4. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

The output is placed in `build/` (compatible with `firebase.json`).

### Deploy to Firebase

```bash
firebase deploy
```

---

## Project Structure

```
src/
├── components/
│   ├── layout/       # Navbar, Footer, Layout, ScrollToTop
│   ├── mcq/          # McqCard, DiscussionView
│   ├── test/         # TestQuestion, TimerBadge, QuestionNavigator, TestResultsModal
│   └── ui/           # ThemeToggle, SoundToggle, ShareModal
├── context/          # ThemeContext, SoundContext
├── data/             # subjects.js (registry + search engine), all question datasets
├── pages/            # HomePage, McqPage, SearchPage, TestPage, DownloadsPage, AboutPage, etc.
└── services/         # firebase.js (Firebase v11 modular SDK)
```

---

## Issues & Contributions

Please report bugs or feature requests on the [Issues page](https://github.com/learnstructure/mcqCivil/issues). Contributions are welcome!