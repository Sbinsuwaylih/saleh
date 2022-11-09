function mooncakeSays(message) {
  let mooncake = 'Hello we are: Saleh, asem';


  if ( !message ) {
    return `${mooncake}`;
  }

  return `${mooncake} ${message}`;
}

module.exports.mooncakeSays = mooncakeSays;
