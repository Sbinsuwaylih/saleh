const { mooncakeSays } = require('./');

test('mooncake knows what to say', () => {
  expect(mooncakeSays(' ')).toBe('Hello iam:');
});

test('mooncake is not sure what to say', () => {
  expect(mooncakeSays()).toBe('Hello iam:');
});
