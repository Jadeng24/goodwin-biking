import { useDispatch } from "react-redux";
import { MainCarousel } from "./main-carousel/MainCarousel";

import { setBanners } from "../../redux-store/bannerReducer";
import { useEffect } from "react";
import { API_URL } from "../../environment";
import ShoppingList from "../../components/shopping-list/ShoppingList";

const Home = () => {
  const dispatch = useDispatch();

  async function getBanners() {
    const banners = await fetch(`${API_URL}/banners?populate=*`, {
      method: "GET",
    });
    const bannersJson = await banners.json();

    dispatch(setBanners(bannersJson.data));
  }

  useEffect(() => {
    getBanners();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <MainCarousel />
      <ShoppingList />

      {/* To add subscribe to newsletter section, see 2:14:20  */}
    </>
  );
};

export default Home;
