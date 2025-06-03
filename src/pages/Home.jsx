import React, { useRef, useState } from "react";
import Header from "../component/Header/Header";
import ExploreMenu from "../component/ExploreMenu/ExploreMenu";
import AppDownload from "../component/AppDownload/AppDownload";
import FoodDisplay from "../component/FoodDisplay/FoodDisplay";

const Home = () => {
  const menuRef = useRef(null);
  const [category, setCategory] = useState("All");
  const scrollToMenu = () => {
    menuRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Header onViewMenuClick={scrollToMenu} />
      <ExploreMenu
        ref={menuRef}
        category={category}
        setCategory={setCategory}
      />
      <FoodDisplay category={category} />
      <AppDownload />
    </>
  );
};

export default Home;
