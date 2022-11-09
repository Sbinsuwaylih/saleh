const { mooncakeSays } = require('./');

test('mooncake knows what to say', () => {
  expect(mooncakeSays('')).toBe('Hello we are: Saleh, asem, Nawaf, Aziz');
});

test('mooncake is not sure what to say', () => {
  expect(mooncakeSays()).toBe('Hello we are: Saleh, asem, Nawaf, Aziz');
});
