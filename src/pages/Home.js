import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import GameDetail from "../components/GameDetail";
import { loadGames } from "../actions/gamesAction";

// Components
import Game from "../components/Game";
import { fadeIn } from "../animations";

// Styling and Animation
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";

const Home = () => {
  // Get the current location
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  // Get that data back
  const { popular, upcoming, newGames, searched } = useSelector(
    state => state.games
  );

  return (
    <GameList variants={fadeIn} initial="hidden" animate="show">
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {pathId && <GameDetail pathId={pathId}></GameDetail>}{" "}
        </AnimatePresence>
        {searched.length ? (
          <div class="searched">
            <h2>Searched Games</h2>
            <Games>
              {searched.map(game => (
                <Game game={game} key={game.id}></Game>
              ))}
            </Games>
          </div>
        ) : (
          ""
        )}

        <h2>Upcoming Games</h2>
        <Games>
          {upcoming.map(game => (
            <Game game={game} key={game.id}></Game>
          ))}
        </Games>

        <h2>Popular Games</h2>
        <Games>
          {popular.map(game => (
            <Game game={game} key={game.id}></Game>
          ))}
        </Games>

        <h2>New Games</h2>
        <Games>
          {newGames.map(game => (
            <Game game={game} key={game.id}></Game>
          ))}
        </Games>
      </AnimateSharedLayout>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0rem 5rem;

  h2 {
    padding: 5rem 0rem;
  }
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;
