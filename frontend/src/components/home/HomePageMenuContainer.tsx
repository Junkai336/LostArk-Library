import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import URL from "../../constants/url";
import HomePageMenuPresenter from "./HomePageMenuPresenter";

function HomePageMenuContainer() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const navigate = useNavigate();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleSearchChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  }, []);

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchQuery) navigate(`${URL.CHARACTER_INFO}?query=${searchQuery}`);
  };

  return (
    <HomePageMenuPresenter
      anchorElNav={anchorElNav}
      searchQuery={searchQuery}
      onOpenNavMenu={handleOpenNavMenu}
      onCloseNavMenu={handleCloseNavMenu}
      onSearchChange={handleSearchChange}
      onSearchSubmit={handleSearchSubmit}
    />
  );
}

export default HomePageMenuContainer;
