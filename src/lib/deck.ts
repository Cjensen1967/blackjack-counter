
import type { PlayingCardType, Rank, Suit } from '@/types';

const SUITS: Suit[] = ['H', 'D', 'C', 'S'];
const RANKS: Rank[] = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];

export function createDeck(): PlayingCardType[] {
  const deck: PlayingCardType[] = [];
  for (const suit of SUITS) {
    for (const rank of RANKS) {
      deck.push({ suit, rank, id: `${rank}${suit}` });
    }
  }
  return deck;
}

export function shuffleDeck(deck: PlayingCardType[]): PlayingCardType[] {
  const shuffledDeck = [...deck];
  // Fisher-Yates shuffle algorithm
  for (let i = shuffledDeck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]];
  }
  return shuffledDeck;
}

export function getHiLoCount(cards: PlayingCardType[]): number {
  let count = 0;
  for (const card of cards) {
    const rank = card.rank;
    if (['2', '3', '4', '5', '6'].includes(rank)) {
      count += 1;
    } else if (['T', 'J', 'Q', 'K', 'A'].includes(rank)) {
      count -= 1;
    }
    // Cards 7, 8, 9 have a value of 0, so no change to count
  }
  return count;
}

export function getSuitSymbol(suit: Suit): string {
  switch (suit) {
    case 'H': return '♥';
    case 'D': return '♦';
    case 'C': return '♣';
    case 'S': return '♠';
    default: return '';
  }
}

export function getSuitColor(suit: Suit): string {
  // Using destructive for red as it's often a strong red, and foreground for black.
  // These can be customized further if needed.
  return (suit === 'H' || suit === 'D') ? 'hsl(var(--destructive))' : 'hsl(var(--foreground))';
}
