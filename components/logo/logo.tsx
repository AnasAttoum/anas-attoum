import styles from './logo.module.css';

export default function Logo() {
    return (
        <div className={styles.containerLogo}>
            <div className={styles.logo}>
                <div className={styles.left}>
                    <div className={styles.mid}></div>
                </div>
                <div className={styles.right}>Anas Attoum</div>
            </div>
        </div>
    );
}