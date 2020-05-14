
import Head from 'next/head'
import Navigation from '../components/navigation'
import Footer from './footer'
import style from '../style/layout.module.css'

const Layout = ({children}) => {
    return(
        <div>
            <Head>
                <title>Next Js | Experiment</title>
            </Head>
            <main className={style.main}>
                <Navigation/>
                {children}
                <Footer/>
            </main>
        </div>
    )
}

export default Layout;