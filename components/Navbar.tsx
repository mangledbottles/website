import Link from 'next/link';

/** Top Navbar */
export default function Navbar() {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link href="/">
                        <h2 className="name">DERMOT OBRIEN</h2>
                    </Link>
                </li>

                <li className="push-right">
                    <Link href="/resume">
                        <button>Resume</button>
                    </Link>
                </li>
                <li className="push-right">
                    <Link href="/contact">
                        <button>Contact</button>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}