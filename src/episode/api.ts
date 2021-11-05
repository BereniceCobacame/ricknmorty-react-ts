import { EpisodeResponse } from "./types";

const apiURL: string = import.meta.env.VITE_API_URL;

export default {
  // get all episodes
  getAllEpisodes: async () => {
    const gettedEpisodes: EpisodeResponse = (await fetch(
      `${apiURL}/episode`
    ).then((r) => r.json())) as EpisodeResponse;
    return gettedEpisodes;
  },
};
