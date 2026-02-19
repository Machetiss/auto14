# Architecture & Tech Stack

## 🛠 Tech Stack
-   **Framework**: Next.js 14 (App Router)
-   **Language**: TypeScript
-   **Styling**: Tailwind CSS 3.3
-   **Icons**: Lucide React
-   **Deployment**: (To be defined, likely Vercel or VPS)

## 📂 Directory Structure
-   `/app`: Main application routes (App Router).
-   `/components`: Reusable UI components.
-   `/public`: Static assets (images, icons).
-   `/lib`: Utility functions and shared logic.
-   `/docs`: Project documentation.
-   `/data`: Static data files (if any).

## 📏 Development Rules
-   **Mobile-First**: Design and develop for mobile devices first, then scale up.
-   **Performance**: Aim for <3 seconds load time. Use `next/image` for optimizations.
-   **SEO & AI**:
    -   Semantic HTML5 landmarks.
    -   Schema.org structured data (AutoRepair, Service, Review, FAQPage).
    -   Accessible (a11y) and crawlable content.
-   **Code Quality**:
    -   Clean, readable code.
    -   Component-based architecture.
    -   No hardcoded secrets (use `.env`).

## 🔄 Workflow
1.  **Task Breakdown**: 1-2 day increments.
2.  **Branching**: Feature branches (if using git flow) or direct clean commits.
3.  **Review**: Self-review or agent review before final usage.
4.  **Testing**: Verify responsive design and core functionality.
