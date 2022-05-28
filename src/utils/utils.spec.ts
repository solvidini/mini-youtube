import { generateClass, getDateFormat } from './utils'

describe('utils', () => {
  test('Test getDateFormat fn.', () => {
    expect(getDateFormat('2022-05-27')).toBe('May 27 2022')
    expect(getDateFormat('2022-04-26')).toBe('Apr 26 2022')
  })

  test('Test generateClass fn.', () => {
    expect(generateClass('testing-class', { isChannel: true })).toBe(
      'testing-class testing-class--channel',
    )
    expect(generateClass('testing-class', { isChannel: true, isPlayer: true })).toBe(
      'testing-class testing-class--channel testing-class--with-player',
    )
  })
})
