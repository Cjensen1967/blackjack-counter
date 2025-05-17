
"use client";

import type { PlayingCardType } from '@/types';
import { getSuitSymbol, getSuitColor } from '@/lib/deck';
import { Card } from '@/components/ui/card';

interface PlayingCardProps {
  card: PlayingCardType;
}

export function PlayingCard({ card }: PlayingCardProps) {
  const suitSymbol = getSuitSymbol(card.suit);
  const suitColor = getSuitColor(card.suit);
  const displayRank = card.rank === 'T' ? '10' : card.rank;

  return (
    <Card 
      className="w-[72px] h-[100px] p-1.5 flex flex-col justify-between items-center shadow-lg bg-card"
      data-ai-hint="playing card"
      aria-label={`${displayRank} of ${card.suit === 'H' ? 'Hearts' : card.suit === 'D' ? 'Diamonds' : card.suit === 'C' ? 'Clubs' : 'Spades'}`}
    >
      {/* Top-left corner */}
      <div className="self-start flex flex-col items-center">
        <div className="text-lg font-bold leading-none" style={{ color: suitColor }}>
          {displayRank}
        </div>
        <div className="text-sm leading-none" style={{ color: suitColor }}>
          {suitSymbol}
        </div>
      </div>
      
      {/* Center symbol */}
      <div className="text-3xl" style={{ color: suitColor }} aria-hidden="true">
        {suitSymbol}
      </div>
      
      {/* Bottom-right corner (rotated) */}
      <div className="self-end flex flex-col items-center transform rotate-180">
        <div className="text-lg font-bold leading-none" style={{ color: suitColor }}>
          {displayRank}
        </div>
        <div className="text-sm leading-none" style={{ color: suitColor }}>
          {suitSymbol}
        </div>
      </div>
    </Card>
  );
}

