import styles from '../styles/sidebar.module.css';
import Link from "next/link";

export default function Sidebar(){
     return (
          <sidebar className={styles.sidebar}>
               <Link  href="/classes"passhref>
                    <h3>Classes</h3>
               </Link> 
               <Link  href="/races"passhref>
                    <h3>Races</h3>
               </Link> 
          </sidebar>
     );
}