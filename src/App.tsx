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
    "Я люблю тебе 🌼", // Украинский
    "Mən səni sevirəm ❤️", // Азербайджанский
    "Ma armastan sind 💞", // Эстонский
    "Σ'αγαπώ 💗", // Греческий
    "Te iubesc 💕", // Румынский
    "Jeg elsker dig 🌺", // Датский
    "Szeretlek 💓", // Венгерский
    "Eu te iubesc 💐", // Молдавский
    "Я тебе кохаю 💗", // Белорусский
    "ਮੈਂ ਤੈਨੂੰ ਪਿਆਰ ਕਰਦਾ ਹਾਂ 💖", // Панджаби
    "Aku cinta padamu ❤️", // Индонезийский
    "Mahal kita 💗", // Филиппинский
    "Mi amas vin 💖", // Эсперанто
    "Eu te amo 🍬", // Бразильский португальский
    "ฉันรักคุณ 💘", // Тайский
  ];


  const emojiArray = ["🤾🏻‍", "🧶", "🙈", "☀️", "🚀", "🐣", "☄️", "🍒", "🥞", "😜", "🎨"];

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
      <img src="/public/love-red.png" alt="" className="love-red" />
      <img src="/public/paralax-1.png" alt="" className="paralax" />
      <img src="/public/love-orange.png" alt="" className="love-orange" />
      <h1 className="title">{randomLoveMessage}</h1>
      <button onClick={handleButtonClick} className="button">
        {randomButtonEmoji}
      </button>
    </div>
  );
}

export default App;
