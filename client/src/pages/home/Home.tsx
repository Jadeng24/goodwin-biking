import { useDispatch } from "react-redux";
import { MainCarousel } from "./main-carousel/MainCarousel";
import ShoppingList from "./shopping-list/ShoppingList";
import { setBanners } from "../../redux-store/bannerReducer";
import { useEffect } from "react";

const Home = () => {
  const dispatch = useDispatch();

  async function getBanners() {
    const banners = await fetch(
      "http://localhost:1337/api/banners?populate=image", // TODO: don't use localhost when hosting
      { method: "GET" }
    );
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
