import { Episode, EpisodeResponse } from "./types";

const apiURL: string = import.meta.env.VITE_API_URL;

export default {
  // get all episodes
  getAllEpisodes: async () => {
    const gettedEpisodes: EpisodeResponse = (await fetch(
      `${apiURL}/episode`
    ).then((r) => r.json())) as EpisodeResponse;

    const episodes: Episode[] = []
    gettedEpisodes.results.map(({id, name, air_date, episode, characters, url, created}) => {

      const [season, ep] = episode.split("E");
      const s = season.split("S");
      const object : Episode = {
        id,
        name, 
        air_date, 
        episode: {
          season: s.toString(),
          ep: ep
        },
        characters,
        url, 
        created,
      }
      episodes.push(object);
    })

    return episodes;
    // return gettedEpisodes;
  },
};
