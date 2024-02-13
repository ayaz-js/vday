import "./App.css";
import { useState } from "react";

function App() {
  const loveArray = [
    "Мен сені сүйемін 🤍", // Казахский
    "Я люблю тебя 💖", // Русский
    "I love you 🕊️", // Английский
    "Je t'aime 😘", // Французский
    "Ich liebe dich 🥰", // Немецкий
    "Ti amo 😍", // Итальянский
    "Te quiero 🌸", // Испанский
    "Eu te amo 😻", // Португальский
    "أنا أحبك ❤️", // Арабский
    "愛してる 💘", // Японский
    "사랑해 💑", // Корейский
    "我爱你 💝", // Китайский (Упрощенный)
  ];

  const emojiArray = ["🤾🏻‍", "🧶", "🙈", "☀️", "🚀", "🐣"];

  const [randomLoveMessage, setRandomLoveMessage] = useState(
    "Мен сені сүйемін 🤍"
  );

  const [randomButtonEmoji, setRandomButtonEmoji] = useState("🐣");

  const handleButtonClick = () => {
    const randomIndex = Math.floor(Math.random() * loveArray.length);
    const randomEmoji = Math.floor(Math.random() * emojiArray.length);
    setRandomLoveMessage(loveArray[randomIndex]);
    setRandomButtonEmoji(emojiArray[randomEmoji]);
  };

  return (
    <div>
      <h1 className="title">{randomLoveMessage}</h1>
      <button onClick={handleButtonClick} className="button">
        {randomButtonEmoji}
      </button>
    </div>
  );
}

export default App;
