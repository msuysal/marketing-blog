import Link from 'next/link';
import styles from './page.module.css';

export default function NotFound() {
    return (
        <div className={styles.container} style={{
            minHeight: '80vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '2rem'
        }}>
            <div style={{ maxWidth: '600px' }}>
                <span style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.8rem',
                    fontWeight: '800',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'var(--accent-text)',
                    backgroundColor: 'var(--accent)',
                    padding: '0.4rem 1rem',
                    marginBottom: '2rem',
                    display: 'inline-block'
                }}>
                    Protocol Error 404
                </span>

                <h1 style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '3rem',
                    marginBottom: '1.5rem',
                    lineHeight: '1.1'
                }}>
                    Requested node not found in the architectural index.
                </h1>

                <p style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '1.1rem',
                    lineHeight: '1.6',
                    color: 'var(--gray-dark)',
                    marginBottom: '3rem'
                }}>
                    The specific path you are seeking does not exist within the current system parameters. It may have been archived, relocated, or the logic of the link has decayed.
                </p>

                <Link href="/" style={{
                    fontFamily: 'var(--font-sans)',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    padding: '1rem 2rem',
                    border: '1px solid var(--foreground)',
                    display: 'inline-block',
                    fontSize: '0.8rem',
                    transition: 'all 0.3s ease'
                }} className="hover:bg-foreground hover:text-background">
                    RETURN TO HOME NODE &rarr;
                </Link>
            </div>
        </div>
    );
}
