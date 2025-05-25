# Email Setup Guide for Your Portfolio Contact Form

## 🚀 Quick Start

Your contact form is now ready to send emails! Follow these steps to complete the setup:

## 1. Get Your Resend API Key

1. **Sign up for Resend**: Go to [resend.com](https://resend.com) and create a free account
2. **Verify your email**: Check your email and verify your account
3. **Get API Key**: 
   - Go to the API Keys section in your dashboard
   - Click "Create API Key"
   - Copy the key (you won't be able to see it again!)

## 2. Configure Environment Variables

1. Open your `.env.local` file
2. Replace `your_resend_api_key_here` with your actual API key:
   ```
   RESEND_API_KEY=re_your_actual_api_key_here
   ```

## 3. Update Email Settings

Open `src/app/api/contact/route.ts` and update:

```typescript
// Line 22: Replace with your actual email
to: ['your-email@example.com'], // Change this to your email address
```

## 4. Test Your Form

1. Start your development server: `npm run dev`
2. Navigate to your contact section
3. Fill out the form and submit
4. Check your email inbox!

## 🎯 What's Included

### ✅ Features Implemented:
- **Form validation**: Required fields and email format validation
- **Loading states**: Button shows "Sending..." during submission
- **Success/Error feedback**: Users get immediate feedback
- **Form reset**: Form clears after successful submission
- **Responsive design**: Works on all devices
- **Email formatting**: Clean HTML email template
- **Reply-to functionality**: You can reply directly to the sender

### 📧 Email Template Features:
- Clean, professional design
- Sender's name and email
- Full message content
- Source identification (from your portfolio)
- Mobile-friendly HTML

## 🔧 Customization Options

### Change Email Template
Edit the HTML in `src/app/api/contact/route.ts` (lines 25-40) to customize the email design.

### Add More Fields
1. Add fields to the form in `src/components/contact-section.tsx`
2. Update the `FormData` interface
3. Update the API route to handle new fields

### Custom Domain (Optional)
For production, you can:
1. Add your domain to Resend
2. Verify DNS records
3. Update the `from` field to use your domain: `from: 'Contact <contact@yourdomain.com>'`

## 🚨 Important Notes

### Free Tier Limits:
- **3,000 emails/month** on Resend's free plan
- Perfect for portfolio contact forms
- Upgrade available if needed

### Security:
- Never commit your API key to version control
- The `.env.local` file is already in `.gitignore`
- API key is only accessible on the server

### Production Deployment:
- Add your `RESEND_API_KEY` to your hosting platform's environment variables
- Update the `to` email address to your actual email
- Consider adding rate limiting for production use

## 🛠 Troubleshooting

### Common Issues:

1. **"Failed to send email"**
   - Check your API key is correct
   - Verify the API key is set in environment variables
   - Check the server console for detailed error messages

2. **Form not submitting**
   - Check browser console for JavaScript errors
   - Ensure all required fields are filled
   - Verify the API route is accessible at `/api/contact`

3. **Not receiving emails**
   - Check spam folder
   - Verify the `to` email address is correct
   - Check Resend dashboard for delivery status

### Debug Mode:
Add this to your API route for debugging:
```typescript
console.log('Form data received:', { name, email, message });
console.log('Resend response:', { data, error });
```

## 🎉 You're All Set!

Your contact form is now fully functional with email capabilities. Users can reach out to you directly through your portfolio, and you'll receive their messages in your inbox with the ability to reply directly.

## 📚 Additional Resources

- [Resend Documentation](https://resend.com/docs)
- [Next.js API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
- [React Hook Form](https://react-hook-form.com/) (for advanced form handling)

---

**Need help?** Check the troubleshooting section above or refer to the Resend documentation for more advanced configurations. 