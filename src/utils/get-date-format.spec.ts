import { getDateFormat } from './get-date-format'

describe('utils', () => {
  test('Test getDateFormat fn.', () => {
    expect(getDateFormat('2022-05-27')).toBe('May 27 2022')
    expect(getDateFormat('2022-04-26')).toBe('Apr 26 2022')
  })
})
