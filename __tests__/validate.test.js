const validateEventData = require('../validateEvent.js');

describe('validateEventData', () => {
  test('fails without title', () => {
    const result = validateEventData({ start: new Date(), end: new Date() });
    expect(result.valid).toBe(false);
  });

  test('fails without start/end', () => {
    const result = validateEventData({ title: 'x' });
    expect(result.valid).toBe(false);
  });

  test('passes with required fields', () => {
    const result = validateEventData({
      title: 'x',
      start: new Date(),
      end: new Date(),
    });
    expect(result.valid).toBe(true);
  });
});
