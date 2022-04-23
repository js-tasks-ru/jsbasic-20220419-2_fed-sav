function ucFirst(str) {
  if (str == '') {
    return str
  } else {
  return `${str[0].toUpperCase()}${str.substr(1, str.length)}`  
  }
}
