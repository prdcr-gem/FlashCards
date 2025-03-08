import React, { useState } from "react";
import "./FlashcardApp.css"; // Optional for styling

const flashcards = [
  { question: "Why do programmers prefer dark mode?", answer: "Because light attracts bugs! 🪲" },
  { question: "What’s the first rule of programming?", answer: "If it works, don’t touch it! 😅" },
  { question: "What does rm -rf / do?", answer: "It deletes everything… including your hopes and dreams. 💀" },
  { question: "Why do Java developers wear glasses?", answer: "Because they don’t C#! 👓" },
  { question: "Why do hackers love abstract art?", answer: "Because nothing is clear-text! 🖼️🕵️‍♂️" },
  { question: "What’s a hacker’s favorite snack?", answer: "Phish & Chips. 🎣🍟" },
  { question: "Why did the CSS developer go to therapy?", answer: "Because they had too many unresolved div issues. 🏗️" },
  { question: "Why did the artist refuse to use Photoshop?", answer: "Because they preferred real layers! 🎨" },
  { question: "Why was the function sad?", answer: "Because it didn’t return anything. 😭" },
  { question: "Why did the cybersecurity expert cross the road?", answer: "To patch the other side! 🛠️" }
];

const FlashcardApp = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleCardClick = () => {
    setShowAnswer(!showAnswer);
  };

  const handleNextClick = () => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * flashcards.length);
    } while (newIndex === currentIndex); // Ensure it selects a different card
    setCurrentIndex(newIndex);
    setShowAnswer(false);
  };

  const handlePreviousClick = () => {
    const newIndex = (currentIndex - 1 + flashcards.length) % flashcards.length;
    setCurrentIndex(newIndex);
    setShowAnswer(false);
  };

  return (
    <div className="flashcard-container">
      <h1>Tech & Art Jokes Flashcards</h1>
      <p className="app-description" style={{ padding: "10px 20px", textAlign: "center", maxWidth: "600px" }}>
        This app was created for fun! I made flashcards about art and tech since I am both an artist and a coder/hacker. I hope these flashcards brighten someone's day—feel free to pass them along! Have a lovely day!
      </p>
      <p>How well do you know your tech and art humor? Click to flip the card!</p>
      <p>Number of cards: {flashcards.length}</p>
      
      <div className={`flashcard ${showAnswer ? 'is-flipped' : ''}`} onClick={handleCardClick}>
        <div className="flashcard-inner">
          <div className="flashcard-front">
            {flashcards[currentIndex].question}
          </div>
          <div className="flashcard-back">
            {flashcards[currentIndex].answer}
          </div>
        </div>
      </div>
      
      <div className="buttons-container">
        <button className="previous-button" onClick={handlePreviousClick}>Previous</button>
        <button className="next-button" onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
};

export default FlashcardApp;
