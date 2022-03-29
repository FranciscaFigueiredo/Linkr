import treatUsername from './treatUsername.js';

export default function treatLikes(post, user) {
  const { username: loggedUsername } = user;
  const likedBy = [];

  if (post.likes.length === 0) return 'No one has liked this post yet';

  post.likes.forEach((like) => {
    const treatedUsername = treatUsername(like.username);
    if (like.username === loggedUsername) likedBy.unshift('You');
    else likedBy.push(treatedUsername);
  });

  if (likedBy.length === 1) return likedBy[0];

  if (likedBy.length === 2) return likedBy.join(' and ');

  const firstTwo = likedBy.splice(0, 2);

  return firstTwo.join(', ') + ` and other ${likedBy.length} people`;
}
