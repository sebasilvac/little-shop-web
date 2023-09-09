import { SimplePokemon } from '@/pokemons';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Favorites {
  [key: string]: SimplePokemon;
}

interface PokemonState {
  favorites: Favorites;
}

const initialState: PokemonState = {
  favorites: {},
};

const pokemonSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload;

      if (state.favorites[pokemon.id]) {
        delete state.favorites[pokemon.id];
        return;
      }

      state.favorites[pokemon.id] = pokemon;
    },
    setFavorites(state, action: PayloadAction<Favorites>) {
      state.favorites = action.payload;
    }
  },
});

export const { toggleFavorite, setFavorites } = pokemonSlice.actions;
export default pokemonSlice.reducer;
