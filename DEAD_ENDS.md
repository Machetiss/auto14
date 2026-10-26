# Dead Ends Log

| Iteration | Approach Tried | Why It Failed | Files Touched |
|-----------|---------------|---------------|---------------|
| M1 Iter 1 | Exact string equality checks in SQLite (`signature = ? OR normalized_title = ? OR title = ?`) with `computeJaccardSimilarity` exported but not wired into candidate validation | LLM produces semantic paraphrases of recently sent ideas (e.g. "Услуги авитолога" vs "Авитолог", "диагностики недвижимости" vs "диагностики зданий") which have different SHA-256 signatures but high Jaccard similarity (56-75% >= 55%). Causes test_money_uniqueness.js to fail with exit code 1. | `money_ideas.js`, `memory.js` |
| M1 Iter 1 | Discarding tokens with `w.length <= 2` in canonical token extraction | Drops valid brand abbreviations like `вб` before reaching `BRAND_MAP`, causing signature mismatch for identical concepts. | `money_ideas.js` |
| M1 Iter 1 | Missing homoglyph normalization | Mixed Latin/Cyrillic characters (e.g. Latin 'A' in Cyrillic word) bypass exact signature matching. | `money_ideas.js` |
