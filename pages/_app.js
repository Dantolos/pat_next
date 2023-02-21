import Header from "../components/Header.js"
import Footer from "../components/Footer.js"
import Sidebar from "../components/Sidebar.js"
import '../styles/globals.css';
import styles from '../styles/Home.module.css';

export default function App({ Component, pageProps }) {
     return (
          <>
               <Header />
               <main>
                    <Sidebar />

                    <div className="content">
                         <Component {...pageProps} />
                    
                        
                    </div>
               </main>  
               <Footer />
          </>     
     );
 }