import treatUsername from './treatUsername.js';

export default function treatLikes(post) {
  if (post.likes.length === 0) return 'No one has liked this post yet';

  const likedBy = [];

  post.likes.forEach((like) => {
    like.username = treatUsername(like.username);
    if (like.userId === post.userId) likedBy.push('You');
    else likedBy.push(like.username);
  });

  if (likedBy.length === 1 && likedBy[0] === 'You') return 'You';

  if (likedBy.length === 2) return likedBy.join(' and ');

  const firstTwo = likedBy.splice(0, 2);

  return firstTwo.join(', ') + ` and other ${likedBy.length} people`;
}
