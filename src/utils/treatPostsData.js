export function treatPostsData(rawPosts) {
  const posts = [];
  console.log(rawPosts);
  rawPosts.forEach((rawPost, index) => {
    const { like_id: id, like_user_id: user_id } = rawPost;
    const postsIds = posts.map((post) => post.id);
    const indexOfFoundRawPost = postsIds.indexOf(rawPost.id);

    delete rawPost.like_id;
    delete rawPost.like_post_id;
    delete rawPost.like_user_id;
    if (indexOfFoundRawPost === -1) {
      posts.push({
        ...rawPost,
        likes: [
          {
            id,
            user_id,
          },
        ],
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
