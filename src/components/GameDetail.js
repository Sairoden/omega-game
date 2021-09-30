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
        <Stats>
          <div className="rating">
            <h3>{game.name}</h3>
            <p>Rating: {game.rating}</p>
          </div>
          <Info>
            <h3>Platforms</h3>
            <Platforms>
              {game.platforms.map(platform => (
                <h3 key={platform.platform.id}>{platform.platform.name}</h3>
              ))}
            </Platforms>
          </Info>
        </Stats>
        <Media>
          <img src={game.background_image} alt={game.name} />
        </Media>
        <Description>
          <p>{game.description_raw}</p>
        </Description>
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
  padding: 2rem 5rem;
  position: absolute;
  width: 80%;

  img {
    width: 100%;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled(motion.div)`
  text-align: center;
`;

const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;

  img {
    margin-left: 3rem;
  }
`;

const Media = styled(motion.div)`
  margin-top: 5rem;

  img {
    width: 100%;
  }
`;

const Description = styled(motion.div)`
  margin: 5rem 0rem;
`;

export default GameDetail;
