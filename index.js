function mooncakeSays(message) {
  let mooncake = 'Hello we are: Saleh, asem, Nawaf, Aziz';


  if ( !message ) {
    return `${mooncake}`;
  }

  return `${mooncake} ${message}`;
}

module.exports.mooncakeSays = mooncakeSays;
