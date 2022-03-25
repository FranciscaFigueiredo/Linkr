export default function treatUsername(username) {
  const findSpaceChar = username.indexOf(' ');

  if (findSpaceChar !== -1) return username.substring(0, findSpaceChar);

  if (username.length > 10) return username.substring(0, 10) + '...';
}
