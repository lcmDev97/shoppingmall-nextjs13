import styles from './mainBanner.module.css'
import Link from 'next/Link'

export default function MainBanner() {
    return (
        <section className={styles.mainBanner}>
            <h1 className={styles.text}>
                Welcome to ChangMin Mall
            </h1>
        </section>
    )
}