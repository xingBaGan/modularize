import { expect } from '@jest/globals'
import { test } from 'picomatch'
import sum from '../src/sum'

test('hello',()=>{
    expect(sum(1,2)).toBe(3);
})