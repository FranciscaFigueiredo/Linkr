export function treatPostsData(rawPosts) {
  const posts = [];

  function deleteKeysFromObject(object) {
    delete object.likeId;
    delete object.likeUserId;
    delete object.likeUsername;
  }

  rawPosts.forEach((rawPost) => {
    const { likeId: id, likeUserId: userId, likeUsername: username } = rawPost;
    const postsIds = posts.map((post) => post.id);
    const indexOfFoundRawPost = postsIds.indexOf(rawPost.id);

    if (indexOfFoundRawPost === -1) {
      const likes = [];
      rawPost.likeId &&
        likes.push({
          id,
          userId,
          username,
        });

      deleteKeysFromObject(rawPost);

      posts.push({
        ...rawPost,
        likes: [...likes],
      });
    } else {
      const post = posts[indexOfFoundRawPost];
      if (userId && post.likes.find((like) => like.id === id) === undefined) post.likes.push({
        id,
        userId,
        username,
      });
    }
  });

  return posts;
}
