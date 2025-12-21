import clsx from 'clsx';
import styles from './hamb.module.css';
import { Dispatch, SetStateAction } from 'react';

export default function Hamb({ checked, setChecked }: { setChecked: Dispatch<SetStateAction<boolean>>; checked: boolean }) {
    return (
        <>
            <input
                type="checkbox"
                id="hamb"
                className={styles.checkbox}
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
            />
            <label htmlFor="hamb" className={clsx(styles.toggle, "simpleBtn md:hidden!")}>
                <div className={styles.bars} id={styles.bar1}></div>
                <div className={styles.bars} id={styles.bar2}></div>
                <div className={styles.bars} id={styles.bar3}></div>
            </label>
        </>
    )
}
