import Home from "./containers/Home/home.container";
import { PlayerProvider } from "./contexts/player/player.context";
import { ScoreboardProvider } from "./contexts/scoreboard/scoreboard.context";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <>
      <GlobalStyle />
      <PlayerProvider>
        <ScoreboardProvider>
          <Home />
        </ScoreboardProvider>
      </PlayerProvider>
    </>
  );
}

export default App;
