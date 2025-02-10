import styles from "./Header.module.scss"
import Logo from "@assets/Vira.png"
const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__container}>
                <img
                    className={styles.header__logo}
                    src={Logo}
                    alt="Logo"
                />
            </div>
        </header>
    );
}

export default Header;