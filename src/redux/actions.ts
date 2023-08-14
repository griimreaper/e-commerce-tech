// Define los tipos de acciones
export const ActionTypes = {
  SET_DARK_MODE: 'SET_DARK_MODE',
  LOAD_SHOES: 'LOAD_SHOES',
};

export interface ProductDto {
  id?: string;
  brand?: string;
  model?: string;
  description?: string;
  price?: number;
  size?: number;
  color?: string;
  img?: string | any;
  isActive?: boolean;
}

// Define las acciones
export const setDarkMode = (darkMode: Boolean) => ({
  type: ActionTypes.SET_DARK_MODE,
  payload: darkMode,
});

export const loadShoes = (shoes: ProductDto[]) => ({
  type: ActionTypes.LOAD_SHOES,
  payload: shoes,
});