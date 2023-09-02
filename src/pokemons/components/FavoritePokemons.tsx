'use client';

import { useAppSelector } from '@/store';
import { PokemonGrid } from './PokemonGrid'
import { IoHeartOutline } from 'react-icons/io5';

export const FavoritePokemons = () => {

  // const [pokemon, setPokemon] = useState<SimplePokemon[]>([]);
  const favoritePokemon = useAppSelector(state => Object.values(state.pokemons.favorites));

  // useEffect(() => {
  //   setPokemon(favoritePokemon);
  // }, [favoritePokemon]);

  return (
    <>
        {
          favoritePokemon.length === 0
            ? <NoFavorites />
            : <PokemonGrid pokemons={ favoritePokemon } />
        }    
    </>
  )
}

export const NoFavorites = () => {
  return (
    <div className="flex flex-col h-[50vh] items-center justify-center ">
      <IoHeartOutline size={100} className="text-red-500" />
      <span>No hay favoritos</span>
    </div>
  )
}