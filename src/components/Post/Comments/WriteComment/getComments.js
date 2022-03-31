import { getPostComments } from '../../../../services/linkr.js';

export default function getComments(post, setComments) {
  const getComments = async () => {
    const { data: anything } = await getPostComments(post.id);
    setComments([...anything]);
  };
  getComments();
}
