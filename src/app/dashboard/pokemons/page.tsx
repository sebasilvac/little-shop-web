import { PokemonGrid, PokemonResponse, SimplePokemon } from '@/pokemons';
import { Metadata } from 'next';

export const metadata:Metadata = {
  title: 'Pokemon List',
  description: 'list of pokemons',
};

const getPokemons = async (
  limit = 20,
  offset = 0,
): Promise<SimplePokemon[]> => {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`,
  );
  const data: PokemonResponse = await res.json();
  return data.results.map((pokemon) => ({
    id: pokemon.url.split('/').at(-2)!,
    name: pokemon.name,
  }));
};

export default async function PokemonPage() {
  const pokemons = await getPokemons(151);
  return (
    <div className="flex flex-col p-5">
      <span className="text-5xl my-2 mb-10">
        Listado de pokemons <small className='text-blue-500'>estático</small>
      </span>
      <PokemonGrid pokemons={pokemons} />
    </div>
  );
}
