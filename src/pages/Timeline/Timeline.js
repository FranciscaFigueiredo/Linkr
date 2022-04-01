import { useContext, useEffect, useState } from 'react';
import Header from '../../components/Header/Header.js';
import Posts from '../../components/Posts/';
import Publish from '../../components/Publish/index.js';
import { ButtonRefresh, TimelineContainer, TimelineParent } from './styles.js';
import Trending from '../../components/Trending/index.js';
import DeletePostModal from '../../components/Post/DeletePost/ConfirmationModal.js';
import PostsContext from '../../contexts/PostsContext.js';
import { checkPostsQuantity } from '../../services/linkr.js';
import { BiRefresh } from 'react-icons/bi'
import getPostsData from '../../utils/getPostsData.js';
import useInterval from 'use-interval';

export default function Timeline() {
  const [refresh, setRefresh] = useState(true);

  const { token } = JSON.parse(sessionStorage.getItem('user'));

  const { posts, setPosts } = useContext(PostsContext);

  const [quant, setQuant] = useState(null);

  useInterval(() => {
    checkPostsQuantity({ token })
      .then((res) => {
        if(res.data) {
          setQuant(res.data.count)
        }
      })
  }, 15000);

  return (
    <>
      <Header />
      <TimelineContainer>
        <TimelineParent>
          <div id='titleContainer'>
            <span id='title'>timeline</span>
          </div>
          <Publish refresh={refresh} setRefresh={setRefresh} />
          {
            quant > posts.length ?
              <ButtonRefresh onClick={() => getPostsData(setPosts, token)}>
                {
                  (quant - posts.length) === 1 ?
                    `1 new post, load more!`
                  : `${quant - posts.length} new posts, load more!`
                }
                <BiRefresh
                  fontSize='20px'
                  lineHeigth='20px'
                  fontWeight='700'
                />
              </ButtonRefresh>
            : ''
          }
          <Posts refresh={refresh} setRefresh={setRefresh} />
        </TimelineParent>
        <div>
          <Trending refresh={refresh} />
        </div>
        <DeletePostModal />
      </TimelineContainer>
    </>
  );
}
