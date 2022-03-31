export function quantityString(comments) {
  let message;
  if (comments.length === 0) message = 'No comments';
  if (comments.length === 1) message = '1 comment';
  message = `${comments.length} comments`;
  return message;
}
