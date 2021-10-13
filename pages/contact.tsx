import Head from 'next/head'
import Contact from '../components/Contact'
import 'bulma/css/bulma.min.css';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Contact | DERMOT OBRIEN</title>
                <meta name="description" content="Resume" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Contact />
        </div>
    )
}