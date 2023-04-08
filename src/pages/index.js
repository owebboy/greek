import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'
import letters from '../lib/greek.json'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [copiedTarget, setCopiedTarget] = useState(null)
  const [timeout, setTimeout] = useState(null)

  return (
    <>
      <Head>
        <title>greek-alphabet</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main} style={inter.style} >
        <h1 className={styles.title}>Greek Alphabet</h1>
        <div className={styles.grid}>
          {letters.map((letter) => (
            <div key={letter.letter} className={`${styles.card} ${copiedTarget?.name === letter.name ? styles.target : ''}`} onClick={async (e) => {
              await navigator.clipboard.writeText(letter.symbol)

              setTimeout(window.clearTimeout(timeout))

              setCopiedTarget(letter)
              setTimeout(window.setTimeout(() => {
                setCopiedTarget(null)
              }, 1000))

            }}>
              <h1 className={styles.symbol}>{letter.symbol}</h1>
              <h3 className={styles.name}>{letter.name}</h3>
            </div>
          ))}
        </div>

      </main>
    </>
  )
}
