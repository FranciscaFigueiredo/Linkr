import { useParams } from "react-router";

export default function Hashtag(){
  const { hashtag } = useParams();
  return (<h1>{hashtag}</h1>);
}