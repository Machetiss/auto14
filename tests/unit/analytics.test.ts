import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { sendEvent, handleContactClick } from '../../lib/analytics';

describe('Analytics', () => {
    // Save original window to restore later if needed, though JSDOM provides a robust one.
    // In JSDOM, window is already defined.

    beforeEach(() => {
        // Reset dataLayer before each test
        window.dataLayer = [];
    });

    it('sendEvent pushes event to dataLayer', () => {
        sendEvent('test_event', { foo: 'bar' });
        expect(window.dataLayer).toHaveLength(1);
        expect(window.dataLayer[0]).toEqual({
            event: 'test_event',
            foo: 'bar',
        });
    });

    it('handleContactClick sends correct event structure', () => {
        handleContactClick('phone', 'header', '+1234567890');
        expect(window.dataLayer).toHaveLength(1);
        expect(window.dataLayer[0]).toEqual({
            event: 'contact_click',
            type: 'phone',
            channel: 'header',
            value: '+1234567890',
        });
    });

    it('does not crash if window is undefined (SSR check)', () => {
        // Temporarily remove window
        const originalWindow = global.window;
        // @ts-ignore
        delete global.window;

        try {
            expect(() => sendEvent('test')).not.toThrow();
        } finally {
            // Restore window
            global.window = originalWindow;
        }
    });
});
