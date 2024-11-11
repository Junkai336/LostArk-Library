export interface HomePageMenuPresenterProps {
  anchorElNav: null | HTMLElement;
  searchQuery: string;
  onOpenNavMenu: (event: React.MouseEvent<HTMLElement>) => void;
  onCloseNavMenu: () => void;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSearchSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}