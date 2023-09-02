import React from 'react'
import { SimplePokemon } from '../interfaces/simple-pokemon'
import { PokemonCard } from './PokemonCard'

interface PokemonGridProps {
  pokemons: SimplePokemon[]
}

export const PokemonGrid = (props: PokemonGridProps) => {
  const { pokemons } = props;

  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
      {pokemons.map((pokemon) => <PokemonCard key={pokemon.id} pokemon={pokemon} />)}
    </div>
  )
}
