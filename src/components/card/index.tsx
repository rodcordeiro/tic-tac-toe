import React from "react";
import { Container } from "./style";

interface ICardProps {
  id: number;
  currentUser: string;
  markPoint: (id: number) => void;
}

const Card: React.FC<ICardProps> = ({ id, currentUser, markPoint }) => {
  const [marked, setMarked] = React.useState<boolean>(false);
  const [user, setUser] = React.useState<string>(currentUser);
  const handleClick = React.useCallback(() => {
    if (marked) return;
    markPoint(id);
    setMarked(true);
  }, [id, markPoint, marked]);

  React.useEffect(() => {
    if (!marked) {
      setUser(currentUser);
    }
  }, [currentUser, marked]);
  return (
    <Container onClick={handleClick} marked={marked} user={user}></Container>
  );
};

export default React.memo(Card);
