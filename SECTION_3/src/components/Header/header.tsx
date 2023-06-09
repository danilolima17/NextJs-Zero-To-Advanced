import Link from 'next/link'
import styles from './styles.module.scss'
import { useRouter } from 'next/router'
import ActiveLink from '../ActiveLink'

export default function Header() {
    const { asPath } = useRouter()

    return (
        <header className={styles.container}>
            <div className={styles.content}>
                <img src="/logo.svg" alt="DevNews!" />
                <nav>
                    <ActiveLink href={'/'} activeClassName={styles.active}>
                        <p>Home</p>
                    </ActiveLink>
                    <ActiveLink href={'posts'} activeClassName={styles.active}>
                        <p>Posts</p>
                    </ActiveLink>
                </nav>
            </div>
        </header>
    )
}
