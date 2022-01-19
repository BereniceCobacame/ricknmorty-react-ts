import { Episode } from "../../types";

interface Props {
  episodes: Episode[];
}

const EpisodeList = ({ episodes }: Props) => {
  return (
    <>
      <ul>
        {episodes.map(
          ({ id, name, air_date, characters, created, episode, url }) => (
            <li key={id}>
              <p>{name}</p>
              {/* <p>S: {episode.season}</p>
              <p>EP: {episode.ep}</p> */}
            </li>
          )
        )}
      </ul>
    </>
  );
};

export default EpisodeList;
