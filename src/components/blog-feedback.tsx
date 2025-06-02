'use client';

import { useState } from 'react';

interface FeedbackData {
  rating: number;
  comment: string;
  blogSlug: string;
  blogTitle: string;
}

const EMOJIS = [
  { value: 1, emoji: '😞', label: 'Very Poor' },
  { value: 2, emoji: '😐', label: 'Poor' },
  { value: 3, emoji: '🙂', label: 'Good' },
  { value: 4, emoji: '😊', label: 'Great' },
  { value: 5, emoji: '🤩', label: 'Excellent' }
];

interface BlogFeedbackProps {
  blogSlug: string;
  blogTitle: string;
}

export default function BlogFeedback({ blogSlug, blogTitle }: BlogFeedbackProps) {
  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (rating === 0) {
      alert('Please select a rating before submitting!');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    const feedbackData: FeedbackData = {
      rating,
      comment,
      blogSlug,
      blogTitle
    };

    try {
      const response = await fetch('/api/blog-feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(feedbackData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setRating(0);
        setComment('');
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="bg-foreground/5 rounded-2xl p-8 text-center">
        <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-2">Thank you for your feedback! 🙏</h3>
        <p className="text-foreground/60">
          Your thoughts help me create better content. I appreciate you taking the time!
        </p>
      </div>
    );
  }

  return (
    <div className="bg-foreground/5 rounded-2xl p-8">
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold mb-2">How was this post? 💭</h3>
        <p className="text-foreground/60">
          Your feedback helps me improve. Let me know what you think!
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Emoji Rating */}
        <div className="text-center">
          <label className="block text-sm font-medium mb-4">Rate this post:</label>
          <div className="flex justify-center gap-2 mb-2">
            {EMOJIS.map((emojiData) => (
              <button
                key={emojiData.value}
                type="button"
                onClick={() => setRating(emojiData.value)}
                className={`text-4xl p-2 rounded-lg transition-all hover:scale-110 ${
                  rating === emojiData.value 
                    ? 'bg-foreground/10 scale-110' 
                    : 'hover:bg-foreground/5'
                }`}
                title={emojiData.label}
              >
                {emojiData.emoji}
              </button>
            ))}
          </div>
          {rating > 0 && (
            <p className="text-sm text-foreground/60">
              {EMOJIS.find(e => e.value === rating)?.label}
            </p>
          )}
        </div>

        {/* Comment */}
        <div>
          <label htmlFor="feedback-comment" className="block text-sm font-medium mb-2">
            Additional thoughts (optional):
          </label>
          <textarea
            id="feedback-comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="What did you like? What could be improved? Any suggestions?"
            rows={4}
            className="w-full px-4 py-3 bg-white border border-foreground/10 rounded-lg resize-none focus:ring-2 focus:ring-foreground/20 focus:border-transparent"
            disabled={isSubmitting}
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            disabled={isSubmitting || rating === 0}
            className="bg-foreground text-background px-6 py-3 rounded-lg font-medium hover:bg-foreground/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? '📤 Sending...' : '🚀 Send Feedback'}
          </button>
        </div>

        {/* Error Message */}
        {submitStatus === 'error' && (
          <div className="text-center text-red-600 text-sm">
            ❌ Something went wrong. Please try again later.
          </div>
        )}
      </form>
    </div>
  );
} 