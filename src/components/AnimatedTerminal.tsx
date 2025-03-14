'use client';

import React from 'react';

export function AnimatedTerminal() {
  const [text, setText] = React.useState("");
  const [cursorVisible, setCursorVisible] = React.useState(true);
  const [currentLine, setCurrentLine] = React.useState(0);

  const lines = [
    "$ npm install ai-neural-networks",
    "Installing AI dependencies...",
    "✓ Neural networks installed successfully",
    "$ python train.py --model=transformer --epochs=100",
    "Training model on GPU...",
    "Epoch 1/100: loss=2.34, accuracy=0.45",
    "Epoch 50/100: loss=0.78, accuracy=0.89",
    "Epoch 100/100: loss=0.12, accuracy=0.98",
    "Model trained successfully!",
    '$ python generate.py --prompt="Explain artificial intelligence"',
    "Generating response...",
  ];

  // Blinking cursor effect
  React.useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  // Typing effect
  React.useEffect(() => {
    if (currentLine >= lines.length) {
      // Restart animation after reaching the end
      setTimeout(() => {
        setCurrentLine(0);
      }, 5000);
      return;
    }

    const currentText = lines[currentLine];
    let index = 0;

    // Clear previous text when starting a new line
    setText("");

    const typingInterval = setInterval(() => {
      if (index < currentText.length) {
        setText((prev) => prev + currentText.charAt(index));
        index++;
      } else {
        clearInterval(typingInterval);

        // Move to next line after a delay
        setTimeout(
          () => {
            setCurrentLine((prev) => prev + 1);
          },
          currentLine % 3 === 0 ? 1000 : 500,
        ); // Longer pause after commands
      }
    }, 30); // Typing speed

    return () => clearInterval(typingInterval);
  }, [currentLine]);

  // Previous lines that have been fully typed
  const previousLines = lines.slice(0, currentLine);

  return (
    <div className="font-mono text-xs md:text-sm bg-black/80 backdrop-blur-sm p-4 rounded-lg border border-green-500/30 w-full max-w-md h-64 overflow-hidden shadow-[0_0_15px_rgba(0,255,0,0.15)]">
      <div className="flex items-center justify-start mb-2 pb-2 border-b border-green-500/20">
        <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <div className="ml-4 text-xs text-green-400/70">ai-assistant.sh</div>
      </div>
      <div className="text-green-400">
        {previousLines.map((line, index) => (
          <div key={index} className="mb-1">
            {line.startsWith("$") ? (
              <span>
                <span className="text-neural-blue">$</span> {line.substring(2)}
              </span>
            ) : line.includes("✓") ? (
              <span>
                <span className="text-neural-green">✓</span> {line.substring(2)}
              </span>
            ) : line.startsWith("Epoch") ? (
              <span className="text-neural-purple">{line}</span>
            ) : line.startsWith("Training") || line.startsWith("Installing") || line.startsWith("Generating") ? (
              <span className="text-neural-pink">{line}</span>
            ) : (
              <span>{line}</span>
            )}
          </div>
        ))}
        <div className="flex">
          {text.startsWith("$") ? (
            <span>
              <span className="text-neural-blue">$</span> {text.substring(2)}
            </span>
          ) : text.includes("✓") ? (
            <span>
              <span className="text-neural-green">✓</span> {text.substring(2)}
            </span>
          ) : text.startsWith("Epoch") ? (
            <span className="text-neural-purple">{text}</span>
          ) : text.startsWith("Training") || text.startsWith("Installing") || text.startsWith("Generating") ? (
            <span className="text-neural-pink">{text}</span>
          ) : (
            <span>{text}</span>
          )}
          {cursorVisible && (
            <span className="ml-0.5 inline-block h-4 w-2 bg-green-500 animate-pulse"></span>
          )}
        </div>
      </div>
    </div>
  );
}

export default AnimatedTerminal; 