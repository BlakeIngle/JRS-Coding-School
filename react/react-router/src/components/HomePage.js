import React, { useEffect, useReducer } from 'react';
import HeroCard from './HeroCard';
import HeroDialog from './HeroDialog';
import './heroes.css';
import Search from './Search';
const axios = require('axios');

export default function HomePage() {

    const initialState = {
        heroes: [],
        isModalOpen: false
    }

    const reducer = (state, action) => {
        if (action.type === 'set_heroes') {
            return {
                ...state,
                heroes: action.payload
            }
        }
        if (action.type === 'toggle_modal') {
            return {
                ...state,
                isModalOpen: !state.isModalOpen
            }
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    function getAllHeroes() {
        axios.get('http://localhost:8080/api/supers')
            .then(res => {
                // handle success
                console.log(res);
                var heroes = res.data.heroes;
                // dispatch({ type: "set_heroes", payload: heroes })
            })
            .catch(err => {
                // handle error
                console.error(err);
            });
    }

    function filterHeroes(params) {
        var request = `http://localhost:8080/api/heroes/search`
        request = addQuery(request, params);
        axios.get(request)
            .then(res => {
                dispatch({ type: 'set_heroes', payload: res.data.heroes })
            })
            .catch(err => {
                console.error(err)
            });
    }

    function addQuery(url, params) {
        var keys = Object.keys(params);
        var isQuestionAdded = false;
        for (let i = 0; i < keys.length; i++) {
            if (!params[keys[i]]) {
                continue;
            }
            if (!isQuestionAdded) {
                url += '?'
                isQuestionAdded = true;
            } else {
                url += '&'
            }
            url += `${keys[i]}=${params[keys[i]]}`
        }
        return url;
    }

    useEffect(() => {
        // getAllHeroes();
    }, []);

    return (
        <div>
            <Search liveUpdate={filterHeroes} />
            <div className="heroes-list">
                <div style={{
                    fontSize: '2rem',
                    backgroundColor: '#67fc67'
                }}
                    onClick={() => { dispatch({ type: 'toggle_modal' }) }}>+</div>
                {state.heroes.map(hero =>
                    <HeroCard key={hero.id}
                        {...hero} />
                )}
            </div>
            {state.isModalOpen &&
                <HeroDialog
                    state={state}
                    closeModal={() => {
                        dispatch({ type: 'toggle_modal' });
                    }}
                />}
        </div>
    )
}
