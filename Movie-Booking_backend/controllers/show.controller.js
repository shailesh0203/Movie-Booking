import axios from "axios";

export const getNowPlayingMovies = async (req, res) => {
  try {
    const response = await axios.get(
      'https://api.themoviedb.org/3/movie/now_playing',
      {
        headers: {
          Authorization: `Bearer ${process.env.TMDB_API_KEY}`
        }
      }
    );

    const movies = response.data.results;  // FIXED
    res.json({ success: true, movies });
  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};

