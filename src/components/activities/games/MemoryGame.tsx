import React, { useState, useEffect } from 'react';
import { Shuffle } from 'lucide-react';

interface Card {
  id: number;
  emoji: string;
  isFlipped: boolean;
  isMatched: boolean;
}

const emojis = ['🌸', '🌺', '🌻', '🌼', '🌷', '🍀', '🌹', '🌞'];

const MemoryGame = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matches, setMatches] = useState(0);

  const initializeCards = () => {
    const duplicatedEmojis = [...emojis, ...emojis];
    const shuffledEmojis = duplicatedEmojis.sort(() => Math.random() - 0.5);
    
    setCards(shuffledEmojis.map((emoji, index) => ({
      id: index,
      emoji,
      isFlipped: false,
      isMatched: false
    })));
    setFlippedCards([]);
    setMatches(0);
  };

  useEffect(() => {
    initializeCards();
  }, []);

  const handleCardClick = (id: number) => {
    if (flippedCards.length === 2 || cards[id].isFlipped || cards[id].isMatched) return;

    const newCards = [...cards];
    newCards[id].isFlipped = true;
    setCards(newCards);

    if (flippedCards.length === 1) {
      const firstCard = cards[flippedCards[0]];
      const secondCard = cards[id];

      if (firstCard.emoji === secondCard.emoji) {
        newCards[flippedCards[0]].isMatched = true;
        newCards[id].isMatched = true;
        setMatches(m => m + 1);
        setFlippedCards([]);
      } else {
        setFlippedCards([...flippedCards, id]);
        setTimeout(() => {
          newCards[flippedCards[0]].isFlipped = false;
          newCards[id].isFlipped = false;
          setCards([...newCards]);
          setFlippedCards([]);
        }, 1000);
      }
    } else {
      setFlippedCards([id]);
    }
  };

  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold text-text-primary">Memory Match</h3>
        <button
          onClick={initializeCards}
          className="p-2 rounded-lg hover:bg-ocean-light/50 transition"
          aria-label="Shuffle cards"
        >
          <Shuffle className="w-5 h-5 text-ocean-dark" />
        </button>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {cards.map(card => (
          <button
            key={card.id}
            onClick={() => handleCardClick(card.id)}
            className={`
              w-full aspect-square rounded-lg text-3xl flex items-center justify-center transition-all duration-300
              ${card.isFlipped || card.isMatched 
                ? 'bg-ocean-light rotate-0' 
                : 'bg-ocean-dark text-transparent hover:bg-ocean rotate-180'
              }
            `}
            disabled={flippedCards.length === 2}
            aria-label={`Card ${card.id + 1}`}
          >
            <span className={card.isFlipped || card.isMatched ? 'visible' : 'invisible'}>
              {card.emoji}
            </span>
          </button>
        ))}
      </div>

      {matches === emojis.length && (
        <div className="mt-6 text-center text-ocean-dark font-semibold">
          Congratulations! You've matched all pairs! 🎉
        </div>
      )}
    </div>
  );
};

export default MemoryGame;