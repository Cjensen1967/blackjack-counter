
"use client";

import Image from 'next/image';
import type { PlayingCardType } from '@/types';
import { Card } from '@/components/ui/card';

// Helper function to get the full suit name for the filename (e.g., 'H' -> 'hearts')
const getSuitFilenamePart = (suit: PlayingCardType['suit']): string => {
  switch (suit) {
    case 'H': return 'hearts';
    case 'D': return 'diamonds';
    case 'C': return 'clubs';
    case 'S': return 'spades';
    default: return ''; // Should not happen
  }
};

// Helper function to get the rank name for the filename (e.g., 'A' -> 'ace', 'T' -> '10')
const getRankFilenamePart = (rank: PlayingCardType['rank']): string => {
  switch (rank) {
    case 'A': return 'ace';
    case 'K': return 'king';
    case 'Q': return 'queen';
    case 'J': return 'jack';
    case 'T': return '10';
    default: return rank.toLowerCase(); // For ranks '2' through '9'
  }
};

interface PlayingCardProps {
  card: PlayingCardType;
}

export function PlayingCard({ card }: PlayingCardProps) {
  const suitFilenamePart = getSuitFilenamePart(card.suit);
  const rankFilenamePart = getRankFilenamePart(card.rank);
  
  const imageName = `${suitFilenamePart}_${rankFilenamePart}.svg`;
  const imagePath = `/images/cards/${imageName}`;

  // For alt text and aria-label, create a readable description
  const rankDisplay = 
    card.rank === 'T' ? '10' : 
    card.rank === 'A' ? 'Ace' : 
    card.rank === 'K' ? 'King' : 
    card.rank === 'Q' ? 'Queen' : 
    card.rank === 'J' ? 'Jack' : 
    card.rank;
  
  const suitDisplay = 
    card.suit === 'H' ? 'Hearts' : 
    card.suit === 'D' ? 'Diamonds' : 
    card.suit === 'C' ? 'Clubs' : 
    'Spades';
  const altText = `${rankDisplay} of ${suitDisplay}`;

  return (
    <Card 
      className="w-[72px] h-[100px] shadow-md overflow-hidden bg-card flex items-center justify-center"
      data-ai-hint="playing card" // Retain AI hint
      aria-label={altText} // Accessibility for the card container
    >
      <Image
        src={imagePath}
        alt={altText} // Alt text for the image itself
        width={72} 
        height={100}
        className="object-contain w-full h-full" // Use object-contain to ensure SVG aspect ratio is maintained
        priority // Preload images as they are critical content
      />
    </Card>
  );
}
