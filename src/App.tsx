import React from "react";

import { Container, CardsContainer, CardsRow } from "./styles";
import Card from "./components/card";

function App() {
  const [player, setPlayer] = React.useState<"x" | "o">("x");
  const handleCardSelection = React.useCallback(
    (id: number) => {
      console.log({ id, player });
      setPlayer(player === "x" ? "o" : "x");
    },
    [player]
  );
  return (
    <Container>
      <h1>Current player: {player.toUpperCase()}</h1>
      <CardsContainer>
        <CardsRow>
          <Card id={0} markPoint={handleCardSelection} currentUser={player} />
          <Card id={0} markPoint={handleCardSelection} currentUser={player} />
          <Card id={0} markPoint={handleCardSelection} currentUser={player} />
        </CardsRow>
        <CardsRow>
          <Card id={0} markPoint={handleCardSelection} currentUser={player} />
          <Card id={0} markPoint={handleCardSelection} currentUser={player} />
          <Card id={0} markPoint={handleCardSelection} currentUser={player} />
        </CardsRow>
        <CardsRow>
          <Card id={0} markPoint={handleCardSelection} currentUser={player} />
          <Card id={0} markPoint={handleCardSelection} currentUser={player} />
          <Card id={0} markPoint={handleCardSelection} currentUser={player} />
        </CardsRow>
      </CardsContainer>
    </Container>
  );
}

export default App;
