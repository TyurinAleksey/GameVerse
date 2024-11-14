import '../index.scss'
import styles from './UiButton.module.scss';

function UiButton({name, onClick, disabled}) {
    return (
        <>
            <button 
                onClick={onClick}
                disabled={disabled}
                className={styles.button}
            >
                {name}
            </button>
        </>
    )
}


export default UiButton;