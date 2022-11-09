function mooncakeSays(message) {
  let mooncake = 'Hello iam: Saleh';

  if ( !message ) {
    return `${mooncake}`;
  }

  return `${mooncake} ${message}`;
}

module.exports.mooncakeSays = mooncakeSays;
