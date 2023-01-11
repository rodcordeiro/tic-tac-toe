import React from "react";
import { Container } from "./style";

interface ICardProps {
  row: "a" | "b" | ("c" & string);
  column: "a" | "b" | ("c" & string);
  currentUser: "x" | "o" | string;
  blocked: boolean;
  markPoint: (column: "a" | "b" | "c", row: "a" | "b" | "c") => void;
}

const Card: React.FC<ICardProps> = ({
  column,
  row,
  blocked,
  currentUser,
  markPoint,
}) => {
  const [marked, setMarked] = React.useState<boolean>(false);
  const [user, setUser] = React.useState<string>(currentUser);

  const handleClick = React.useCallback(() => {
    if (marked || blocked) return;
    markPoint(column, row);
    setMarked(true);
  }, [blocked, column, markPoint, marked, row]);

  React.useEffect(() => {
    if (!marked) {
      setUser(currentUser);
    }
  }, [currentUser, marked]);

  return (
    <Container
      onClick={handleClick}
      marked={marked}
      blocked={blocked}
      user={user}
    >
      {marked && <p>{user}</p>}
    </Container>
  );
};

export default React.memo(Card);
