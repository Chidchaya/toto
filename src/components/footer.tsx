import React from 'react'
import styles from '@/styles/Home.module.css';
import Image from 'next/image';
export default function footer() {
  return (
    <div>
        <a 
            href="https://vercel.com/new?utm_source=typescript-nextjs-starter"
            target = " blank"
            rel = "noopener noreferrer"
        >
            Power By{` `}
            <span className= {styles.logo}>
                <Image src="/vercel.svg" alt ="Vercel Logo" width={72} height={16}></Image>

            </span>
        </a>
    </div>
  )
}
