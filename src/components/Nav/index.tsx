import Link from 'next/link';

const Nav: React.FC = () => {
    return (
        <nav className="nav">
            <ul className="nav-list">
                <li className="nav-item">
                    <Link href="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link href="/about">About</Link>
                </li>
                <li className="nav-item">
                    <Link href="/services">Services</Link>
                </li>
                <li className="nav-item">
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;