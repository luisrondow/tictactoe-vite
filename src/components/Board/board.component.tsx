import { Tag } from "../Tag";
import {
  Container,
  BoardLinesWrapper,
  BoardLine,
  SquareBox,
  BoardWrapper,
} from "./board.styles";
import { BoardProps } from "./board.types";

const BOARD_LINES_OBJECT = {
  vertical: 2,
  horizontal: 2,
};

const renderBoardLines = () => {
  return Object.keys(BOARD_LINES_OBJECT).map((key) => {
    return (
      <BoardLinesWrapper position={key}>
        {Array.from(
          Array(BOARD_LINES_OBJECT[key as keyof typeof BOARD_LINES_OBJECT])
        ).map((_, index) => {
          return <BoardLine key={index} position={key} />;
        })}
      </BoardLinesWrapper>
    );
  });
};

const Board = (props: BoardProps) => {
  const { board, onClick } = props;
  return (
    <Container>
      <SquareBox>
        {renderBoardLines()}
        <BoardWrapper>
          {board.map((tag, index) => (
            <Tag
              key={index}
              index={index}
              value={tag}
              onClick={() => onClick(index)}
            />
          ))}
        </BoardWrapper>
      </SquareBox>
    </Container>
  );
};

export default Board;
