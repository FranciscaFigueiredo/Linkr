export function treatPostsData(posts) {
  const likes = posts.map((post) => ({
    id: post.like_id,
    post_id: post.like_post_id,
    user_id: post.like_user_id,
  }));

  const uniquePosts = [];
  posts.forEach((post) => {
    if (uniquePosts.map((uniquePost) => uniquePost.id).indexOf(post.id) === -1)
      uniquePosts.push(post);
  });

  uniquePosts.forEach((uniquePost) => {
    uniquePost.likes = [];
    likes.forEach((like) => {
      if (like.post_id === uniquePost.id) uniquePost.likes.push(like);
      delete like.post_id;
    });
  });

  uniquePosts.forEach((uniquePost) => {
    delete uniquePost.like_id;
    delete uniquePost.like_post_id;
    delete uniquePost.like_user_id;
  });

  return uniquePosts;
}
