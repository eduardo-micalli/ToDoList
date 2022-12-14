import rocketLogo from '../assets/rocket-icon.svg'
import styles from './Header.module.css'

export function Header() {
    return (
        <header className={styles.header}>
            <img src={rocketLogo} />
            <strong>to</strong>
            <strong>do</strong>
        </header>
    );
}