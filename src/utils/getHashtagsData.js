import { toastError } from '../components/toasts.js';
import { getHashtag } from "../services/linkr";
import { Link } from "react-router-dom";

export default function getHashtagsData(setListHashtags) {
  getHashtag()
    .then((answer)=>{
      const list = answer.data.map((data)=>
        <Link to={'/hashtag/'+data.name}>
          <p># {data.name}</p>
        </Link>
      );
      setListHashtags(list);
    })
    .catch((error)=>{
          console.log(error);
          toastError(
            'An error occured while trying to fetch the hashtags, please refresh the page'
          );
    });    
}