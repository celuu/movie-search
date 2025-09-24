export const getMovies = async (search) => {
  let result = null;
  try {
    if (!search) {
      result = await fetch(
        "http://www.omdbapi.com/?t=the+parent+trap=apikey=1e4a7c9b"
      );
    } else {
      result = await fetch(
        `http://www.omdbapi.com/?s=${search}&apikey=1e4a7c9b`
      );
    }

    const data = await result.json();
    return data;
  } catch (e) {
    console.error(e);
  }

}