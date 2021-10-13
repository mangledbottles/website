import Resume from '../components/Resume';
import Head from 'next/head';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Resume | DERMOT OBRIEN</title>
                <meta name="description" content="Hello, I'm Dermot O'Brien. I'm a fullstack developer with particular interests in security and startups." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Resume />
        </div>
    )
}