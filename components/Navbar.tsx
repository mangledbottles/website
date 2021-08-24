import Link from 'next/link';

/** Top Navbar */
export default function Navbar() {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link href="/">
                        <button>Home</button>
                    </Link>
                </li>

                <li>
                    <Link href="/resume">
                        <button>Resume</button>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}