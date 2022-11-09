function mooncakeSays(message) {
  let mooncake = 'Hello iam:';

  if ( !message ) {
    return `${mooncake}`;
  }

  return `${mooncake} ${message}`;
}

module.exports.mooncakeSays = mooncakeSays;
