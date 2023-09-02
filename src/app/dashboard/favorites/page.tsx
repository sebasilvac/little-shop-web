import { Metadata } from 'next';
import { FavoritePokemons } from '@/pokemons';

export const metadata:Metadata = {
  title: 'Favoritos',
  description: 'listado de favoritos',
};

export default async function PokemonPage() {
  return (
    <div className="flex flex-col p-5">
      <span className="text-5xl my-2 mb-10">
        Pokemons favoritos <small className='text-blue-500'>global state</small>
      </span>
      <FavoritePokemons />
    </div>
  );
}
