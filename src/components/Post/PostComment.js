import ReactHashtag from '@mdnm/react-hashtag';
import { useRef } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EditPostButton from './EditPost/EditPostButton.js';
import EditPost from './EditPost/index.js';
import { Hashtag } from './styles.js';

export default function PostComment({ post, refresh, setRefresh }) {
  const navigate = useNavigate();
  const [edit, setEdit] = useState({
    status: false,
    idPost: null,
  });
  const [comment, setComment] = useState('');

  const commentRef = useRef(null);

  return (
    <>
      <EditPostButton
        post={post}
        edit={edit}
        setEdit={setEdit}
        setComment={setComment}
      />
      {edit.status && edit.idPost === post.id ? (
        <EditPost>
          {comment}
          {setComment}
          {setEdit}
          {post}
          {commentRef}
          {refresh}
          {setRefresh}
        </EditPost>
      ) : (
        post.comment && (
          <span id='comment'>
            <ReactHashtag
              renderHashtag={(hashtagValue) => (
                <Hashtag
                  onClick={() => navigate(`/hashtag/${hashtagValue.substr(1)}`)}
                >
                  {hashtagValue}
                </Hashtag>
              )}
            >
              {post.comment}
            </ReactHashtag>
          </span>
        )
      )}
    </>
  );
}
