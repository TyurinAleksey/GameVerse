import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import styles from "./GamesList.module.scss"

function GamesList({ games }) {
  return (
    <ul className={styles.list}>
        {games.map(({id, name, gamesImage}) => 
            <li key={id} className={styles.list__item}>
                <Link to={`/games/${id}`}>
                    <img src={gamesImage} alt="name" className={styles.list__img}/>
                    <h3 className={styles.list__title}>{name}</h3>
                </Link>
            </li>
        )}
    </ul>
  )
}

GamesList.propTypes = {
  games: PropTypes.array
}

export default GamesList