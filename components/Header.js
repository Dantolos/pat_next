import style from "../styles/header.module.css"
import Image from 'next/image'
import Link from 'next/link'


export default function Header(){
     return (
          <header className={style.headercontainer}>
               <Link href="/" className={style.logo}>
                    <Image src="/favicon.svg" alt="logo" width={42} height={42} />
               </Link>
          </header>
     );
}