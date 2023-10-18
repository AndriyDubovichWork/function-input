function getTags(input: string) {
  const matches = input.match(/"([^"]*")/g);

  if (matches) {
    return matches.map((match) => match.replace(/"/g, ''));
  }
  return [];
}
function removeTag(input: string) {
  if (input[input.length - 1] === '"') {
    return input.split('"')[0];
  }
  return input;
}
function isOperatorWithCaret(str: string) {
  return /^[+\-*/^]$/.test(str);
}
export { getTags, removeTag, isOperatorWithCaret };
