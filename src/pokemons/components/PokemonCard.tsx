'use client';

import { SimplePokemon } from '@/pokemons';
import { useAppDispatch, useAppSelector } from '@/store';
import { toggleFavorite } from '@/store/slices/pokemons';
import Image from 'next/image';
import Link from 'next/link';
import { IoHeart, IoHeartOutline } from 'react-icons/io5';

interface PokemonCardProps {
  pokemon: SimplePokemon;
}

export const PokemonCard = (props: PokemonCardProps) => {
  const { id, name } = props.pokemon;

  const isFavorite: boolean = useAppSelector(
    (state) => !!state.pokemons.favorites[id],
  );
  const dispatch = useAppDispatch();

  const handleFavorite = () => {
    dispatch(toggleFavorite(props.pokemon));
  };

  return (
    <>
      <div className="mx-auto right-0 mt-2 w-60">
        <div className="bg-white rounded overflow-hidden shadow-lg">
          <div className="flex flex-col items-center justify-center text-center p-6 bg-gray-800 border-b">
            <Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
              width={100}
              height={100}
              alt={name}
            />

            <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">
              {name}
            </p>
            <div className="mt-5">
              <Link
                href={`/dashboard/pokemons/${name}`}
                className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
              >
                Más información
              </Link>
            </div>
          </div>
          <div className="border-b">
            <div
              className="px-4 py-2 hover:bg-gray-100 flex items-center cursor-pointer"
              onClick={handleFavorite}
            >
              <div className="text-red-600">
                {isFavorite ? (
                  <IoHeart size={25} />
                ) : (
                  <IoHeartOutline size={25} />
                )}
              </div>
              <div className="pl-3">
                <p className="text-sm font-medium text-gray-800 leading-none">
                  {isFavorite ? 'es favorito!' : 'Agregar a favoritos'}
                </p>
                <p className="text-xs text-gray-500">
                  click para {isFavorite ? 'quitar de' : 'agregar a'} favoritos
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
