# Test Plan: Avto14

## 1. Overview
Object: Avto14 Website (Next.js 14, Tailwind, TypeScript)
Goal: Ensure stability of core user flows (booking, navigation) and SEO integrity.

## 2. Test Scope & Risk Analysis

### Critical Paths (High Risk)
1.  **Lead Submission**: Contact forms (main page, footer, contacts page).
    *   *Risk*: Broken API `api/leads`, validation errors, email delivery failure.
2.  **Navigation & Routing**: All service pages must load with 200 OK.
    *   *Risk*: 404s on service pages, broken links.
3.  **SEO Metadata**: Title, Description, H1 must be present on all pages.
    *   *Risk*: Search ranking drop.

### Browsers & Devices
-   **Desktop**: Chrome (latest), Firefox.
-   **Mobile**: iPhone 14 / Pixel 7 (via emulation).
-   **Tablet**: iPad Air (via emulation).

## 3. Automated Strategy

### A. Static Analysis (Pre-commit)
-   **ESLint**: Catch potential runtime errors and React hooks issues.
-   **TypeScript**: Ensure type safety (no `any` if possible).
-   **Prettier**: Consistent formatting.

### B. Unit & Component Tests (Vitest + React Testing Library)
-   `lib/utils.ts`: Helper functions (clsx, formatters).
-   `components/ui/*`: Reusable components (Buttons, Inputs) - ensure they render and handle events.

### C. End-to-End (E2E) Tests (Playwright)
-   **Flow 1: Contact Form**: Fill form -> Submit -> Verify success message -> Verify API call.
-   **Flow 2: Navigation**: Visit Home -> Click Service -> Verify URL and H1.
-   **Flow 3: Visual Regression** (Optional for now): Snapshot of Home/Services.

## 4. Manual Checklist
-   [ ] **Responsive Design**: Check header/footer overlap on small screens (320px).
-   [ ] **Images**: Check all images load (no broken icons).
-   [ ] **Cross-browser**: Quick check on Safari (if available).
-   [ ] **Accessibility**: Tab navigation through forms.

## 5. Tools Setup
-   **Test Runner**: Vitest
-   **E2E Framework**: Playwright
-   **Linting**: Standard Next.js ESLint config
