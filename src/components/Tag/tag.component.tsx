import { useContext } from "react";
import { PlayerContext } from "../../contexts/player/player.context";
import { TagButton, CrossWrapper, Circle } from "./tag.styles";
import { TagProps } from "./tag.types";

const Cross = () => {
  return (
    <CrossWrapper>
      <div />
      <div />
    </CrossWrapper>
  );
};

const TagMap: { [key: string]: JSX.Element | null } = {
  cross: <Cross />,
  circle: <Circle />,
  empty: null,
};

const Square = (props: TagProps) => {
  const { index, value, onClick } = props;

  const { player } = useContext(PlayerContext);

  const cpuTag = player?.tag === "cross" ? "circle" : "cross";

  return (
    <TagButton onClick={() => onClick(index)}>
      {player?.tag &&
        TagMap[value === 1 ? player?.tag : value === 2 ? cpuTag : "empty"]}
    </TagButton>
  );
};
export default Square;
