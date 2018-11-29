var translations = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U',
};

function toRna(str) {
  var strSplit = str.split('');
  var newStr = strSplit.map(translate).join('');

  if (str.length !== newStr.length) {
    // Invalid character in the str
    throw Error('Invalid input DNA.');
  } else {
    return newStr;
  }
}

function translate(nucleotide) {
  return translations[nucleotide];
}

export default toRna;
