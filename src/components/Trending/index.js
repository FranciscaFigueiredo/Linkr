import { TrendingContainer, HeaderTrending, BodyTrending } from './style';
import { useEffect, useState } from 'react';
import getHashtagsData from '../../utils/getHashtagsData';
import { useContext } from 'react';
import PostsContext from '../../contexts/PostsContext.js';

export default function Trending({ refresh }) {
  const [listHashtags, setListHashtags] = useState([]);
  const { posts } = useContext(PostsContext);

  useEffect(() => {
    getHashtagsData(setListHashtags);
  }, [refresh, posts]);

  return (
    <TrendingContainer>
      <HeaderTrending>
        <p>trending</p>
      </HeaderTrending>
      <BodyTrending>{listHashtags}</BodyTrending>
    </TrendingContainer>
  );
}
