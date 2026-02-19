# QA Report: Homepage Cross-Resolution

**Agent**: [QA]
**Target**: `app/page.tsx`
**Method**: Static Code Verification (Manual Review of Tailwind Classes)
**Date**: 2026-02-19

## 1. Verified Resolutions & Layouts

| Resolution | Device | Layout Logic | Status |
| :--- | :--- | :--- | :--- |
| **Mobile** (<768px) | iPhone SE, Pixel | `flex-col` stack. Hero text top, Image bottom (`h-[50vh]`). Menus hidden/compact. | ✅ Verified (Code) |
| **Tablet** (768px-1024px) | iPad Portrait | `md:flex-row`. Text left (`55%`), Image right (`45%`). Grid columns = 2. | ✅ Verified (Code) |
| **Desktop** (>1024px) | Laptop/Monitor | `lg:grid-cols-3` for Services. Hero image anchored bottom-right. | ✅ Verified (Code) |

## 2. Key Checks

### A. Text Overlap
-   **Header**: Phone number hides on mobile (`hidden md:block`), preventing collision with Logo/Nav.
-   **Hero Typography**: Uses `vw` units (`text-[15vw]`), ensuring text scales down proportionally with screen width.
-   **Services**: Grid system (`grid-cols-1` -> `2` -> `3`) prevents card overlapping.

### B. Image & Overlay Integrity
-   **Hero Girl**: Use `object-contain` and `object-bottom`. On mobile, it takes `50vh` height at the bottom.
    -   *Risk*: On short screens, content might push it down, but flow is standard.
-   **Floating "Pain Points"**:
    -   Positioned absolutely with `%`.
    -    **Safety**: They have `pointer-events-none` (except CTA), so they visually float *over* content but do NOT block clicks on the "Book" button.
    -   *Visual Note*: Some overlap with H1 is intentional design (aesthetic chaos), but legibility of buttons is preserved via Z-index (`z-20` buttons vs `z-40` text checks).

## 3. Risks / Edge Cases
1.  **Extreme Aspect Ratios**: On very wide/short screens, `absolute` percentages for floating text might shift them awkwardly off-center.
2.  **Fold**: On mobile, the "Book" button in the Hero might be below the fold if the phone is very small (iPhone SE), requiring scroll.

## 4. Conclusion
The layout uses robust Tailwind patterns (`flex-col md:flex-row`, `grid`, `vw` text). No blocking layout bugs identified in code.

**Status**: Passed Code Review.
