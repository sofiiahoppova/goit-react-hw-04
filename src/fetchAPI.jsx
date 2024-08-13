import axios from "axios";

const fetchPhotos = async (userRequest, pageNumber = 1) => {
  const params = {
    query: userRequest,
    page: pageNumber,
    orientation: "landscape",
    per_page: 20,
  };
  const { data } = await axios.get(
    "https://api.unsplash.com/search/photos?client_id=A7YRUc57iXs06cE1X3dTKf3BBSG-taztQvX54TDLNgI",
    {
      params,
      headers: {
        "Accept-Version": "v1",
      },
    }
  );
  return data;
};

export default fetchPhotos;
