import Button from "./style";
export default function FollowButtom({ isFollowed, setIsFollowed }){
  return(
    <Button isFollowed={isFollowed}>
      {(isFollowed) ? "Unfollow" : "Follow"}
    </Button>
  );
}