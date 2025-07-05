# dotenvx Integration Guide

## What is dotenvx?

dotenvx is the next generation of environment variable management that solves key problems with traditional `.env` approaches:

- **🔒 Security**: Encrypts sensitive environment variables
- **🌍 Multi-Environment**: Easily manage different environments (dev, staging, production)
- **⚡ Cross-Platform**: Works consistently across all platforms and languages

## Installation

dotenvx is already installed in this project:

```bash
npm install @dotenvx/dotenvx --save-dev
```

## Environment Files Setup

### 1. Create your environment files:

**`.env` (Development)**
```bash
# Development Environment Variables
RESEND_API_KEY=your_resend_api_key_here
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

**`.env.production` (Production)**
```bash
# Production Environment Variables
RESEND_API_KEY=your_production_resend_api_key
NEXT_PUBLIC_SITE_URL=https://mayanksinghal.tech
```

**`.env.local` (Local Overrides)**
```bash
# Local development overrides
RESEND_API_KEY=your_local_test_key
```

### 2. Update your `.gitignore`:

```bash
# Add these lines to .gitignore
.env
.env.local
.env.production
.env.staging
.env.*.local
```

## Usage

### Running the Application

The package.json scripts have been updated to use dotenvx:

```bash
# Development with .env
npm run dev

# Development with production environment
npm run dev:prod

# Build with environment variables
npm run build

# Start with environment variables
npm run start
```

### Manual Usage

You can also use dotenvx directly:

```bash
# Run with specific environment file
dotenvx run -f .env.production -- next dev

# Run with multiple environment files (cascading)
dotenvx run -f .env.local -f .env -- next dev

# Run any command with environment variables
dotenvx run -- npm run build
```

## Advanced Features

### 1. **Encryption** (Recommended for Production)

Encrypt your sensitive environment variables:

```bash
# Encrypt your .env file
npx dotenvx encrypt

# Encrypt specific environment file
npx dotenvx encrypt .env.production
```

This will:
- Generate a `DOTENV_PUBLIC_KEY` (for encryption)
- Generate a `DOTENV_PRIVATE_KEY` (for decryption)
- Encrypt all sensitive values in your .env file

**Example encrypted .env:**
```bash
#/-------------------[DOTENV_PUBLIC_KEY]--------------------/
#/            public-key encryption for .env files          /
#/       [how it works](https://dotenvx.com/encryption)     /
#/----------------------------------------------------------/
DOTENV_PUBLIC_KEY="03f8b376234c4f2f0445f392a12e80f3a84b4b0d1e0c3df85c494e45812653c22a"

RESEND_API_KEY="encrypted:BNr24F4vW9CQ37LOXeRgOL6QlwtJfAoAVXtSdSfpicPDHtqo/Q2HekeCjAWrhxHy+VHAB3QTg4fk9VdIoncLIlu1NssFO6XQXN5fnIjXRmp5pAuw7xwqVXe/1lVukATjG0kXR4SHe45s4Tb6fEjs"
```

### 2. **Environment Composition**

Load multiple environment files with priority:

```bash
# .env.local overrides .env
dotenvx run -f .env.local -f .env -- next dev
```

### 3. **Cross-Platform Consistency**

dotenvx works the same across:
- macOS, Linux, Windows
- Node.js, Python, Ruby, etc.
- Development, staging, production

## Best Practices

### 1. **Environment File Structure**
```
.env                 # Default development
.env.local          # Local overrides (gitignored)
.env.production     # Production values
.env.staging        # Staging values
.env.test           # Test environment
```

### 2. **Security Guidelines**
- Always encrypt production environment files
- Never commit unencrypted sensitive data
- Use different API keys for different environments
- Rotate keys regularly

### 3. **Team Collaboration**
- Commit encrypted `.env` files
- Share `DOTENV_PUBLIC_KEY` in the repository
- Keep `DOTENV_PRIVATE_KEY` secret and secure
- Use environment-specific keys for team members

## Current Project Integration

Your portfolio project uses these environment variables:

### API Routes
- `src/app/api/contact/route.ts` - Uses `RESEND_API_KEY`
- `src/app/api/blog-feedback/route.ts` - Uses `RESEND_API_KEY`

### Environment Variables Used
- `RESEND_API_KEY` - For email functionality via Resend service
- `NEXT_PUBLIC_SITE_URL` - For site URL configuration

## Troubleshooting

### Common Issues

1. **Environment variables not loading**
   ```bash
   # Check if dotenvx is running
   dotenvx run -- env | grep RESEND_API_KEY
   ```

2. **File not found errors**
   ```bash
   # Create the environment file
   echo "RESEND_API_KEY=your_key_here" > .env
   ```

3. **Encryption issues**
   ```bash
   # Verify encryption keys
   dotenvx run -- printenv | grep DOTENV
   ```

## Resources

- [dotenvx Documentation](https://dotenvx.com/docs)
- [Next.js Environment Variables](https://nextjs.org/docs/app/building-your-application/configuring/environment-variables)
- [Resend API Documentation](https://resend.com/docs)

---

## Next Steps

1. Create your `.env` file with your actual `RESEND_API_KEY`
2. Test the application: `npm run dev`
3. Consider encrypting sensitive values for production
4. Set up environment-specific configurations for deployment 