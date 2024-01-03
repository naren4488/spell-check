import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [suggestion, setSuggestion] = useState("");

  const customDictionary = {
    teh: "the",
    wrok: "work",
    fot: "for",
    exampl: "example",
  };

  const handleChange = (e) => {
    const text = e.target.value;
    setInput(text);
    const originalSentenceArr = text.split(" ");
    // console.log(originalSentenceArr)
    const correctSentenceArr = originalSentenceArr.map((word) => {
      const correctedWord = customDictionary[word.toLowerCase()];
      return correctedWord || word;
    });
    const firstCorrection = correctSentenceArr.find(
      (word, index) => word !== originalSentenceArr[index]
    );

    setSuggestion(firstCorrection || "");
  };

  return (
    <div className="app">
      <h1>Spell Check and Auto-Correction</h1>
      <textarea
        placeholder="Enter text..."
        rows={5}
        cols={40}
        value={input}
        onChange={handleChange}
      />
      {suggestion && (
        <p>
          Did you mean: <strong>{suggestion}</strong>?
        </p>
      )}
    </div>
  );
}

export default App;
