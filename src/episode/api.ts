import { EpisodeResponse } from "./types";

const apiURL: string = import.meta.env.VITE_API_URL;

export default {
  // get all episodes
  getAllEpisodes: async (nextUrl: string = `${apiURL}/episode`) => {
    const gettedEpisodes: EpisodeResponse = (await fetch(nextUrl).then((r) =>
      r.json()
    )) as EpisodeResponse;
    return gettedEpisodes;
  },
};
