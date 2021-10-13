import Link from 'next/link';
import { mainBody } from "../editable/config";

/** Top Navbar */
export default function Navbar() {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link href="/">
                        <h2 className="name">{`<${mainBody.firstName} />`}</h2>
                    </Link>
                </li>

                <li className="right">
                    <Link href="/resume">
                        <button>Resume</button>
                    </Link>
                </li>
                <li className="right">
                    <Link href="/contact">
                        <button>Contact</button>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}