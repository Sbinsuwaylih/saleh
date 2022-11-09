function mooncakeSays(message) {
  let mooncake = 'Hello we ar: Saleh, asem';


  if ( !message ) {
    return `${mooncake}`;
  }

  return `${mooncake} ${message}`;
}

module.exports.mooncakeSays = mooncakeSays;
