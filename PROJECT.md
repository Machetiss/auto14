# Project: Telegram-bot «Смайл» — Modernization of Money Ideas & Quiz Modules

## Architecture
- **Host**: Ubuntu 24.04 VPS `72.56.65.84`, process manager PM2 (`smile-bot`, Node.js v20.20.2).
- **Network / System Services**: `awg-quick@awg0.service` (Amnezia WireGuard) and `xray.service` (Xray proxy). MUST REMAIN UNTOUCHED.
- **Entry & Routing**: `index.js` (grammY bot framework), listening to events, poll answers, intents.
- **Persistence Layer**: `memory.js` backed by `better-sqlite3` and `memory.db`. Synchronous transactions, schema migrations on initialization.
- **Feature Modules**:
  - `money_ideas.js`: Real business cases generator with financial metrics, dynamic queries, offline fallback bank, and SQLite deduplication.
  - `quiz.js`: 200+ unique questions bank with lifehacks, language idioms, Tatar/Kazan culture, science, auto, logic. Stable SHA-256 signatures, SQLite zero-repeat cycle tracking, native Telegram polls, and points scoring.

## Feature Inventory
| # | Feature | Description | Milestone | Source |
|---|---------|-------------|-----------|--------|
| 1 | Disk Cleanup & Environment Stability | Free up ~23GB from `/tmp/puppeteer_dev_profile-*` to prevent `SQLITE_FULL` and allow backups | M0 | Survey (Explorer 1) |
| 2 | SQLite Schema Migration & Persistence | Create `money_ideas_history`, `money_ideas_bank`, `quiz_bank`, `quiz_history` with 100% preservation of `points` (42 pts) and `points_history` | M0 | ORIGINAL_REQUEST §R3, Survey (Explorer 3) |
| 3 | Practical Real Business Cases & Financial Models | Include initial investment, step-by-step equipment/actions, net profit, payback time, and key risks | M1 | ORIGINAL_REQUEST §R1 |
| 4 | Business Directions Diversity | Resale/flipping, mobile services, equipment rental, micro-production, seasonal niches, applied digital freelancing | M1 | ORIGINAL_REQUEST §R1 |
| 5 | Persistent Deduplication for Business Schemes | Save sent ideas to SQLite, check hash/similarity before publication, guarantee 0 duplicates in 50 calls | M1 | ORIGINAL_REQUEST §R1, Acceptance Criteria |
| 6 | Graceful Fallback for Money Ideas | Offline fallback repository of 40+ verified structured business cases if Tavily API is down or empty | M1 | ORIGINAL_REQUEST §R3 |
| 7 | Quiz Bank Expansion to 200+ Questions | 200+ unique questions covering lifehacks, linguistics/idioms, Tatar/Kazan culture, science, auto, and logic | M2 | ORIGINAL_REQUEST §R2 |
| 8 | Balanced Quiz Options & Explanations | Options with balanced string lengths and plausible distractors; educational explanations | M2 | ORIGINAL_REQUEST §R2 |
| 9 | Persistent Zero-Repeat Quiz Cycle Tracker | Stable SHA-256 question signatures in SQLite, zero repeats until entire 200+ pool is exhausted | M2 | ORIGINAL_REQUEST §R2 |
| 10 | Native Telegram Polls & Scoring Compatibility | Native `bot.api.sendPoll`, `poll_answer` listener, points awarding in `memory.addPoints`, and Sunday summary recap | M2 | ORIGINAL_REQUEST §R2 |
| 11 | Automated Test Suite | Standalone tests: 50-call money ideas uniqueness, 100-call quiz uniqueness, schema & data integrity | M3 | ORIGINAL_REQUEST §R3 |
| 12 | PM2 Verification & Untouched Network Services | Restart `smile-bot` under PM2, verify status `online` and clean logs, ensure `awg-quick@awg0` and `xray` untouched | M3 | ORIGINAL_REQUEST §R3, Acceptance Criteria |

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| M0 | Server Prep & SQLite Schema Migration | Cleanup `/tmp`, backup `memory.db` and code, create migration in `memory.js` (`money_ideas_history`, `money_ideas_bank`, `quiz_bank`, `quiz_history`), verify 42 live points | none | DONE |
| M1 | Business Scheme Generator Modernization | Refactor `money_ideas.js`: financial models, 6 categories, offline fallback bank (40+ cases), SQLite deduplication | M0 | IN_PROGRESS |
| M2 | Quiz Pool Expansion & Cycle Engine | Refactor `quiz.js`: 200+ balanced questions, SHA-256 signatures, SQLite zero-repeat tracker, `sendPoll` integration | M0 | PLANNED |
| M3 | E2E Testing Suite & PM2 Production Verification | Implement test runner (`test_uniqueness_money.js`, `test_uniqueness_quiz.js`, `test_integrity.js`), run tests, restart PM2, verify system services | M1, M2 | PLANNED |

## Interface Contracts

### `memory.js` ↔ `money_ideas.js`
- `memory.isMoneyIdeaSent(signature: string): boolean`
  - Returns true if SHA-256 signature or exact title already exists in `money_ideas_history`.
- `memory.recordSentMoneyIdea(signature: string, title: string, category: string, detailsJson: string): void`
  - Inserts sent idea into `money_ideas_history`.
- `memory.getMoneyIdeaFallback(count: number): Array<{signature, title, category, detailsJson}>`
  - Returns verified unshown fallback ideas from `money_ideas_bank`.

### `memory.js` ↔ `quiz.js`
- `memory.initQuizBank(questions: Array<{id, topic, question, options, correct_index, explanation}>): void`
  - Idempotently populates `quiz_bank` with questions.
- `memory.getNextQuizQuestion(): {id, topic, question, options, correct_index, explanation}`
  - Selects an unasked question from `quiz_bank` based on `quiz_history`.
  - When all questions have been asked, initiates new cycle and continues without repeat.
- `memory.recordAskedQuiz(id: string): void`
  - Records question `id` into `quiz_history` with timestamp and cycle number.
- `memory.getQuizBankSize(): {total: number, asked: number, cycle: number}`
  - Returns stats on current pool and cycle.

### `index.js` ↔ `quiz.js` / `money_ideas.js`
- Event listeners in `index.js` continue calling:
  - `moneyIdeas.sendMoneyIdea(bot, chatId, intentText)`
  - `quiz.sendDailyQuiz(bot, chatId)`
  - `quiz.handlePollAnswer(bot, pollAnswer)`
  - `quiz.checkSundayReport(bot)`
  - No breaking changes to existing exported function signatures.

## Code Layout
- `/root/smile-bot/index.js` — Main bot entry point and grammY handlers
- `/root/smile-bot/memory.js` — SQLite database abstraction and schema migrations
- `/root/smile-bot/memory.db` — SQLite database file (production live data)
- `/root/smile-bot/money_ideas.js` — Business cases generator & fallback
- `/root/smile-bot/quiz.js` — Quiz bank & question selector
- `/root/smile-bot/tests/` — Automated test scripts
  - `/root/smile-bot/tests/test_money_uniqueness.js`
  - `/root/smile-bot/tests/test_quiz_uniqueness.js`
  - `/root/smile-bot/tests/test_integrity.js`
