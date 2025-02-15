function addParser(text) {
  const parser = new DOMParser();
  return parser.parseFromString(text, 'text/html').body.textContent;
}

export default addParser;
