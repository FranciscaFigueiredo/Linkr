import { useEffect, useState } from 'react';
import { LinkSnippet } from '../LinkSnippet/index.js';
import Loader from '../Loader.js';
import { Post, PostContent, PostsContainer, PostSidebar } from './styles.js';
import getPostsData from '../../utils/getPostsData.js';
import ReactTooltip from 'react-tooltip';
import { treatLikes } from '../../utils/treatLikes.js';

export default function Posts({ refresh }) {
  const [posts, setPosts] = useState();

  useEffect(() => {
    getPostsData(setPosts);
  }, [refresh]);

  return posts ? (
    <PostsContainer>
      {posts.length > 0 ? (
        posts.map((post) => {
          return (
            <Post key={post.id}>
              <PostSidebar>
                <img src={post.userPic} alt='user pic' />
                <img src={post.userPic} alt='' data-tip={treatLikes(post)} />
              </PostSidebar>
              <PostContent>
                <span id='name'>{post.username}</span>
                {post.comment && <span id='comment'>{post.comment}</span>}
                <a href={post.url} target='_blank' rel='noreferrer'>
                  <LinkSnippet post={post} />
                </a>
              </PostContent>
            </Post>
          );
        })
      ) : (
        <span id='noPosts'>There are no posts yet</span>
      )}
      <ReactTooltip />
    </PostsContainer>
  ) : (
    <Loader />
  );
}
