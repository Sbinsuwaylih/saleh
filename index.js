function mooncakeSays(message) {
  let mooncake = '(Hello iam : Saleh)';

  if ( !message ) {
    return `${mooncake} chookity?`;
  }

  return `${mooncake} ${message}`;
}

module.exports.mooncakeSays = mooncakeSays;
