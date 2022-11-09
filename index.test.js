const { mooncakeSays } = require('./');

test('mooncake knows what to say', () => {
  expect(mooncakeSays('')).toBe('Hello we are: Saleh, asem, Nawaf');
});

test('mooncake is not sure what to say', () => {
  expect(mooncakeSays()).toBe('Hello we are: Saleh, asem, Nawaf');
});
