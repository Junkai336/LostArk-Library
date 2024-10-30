import React from "react";
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Button, MenuItem, InputBase } from '@mui/material';
import { Menu as MenuIcon, Adb as AdbIcon, Search as SearchIcon } from '@mui/icons-material';
import { styled, alpha } from '@mui/material/styles';
import { Outlet, useNavigate } from "react-router-dom";

const pages = ['경매장', '도서관', '컨텐츠', '통계', '일정관리', '모집', '커뮤니티'];

interface HomePageMenuPresenterProps {
  anchorElNav: null | HTMLElement;
  searchQuery: string;
  onOpenNavMenu: (event: React.MouseEvent<HTMLElement>) => void;
  onCloseNavMenu: () => void;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSearchSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '30ch',
      '&:focus': {
        width: '50ch',
      },
    },
  },
}));

function HomePageMenuPresenter({
  anchorElNav,
  searchQuery,
  onOpenNavMenu,
  onCloseNavMenu,
  onSearchChange,
  onSearchSubmit,
}: HomePageMenuPresenterProps) {
  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>

            <Box component="img" sx={{ display: { xs: 'none', md: 'flex' }, mr: 2, height: 40 }} alt="로고" src="./favicon.png" />

            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'Noto-sans',
                fontWeight: 700,
                letterSpacing: '.1rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              LostArk Library
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={onOpenNavMenu} color="inherit">
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                keepMounted
                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                open={Boolean(anchorElNav)}
                onClose={onCloseNavMenu}
                sx={{ display: { xs: 'block', md: 'none' } }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={onCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'Noto-sans-kr',
                fontWeight: 700,
                letterSpacing: '.1rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              LostArk Library
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button key={page} onClick={onCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
                  {page}
                </Button>
              ))}
            </Box>

            <Box component="form" onSubmit={onSearchSubmit} sx={{ display: 'flex' }}>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="검색할 캐릭터명을 입력하세요."
                  inputProps={{ 'aria-label': 'search' }}
                  value={searchQuery}
                  onChange={onSearchChange}
                />
              </Search>
            </Box>

          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </>
  );
}

export default HomePageMenuPresenter;
