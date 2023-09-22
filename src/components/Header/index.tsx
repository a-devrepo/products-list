import './styles.css';

export default function Header() {
    return (
        <header>
            <nav className="container">
                <h1>DSFilter</h1>
                <div className='navbar-right'>
                    <div className='menu-items-container'>
                        <div className='menu-item'>6</div>
                        <div>produto(s)</div>
                    </div>

                </div>
            </nav>
        </header>
    )
}