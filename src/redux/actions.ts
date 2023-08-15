import axios from 'axios';

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

export interface Actions {
  type?: string;
  payload?: any;
}

// Define las acciones
export const setDarkMode = (darkMode: Boolean) => ({
  type: ActionTypes.SET_DARK_MODE,
  payload: darkMode,
});

export const loadShoes = async (): Promise<any> => {
  try {
    const { data } = await axios.get('http://localhost:3001/products/get?page=0&quantity=12');
    return {
      type: ActionTypes.LOAD_SHOES,
      payload: data.content,
    };
  } catch (error) {
    console.log(error);
  }
};