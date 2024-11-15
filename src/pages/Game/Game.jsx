import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { getApiResourse } from '@utils/api'
import { withErrorApi } from '@hoc-helpers/withErrorApi'
import { API_GAME_ID, MY_API_KEY } from '@constants/api';
import {dateFormated} from '@services/dateFormated';
import GameLinkBack from '@components/GameLinkBack';
import iconStar from './img/stars.png'

import styles from './Game.module.scss';

function Game({setErrorApi}) {
    const {id} = useParams()
    const [GameInfo, setGameInfo] = useState(null);
    const [minimum, setMinimum] = useState(null);
    const [genres, setGenres] = useState(null);
    const [date, setDate] = useState(null);

    useEffect(() => {
        (async () => {
            const data = await getApiResourse(API_GAME_ID + `/${id}` + MY_API_KEY);
            console.log(data)

            if (data) {
                setGameInfo(data)
                setGenres(data.genres)
                setDate(dateFormated(data.released))
                setErrorApi(false)
            } else {
                setErrorApi(true)
            }
        })();
    }, [])

    return (
        <>
            {GameInfo && (
                <div className={styles.container}>
                    <GameLinkBack/>
                    <div className={styles.box}>
                        <div className={styles.image}>
                            <img className={styles.image__back} src={GameInfo.background_image_additional} alt="" />
                        </div>
                        <div className={styles.game__discription}>
                            <div className={styles.game__poster}>
                                <img className={styles.image__name} src={GameInfo.background_image} alt="" />
                                <button className={styles.game__btn} >Добавить в подборку</button>
                            </div>
                            <div className={styles.game__body}>
                                <h2 className={styles.game__name}>{GameInfo.name}</h2>
                                {genres && <div className={styles.game__genres}>
                                    {genres.map(genr => (
                                        <a href="#" key={genr.id}>{genr.name}</a>
                                    ))}
                                </div>}
                                <div className={styles.game__info}>Рейтинг: <span>{GameInfo.rating} <img src={iconStar} alt="" /></span></div>
                                <div className={styles.game__info}>Дата выхода: <span>{date}</span></div>
                                {GameInfo.publishers && <div  className={styles.game__info}>Создатели: {GameInfo.publishers.map(publisher => (
                                    <span className={styles.game__info_dop} key={publisher.id}>{publisher.name}</span>
                                ))}</div>}
                                {GameInfo.esrb_rating && <div className={styles.game__info}>Возрастные ограничения: <span>{GameInfo.esrb_rating.name}</span></div>}
                                {GameInfo.platforms && <div  className={styles.game__info}>Игровые платформы: {GameInfo.platforms.map(elem => (
                                    <span className={styles.game__info_dop} key={elem.platform.id}>{elem.platform.name}</span>
                                ))}</div>}
                                <p className={styles.game__text}>{GameInfo.description_raw}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}


export default withErrorApi(Game);