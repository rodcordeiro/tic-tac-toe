import React from "react";

import { Container, CardsContainer, CardsRow } from "./styles";
import Card from "./components/card";
import {
  validateVertical,
  validateHorizontal,
  validateDiagonal,
  validateAllMarked,
} from "./utils/functions";

export type IFields = {
  [k in "a" | "b" | "c"]: {
    [k in "a" | "b" | "c"]: {
      marked: boolean;
      player?: string;
    };
  };
};

function App() {
  const [player, setPlayer] = React.useState<"x" | "o">("x");
  const [blocked, setBlocked] = React.useState<boolean>(false);
  const [tied, setTied] = React.useState<boolean>(false);
  const [winner, setWinner] = React.useState<"x" | "o">();

  const [cards, setCards] = React.useState<IFields>({
    a: { a: { marked: false }, b: { marked: false }, c: { marked: false } },
    b: { a: { marked: false }, b: { marked: false }, c: { marked: false } },
    c: { a: { marked: false }, b: { marked: false }, c: { marked: false } },
  });

  const handleCardSelection = React.useCallback(
    (column: "a" | "b" | "c", row: "a" | "b" | "c") => {
      cards[row][column].marked = true;
      cards[row][column].player = player;

      const vertical = validateVertical(cards, player);
      const horizontal = validateHorizontal(cards, player);
      const diagonal = validateDiagonal(cards, player);

      if (vertical || horizontal || diagonal) {
        setWinner(player);
        setBlocked(true);
        return;
      }

      const allmarked = validateAllMarked(cards);
      if (allmarked) {
        setTied(true);
      }
      // console.log({ vertical, horizontal, diagonal });

      setPlayer(player === "x" ? "o" : "x");
    },
    [cards, player]
  );

  return (
    <Container>
      {tied ? (
        <h1>Tied game!!</h1>
      ) : (
        <h1>
          {winner ? "Winner" : "Current player"}: {player.toUpperCase()}
        </h1>
      )}
      <CardsContainer>
        {Object.entries(cards).map((row) => (
          <CardsRow>
            {Object.entries(row[1]).map((card) => (
              <Card
                // @ts-ignore
                column={card[0]}
                // @ts-ignore
                row={row[0]}
                blocked={blocked}
                markPoint={handleCardSelection}
                currentUser={player}
              />
            ))}
          </CardsRow>
        ))}
      </CardsContainer>
      <button
        onClick={() => {
          window.location.reload();
        }}
      >
        Reset
      </button>
    </Container>
  );
}

export default App;
