const { mooncakeSays } = require('./');

test('mooncake knows what to say', () => {
  expect(mooncakeSays('')).toBe('Hello iam: Saleh');
});

test('mooncake is not sure what to say', () => {
  expect(mooncakeSays()).toBe('Hello iam:');
});
