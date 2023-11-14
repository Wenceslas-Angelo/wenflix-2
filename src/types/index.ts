export interface Movies {
  page: number;
  results: Movie[];
  total_page: number;
  total_results: number;
}

export interface Videos {
  results: [
    {
      name: string;
      key: string;
      site: string;
      id: string;
      type: string;
    }
  ];
}

export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  genres: Genre[];
  runtime: number;
  budget: number;
  revenue: number;
  release_date: string;
  homepage: string;
  videos: Videos;
}

export interface Cast {
  id: number;
  character: string;
  profile_path: string;
  name: string;
}

export interface Crew {
  id: number;
  job: string;
  name: string;
  profile_path: string;
  departement: string;
}

export interface Credits {
  id: number;
  cast: Cast[];
  crew: Crew[];
}

export interface Genre {
  id: number;
  name: string;
}

export interface Genres {
  genres: Genre[];
}
