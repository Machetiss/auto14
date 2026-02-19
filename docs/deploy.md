# Deployment & Runbook (Vercel)

This project is optimized for deployment on [Vercel](https://vercel.com/), the primary hosting platform for Next.js applications.

## 1. Project Preparation & Environment

Ensure your code is pushed to a standard Git repository (GitHub, GitLab, or Bitbucket).

**Important:** Before deploying, review the required environment variables.
In the Vercel dashboard, you'll need to add these values (you can find templates in `.env.example` or `.env.production`):
- `NEXT_PUBLIC_SITE_URL`: Should be set to `https://auto-14.ru`
- `NEXT_PUBLIC_YANDEX_METRIKA_ID`: Your Metrika tag ID.
- `NEXT_PUBLIC_TELEGRAM_BOT_TOKEN`: The token for your Telegram Lead Bot.
- `NEXT_PUBLIC_TELEGRAM_CHAT_ID`: The chat ID where leads should be sent.

*Note: If some variables are empty, ensure the code handles missing keys gracefully so the build does not fail.*

## 2. Deploying to Vercel

1. **Log in to Vercel**: Go to [vercel.com](https://vercel.com) and log in with your Git provider.
2. **Add New Project**: Click the **"Add New..."** button and select **"Project"**.
3. **Import Repository**:
   - Locate your repository in the list (e.g., `avto14`) and click **"Import"**.
4. **Configure Project**:
   - **Framework Preset**: Vercel should automatically detect **Next.js**.
   - **Root Directory**: If your Next.js app is in a subfolder (e.g., `Сайт/avto14`), click "Edit" next to "Root Directory" and select the correct folder. If it's in the root of the repo, leave it as `./`.
   - **Environment Variables**: Expand this section and paste the key-value pairs from step 1.
5. **Deploy**: Click the **"Deploy"** button. Vercel will build and launch your site.

## 3. Custom Domain Setup (auto-14.ru)

Once the deployment is successful, you need to link your domain.

### In Vercel:
1. Go to your project dashboard.
2. Navigate to **Settings > Domains**.
3. Enter `auto-14.ru` and click **"Add"**.
4. Vercel will provide instructions on the DNS records you need to create. Usually, it's an **A Record** or a **CNAME**.

### In your Domain Registrar (e.g., REG.RU):
1. Log in to your registrar's control panel and go to the DNS settings for `auto-14.ru`.
2. **Remove** any existing conflicting A or CNAME records for `@` or `www`.
3. **Add the records** provided by Vercel. Typically:
   - **Type:** `A`
   - **Host:** `@` (or leave blank)
   - **Value:** `76.76.21.21` (Verify this IP in Vercel)
   *(Alternatively, configure the nameservers as instructed by Vercel for automatic management).*
4. Save the changes.

*DNS propagation can take anywhere from a few minutes to 48 hours.* Vercel will automatically provision a free SSL certificate once the DNS changes propagate.

## 4. Local Development

To run the project locally:

```bash
# Install dependencies
npm ci

# Start dev server
npm run dev
```
Access the site at [http://localhost:3000](http://localhost:3000).

To test a production build locally:
```bash
npm run build && npm start
```

## 5. Maintenance & Monitoring

- **Vercel Analytics/Speed Insights**: You can enable these in the Vercel dashboard for performance tracking.
- **Logs**: Real-time deployment and runtime logs are available in the Vercel dashboard under the "Logs" tab.
- **Health Check**: Endpoint `GET /api/health` returns basic status information.
