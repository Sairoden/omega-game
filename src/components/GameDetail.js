// Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

// Redux
import { useSelector } from "react-redux";

const GameDetail = () => {
  // Data
  const { game, screenshot } = useSelector(state => state.details);

  return (
    <CardShadow>
      <Detail>
        <div className="stats">
          <div className="rating">
            <h3>{game.name}</h3>
            <p>Rating: {game.rating}</p>
          </div>
          <div className="info">
            <h3>Platforms</h3>
            <div className="platforms">
              {game.platforms.map(platform => (
                <h3 key={platform.platform.id}>{platform.platform.name}</h3>
              ))}
            </div>
          </div>
        </div>
        <div className="media">
          <img src={game.background_image} alt={game.name} />
        </div>
        <div className="description">
          <p>{game.description_raw}</p>
        </div>
        <div className="gallery">
          {screenshot.results.map(screen => (
            <img key={screen.id} src={screen.image} alt={game.name}></img>
          ))}
        </div>
      </Detail>
    </CardShadow>
  );
};

const CardShadow = styled(motion.div)`
  background: rgba(0, 0, 0, 0.5);
  left: 0;
  min-height: 100vh;
  overflow-y: scroll;
  position: fixed;
  top: 0;
  width: 100%;

  &::-webkit-scrollbar {
    width: 0.5rem;

    &-thumb {
      background-color: #ff7676;
    }

    &-track {
      background: #fff;
    }
  }
`;

const Detail = styled(motion.div)`
  background: #fff;
  border-radius: 1rem;
  color: #333;
  left: 10%;
  padding: 2rem 20rem;
  position: absolute;
  width: 80%;
`;

export default GameDetail;
