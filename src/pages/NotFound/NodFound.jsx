import styles from './NotFound.module.scss';
import img from '@pages/NotFound/img/NotFound.png'

function NotFound() {
    return (
        <div className={styles.content}>
            <img src={img} alt="" />
        </div>
    )
}

export default NotFound;