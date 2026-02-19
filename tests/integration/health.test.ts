import { describe, it, expect } from 'vitest';
import { GET } from '../../app/api/health/route';

describe('Health API', () => {
    it('returns 200 OK and status', async () => {
        const response = await GET();
        const data = await response.json();

        expect(response.status).toBe(200);
        expect(data).toEqual(expect.objectContaining({
            status: 'ok',
            env: expect.any(String), // or 'test' / 'development'
        }));
        expect(data.timestamp).toBeDefined();
    });
});
