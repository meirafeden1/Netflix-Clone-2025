const API_KEY =  process.env.REACT_APP_API_KEY;

const requests = {

afetchIrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
 afetchingNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
 afetchTopratedmovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
 afetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
 afetchComedyMovies: `/discover/movie?api_key=${API_KEY}with_genres=35`,
 afetchDocumentaries: `/discover/movie?api_key=${API_KEY}with_genres=99`,
AfetchTvShow: `tv/popular?api_key=${API_KEY}&language=en-US&page=1`

};
export defualt requests;