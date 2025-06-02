import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

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

export async function POST(request: NextRequest) {
  console.log('🎯 Blog feedback API route hit');
  
  try {
    const { rating, comment, blogSlug, blogTitle }: FeedbackData = await request.json();
    console.log('📝 Feedback data received:', { rating, comment, blogSlug, blogTitle });

    // Validate required fields
    if (!rating || rating < 1 || rating > 5) {
      console.log('❌ Invalid rating');
      return NextResponse.json(
        { error: 'Invalid rating' },
        { status: 400 }
      );
    }

    if (!blogSlug || !blogTitle) {
      console.log('❌ Missing blog information');
      return NextResponse.json(
        { error: 'Missing blog information' },
        { status: 400 }
      );
    }

    const selectedEmoji = EMOJIS.find(e => e.value === rating);
    const ratingDisplay = selectedEmoji ? `${selectedEmoji.emoji} ${selectedEmoji.label} (${rating}/5)` : `${rating}/5`;

    console.log('📧 Attempting to send feedback email with Resend...');
    
    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Blog Feedback <onboarding@resend.dev>',
      to: ['singhal2004mayank@gmail.com'],
      subject: `Blog Feedback: ${blogTitle}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f9f9f9; padding: 20px;">
          <div style="background-color: white; padding: 30px; border-radius: 12px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h1 style="color: #333; margin-bottom: 20px; font-size: 24px;">📝 New Blog Feedback</h1>
            
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #007bff;">
              <h2 style="color: #495057; margin: 0 0 10px 0; font-size: 18px;">Blog Post Details</h2>
              <p style="margin: 5px 0;"><strong>Title:</strong> ${blogTitle}</p>
              <p style="margin: 5px 0;"><strong>Slug:</strong> ${blogSlug}</p>
              <p style="margin: 5px 0;"><strong>URL:</strong> <a href="https://mayanksinghal.tech/blog/${blogSlug}" style="color: #007bff;">View Post</a></p>
            </div>

            <div style="background-color: #fff3cd; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #ffc107;">
              <h2 style="color: #856404; margin: 0 0 15px 0; font-size: 18px;">Reader's Rating</h2>
              <div style="font-size: 24px; text-align: center; padding: 10px;">
                ${ratingDisplay}
              </div>
            </div>

            ${comment ? `
            <div style="background-color: #d1ecf1; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #17a2b8;">
              <h2 style="color: #0c5460; margin: 0 0 15px 0; font-size: 18px;">Reader's Comment</h2>
              <div style="background-color: white; padding: 15px; border-radius: 4px; line-height: 1.6; color: #495057;">
                ${comment.replace(/\n/g, '<br>')}
              </div>
            </div>
            ` : ''}

            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #dee2e6;">
              <p style="color: #6c757d; font-size: 14px; margin: 0;">
                📅 Received on ${new Date().toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </p>
              <p style="color: #6c757d; font-size: 14px; margin: 5px 0 0 0;">
                This feedback was submitted from your portfolio blog.
              </p>
            </div>
          </div>
        </div>
      `,
    });

    console.log('📬 Resend response:', { data, error });

    if (error) {
      console.error('❌ Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send feedback email', details: error },
        { status: 500 }
      );
    }

    console.log('✅ Feedback email sent successfully!');
    return NextResponse.json(
      { message: 'Feedback sent successfully', data },
      { status: 200 }
    );
  } catch (error) {
    console.error('💥 API error:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error },
      { status: 500 }
    );
  }
} 