import { expect, test } from 'vitest'
import { cn } from './utils'

test('cn combines class names', () => {
    expect(cn('foo', 'bar')).toBe('foo bar')
})

test('cn ignores falsy values', () => {
    expect(cn('foo', undefined, null, false, 'bar')).toBe('foo bar')
})

test('cn handles empty input', () => {
    expect(cn()).toBe('')
})
