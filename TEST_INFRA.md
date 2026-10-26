# E2E Test Infra: Telegram-bot «Смайл» (Money Ideas & Quiz Modernization)

## Test Philosophy
- Opaque-box, requirement-driven.
- Automated scripts executing directly in the target environment (`/root/smile-bot` via Node.js).
- Complete isolation from external network dependencies for deterministic verification (offline fallback and mocked or local search).

## Feature Inventory & Test Coverage
| # | Feature | Requirement | Tier 1 (Feature) | Tier 2 (Boundary) | Tier 3 (Cross) |
|---|---------|-------------|:----------------:|:-----------------:|:--------------:|
| 1 | Disk Cleanup & Environment Stability | ORIGINAL_REQUEST §R3 | 5 | 5 | ✓ |
| 2 | SQLite Schema Migration & 42 Pts Preservation | ORIGINAL_REQUEST §R3 | 5 | 5 | ✓ |
| 3 | Practical Real Business Cases & Financial Models | ORIGINAL_REQUEST §R1 | 5 | 5 | ✓ |
| 4 | Business Directions Diversity (6 categories) | ORIGINAL_REQUEST §R1 | 5 | 5 | ✓ |
| 5 | Persistent Deduplication for Business Schemes | ORIGINAL_REQUEST §R1 | 5 | 5 | ✓ |
| 6 | Graceful Fallback for Money Ideas | ORIGINAL_REQUEST §R3 | 5 | 5 | ✓ |
| 7 | Quiz Bank Expansion to 200+ Questions | ORIGINAL_REQUEST §R2 | 5 | 5 | ✓ |
| 8 | Balanced Quiz Options & Explanations | ORIGINAL_REQUEST §R2 | 5 | 5 | ✓ |
| 9 | Persistent Zero-Repeat Quiz Cycle Tracker | ORIGINAL_REQUEST §R2 | 5 | 5 | ✓ |
| 10 | Native Telegram Polls & Scoring Compatibility | ORIGINAL_REQUEST §R2 | 5 | 5 | ✓ |
| 11 | Automated Test Suite Execution | ORIGINAL_REQUEST §R3 | 5 | 5 | ✓ |
| 12 | PM2 Verification & Untouched Network Services | Acceptance Criteria | 5 | 5 | ✓ |

## Test Architecture
- Test Runner: Node.js test harness scripts in `/root/smile-bot/tests/`:
  - `test_uniqueness_money.js`: 50 sequential invocations -> 0 duplicates in SQLite.
  - `test_uniqueness_quiz.js`: 100 sequential requests -> 0 repeats across cycles.
  - `test_integrity.js`: Verifies mandatory schema fields, data structures, point sums (42 pts preserved), option counts, and system service states (`awg-quick@awg0` and `xray` untouched).
- Pass/Fail semantics: All tests must exit with code `0`. Any failure exits with non-zero code and descriptive error log.

## Real-World Application Scenarios (Tier 4)
| # | Scenario | Features Exercised | Complexity |
|---|----------|--------------------|------------|
| 1 | Cold Start & Recovery: Bot restarts under PM2, performs migrations, loads questions, serves initial poll | F1, F2, F7, F9, F10, F12 | High |
| 2 | Heavy Idea Generation: 50 consecutive ideas requested with intermittent network simulation | F3, F4, F5, F6, F11 | High |
| 3 | Extended Daily Quizzing: 100 consecutive quiz polls sent, answering with correct and incorrect choices | F7, F8, F9, F10, F11 | High |
| 4 | Sunday Leaderboard Recap Integrity: Weekly points aggregation computed correctly from live user scores | F2, F10, F11 | Medium |
| 5 | System Services Isolation: PM2 restart and bot operations leave VPN/proxy services unaffected | F1, F12 | Low |
