
"use client";

import { useState, useEffect, useCallback, FormEvent } from 'react';
import type { PlayingCardType } from '@/types';
import { createDeck, shuffleDeck, getHiLoCount } from '@/lib/deck';
import { PlayingCard } from '@/components/PlayingCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2, XCircle, RefreshCw } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function CountSightTrainer() {
  const [currentHand, setCurrentHand] = useState<PlayingCardType[]>([]);
  const [correctCount, setCorrectCount] = useState<number>(0);
  const [userCount, setUserCount] = useState<string>('');
  const [feedback, setFeedback] = useState<{ type: 'idle' | 'correct' | 'incorrect'; message: string } | null>(null);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [handId, setHandId] = useState<number>(Date.now()); // Unique key for animation

  const startNewDrill = useCallback(() => {
    const newDeck = createDeck();
    const shuffled = shuffleDeck(newDeck);
    const hand = shuffled.slice(0, 12);
    setCurrentHand(hand);
    setCorrectCount(getHiLoCount(hand));
    setUserCount('');
    setFeedback(null);
    setIsSubmitted(false);
    setHandId(Date.now()); // Trigger animation by changing key
  }, []);

  useEffect(() => {
    startNewDrill();
  }, [startNewDrill]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (userCount === '' || isNaN(parseInt(userCount, 10))) {
      // Basic validation for empty or non-numeric input
      setFeedback({ type: 'incorrect', message: 'Please enter a valid number.'});
      setIsSubmitted(true); // Show feedback
      return;
    }

    const count = parseInt(userCount, 10);
    setIsSubmitted(true);
    if (count === correctCount) {
      setFeedback({ type: 'correct', message: 'Correct!' });
    } else {
      setFeedback({ type: 'incorrect', message: `Incorrect. The correct count is ${correctCount}.` });
    }
  };

  return (
    <div className="container mx-auto max-w-3xl p-4 sm:p-8 flex flex-col items-center space-y-6">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-primary">CountSight Trainer</h1>
        <p className="text-muted-foreground mt-1 text-lg">Sharpen your Hi-Lo card counting skills!</p>
      </header>

      <Card className="w-full shadow-xl bg-card">
        <CardContent className="p-4 sm:p-6">
          {currentHand.length > 0 && (
            <div 
              key={handId} 
              className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 sm:gap-3 justify-items-center animate-fadeIn mb-6"
              role="region"
              aria-label="Displayed cards"
            >
              {currentHand.map((card) => (
                <PlayingCard key={card.id} card={card} />
              ))}
            </div>
          )}

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-stretch space-y-3 sm:space-y-0 sm:space-x-3">
              <Input
                type="number"
                value={userCount}
                onChange={(e) => setUserCount(e.target.value)}
                placeholder="Enter Hi-Lo count"
                className="text-center text-lg h-12 flex-grow"
                aria-label="Hi-Lo count input"
                required
              />
              <Button type="submit" className="w-full sm:w-auto h-12 text-base">
                Check Count
              </Button>
            </form>
          ) : (
             feedback && ( // ensure feedback is not null before rendering
                <div
                  className={cn(
                    "flex items-center space-x-2 text-lg p-3 rounded-md w-full justify-center animate-fadeIn min-h-[3rem]",
                    feedback.type === 'correct' ? 'bg-accent/20 text-accent-foreground' : 'bg-destructive/20 text-destructive-foreground'
                  )}
                  role="alert"
                >
                  {feedback.type === 'correct' ? (
                    <CheckCircle2 className="h-6 w-6 text-accent shrink-0" />
                  ) : (
                    <XCircle className="h-6 w-6 text-destructive shrink-0" />
                  )}
                  <span className="text-center">{feedback.message}</span>
                </div>
              )
          )}
        </CardContent>
      </Card>
      
      <Button onClick={startNewDrill} variant="outline" className="w-full sm:w-auto text-base py-3 px-6 h-12">
        <RefreshCw className="mr-2 h-5 w-5" /> New Drill
      </Button>
    </div>
  );
}
