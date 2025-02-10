import styles from "./Header.module.scss"
import Logo from "@assets/Vira.png"
const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.header__container}>
                <img
                    src={Logo}
                    className={styles.header__logo}
                    alt="Vira"
                />
            </nav>
        </header>);
}

export default Header;