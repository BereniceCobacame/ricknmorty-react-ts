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
              <p>{episode}</p>
              {/* <p>{air_date}</p>
                <p>{episode}</p> */}
            </li>
          )
        )}
      </ul>
    </>
  );
};

export default EpisodeList;
