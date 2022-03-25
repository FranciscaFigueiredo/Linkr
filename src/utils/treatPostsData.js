export function treatPostsData(rawPosts) {
  const posts = [];
  console.log(rawPosts);

  function deleteKeysFromObject(object) {
    delete object.like_id;
    delete object.like_post_id;
    delete object.like_user_id;
  }

  rawPosts.forEach((rawPost, index) => {
    const { like_id: id, like_user_id: user_id } = rawPost;
    const postsIds = posts.map((post) => post.id);
    const indexOfFoundRawPost = postsIds.indexOf(rawPost.id);

    if (indexOfFoundRawPost === -1) {
      const likes = [];
      rawPost.like_id &&
        likes.push({
          id,
          user_id,
        });

      deleteKeysFromObject(rawPost);

      posts.push({
        ...rawPost,
        likes,
      });
    } else {
      const post = posts[indexOfFoundRawPost];

      post.likes.push({
        id,
        user_id,
      });
    }
  });
  console.log(posts);

  return posts;
}
