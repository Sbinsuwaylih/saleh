function mooncakeSays(message) {
  let mooncake = 'Hello iam: Saleh';
  let mooncake2 = "Hello iam: asem"

  if ( !message ) {
    return `${mooncake2}`;
  }

  return `${mooncake} ${mooncake2}`;
}

module.exports.mooncakeSays = mooncakeSays;
