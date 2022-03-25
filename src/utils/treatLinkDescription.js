export default function treatLongString(string) {
  if (string.length > 100) string = string.substring(0, 100) + ' ...';
  return string;
}
