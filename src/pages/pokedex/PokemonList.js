import React, { useState } from "react"

import usePokemon from '../../hooks/usePokemonList'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import '../../styles/pokemonList.css'

function PokemonList() {
    const [searchPokemon, setSearchPokemon] = useState({ text: '', itsBeenClean: false })

    const {
        List
    } = usePokemon(searchPokemon.text, searchPokemon.itsBeenClean, handleCleaned)

    function handleChange(e) {
        const { value } = e.target

        setSearchPokemon({ text: value, itsBeenClean: value === '' })
    }

    function handleCleaned() {
        setSearchPokemon(prev => ({ ...prev, itsBeenClean: false }))
    }

    return (
        <>
            <h1>Pokedex</h1>
            <div className='stickyContainer'>
                <div className={`searchBar__wrapper`}>
                    <input
                        className={`searchBar`}
                        type='text'
                        value={searchPokemon.text}
                        onChange={handleChange}
                        placeholder='i.e. combusken or 256'
                    />
                    <FontAwesomeIcon className='searchBar__icon' icon={faSearch} />
                </div>
            </div>

            {List}
        </>
    )
}

export default PokemonList