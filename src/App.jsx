import React, { useState } from "react";
import "./App.css";
function App() {
  const [name, setName] = useState("");
  const [names, setNames] = useState([]);
  const [text, setText] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [bgColor, setBgColor] = useState("#ffffff");
  const [inputs, setInputs] = useState([""]);
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const handleAddName = () => {
    if (name.trim()) setNames([...names, name]);
    setName("");
  };

  const handleAddInput = () => {
    setInputs([...inputs, ""]);
  };


  const handleCalculate = (operation) => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    if (!isNaN(n1) && !isNaN(n2)) {
      setResult(operation === "add" ? n1 + n2 : n1 * n2);
    }
  };

  return (
    <div className="container">
      {/* Ismlar ro'yxati */}
      <h3>Ismlar ro'yxati</h3>
      <input
        className="input-1"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Ism kiriting"
      />
      <button className="button-1" onClick={handleAddName}>
        Qo'shish
      </button>
      <ul>
        {names.map((n, i) => (
          <li key={i}>{n}</li>
        ))}
      </ul>

      <hr />

      {/* Matnni teskari aylantirish */}
      <h3>Matnni teskari aylantirish</h3>
      <input
        className="input-1"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Matn kiriting"
      />
      <p>{text.split("").reverse().join("")}</p>

      <hr />

      {/* Parol ko'rsatish */}
      <h3>Parol</h3>
      <input
        className="input-1"
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Parol"
      />
      <label>
        <input
          type="checkbox"
          onChange={() => setShowPassword(!showPassword)}
        />
        Parolni ko'rsatish
      </label>

      <hr />

      {/* Rang tanlash */}
      <h3>Rang tanlash</h3>
      <input
        type="color"
        value={bgColor}
        onChange={(e) => setBgColor(e.target.value)}
      />

      <hr />

      {/* Kalkulyator */}
      <h3>Kalkulyator</h3>
      <input
        value={num1}
        className="input-1"
        onChange={(e) => setNum1(e.target.value)}
        placeholder="1-son"
      />
      <input
        value={num2}
        className="input-1"
        onChange={(e) => setNum2(e.target.value)}
        placeholder="2-son"
      />
      <button className="button-1" onClick={() => handleCalculate("add")}>
        Yig‘indi
      </button>
      <button className="button-1" onClick={() => handleCalculate("multiply")}>
        Ko‘paytma
      </button>
      {result !== null && <p>Natija: {result}</p>}
    </div>
  );
}

export default App;
