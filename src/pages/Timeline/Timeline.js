import { useContext, useEffect, useState } from 'react';
import Header from '../../components/Header/Header.js';
import Posts from '../../components/Posts/';
import Publish from '../../components/Publish/index.js';
import { TimelineContainer, TimelineParent } from './styles.js';
import Trending from '../../components/Trending/index.js';
import DeletePostModal from '../../components/Post/DeletePost/ConfirmationModal.js';
import PostsContext from '../../contexts/PostsContext.js';
import { checkPostsQuantity } from '../../services/linkr.js';

export default function Timeline() {
  const [refresh, setRefresh] = useState(true);

  const { posts, setPosts } = useContext(PostsContext);

  const { quant, setQuant } = useState(0);


  useEffect(() => {
    setInterval(() => {
      checkPostsQuantity()
        .then((res) => {
          if(res.data) {
            setQuant(res.data)
          }
        })
    }, 15000);
  }, [])

  console.log({ quant });

  return (
    <>
      <Header />
      <TimelineContainer>
        <TimelineParent>
          <span id='title'>timeline</span>
          <Publish refresh={refresh} setRefresh={setRefresh} />
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
