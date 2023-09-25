import { useContext } from 'react';
import './styles.css';
import { ContextListCount } from '../../utils/context-list';

export default function Header() {

    const { contextListCount } = useContext(ContextListCount)

    return (
        <header>
            <nav className="container">
                <h1>DSFilter</h1>
                <div className='navbar-right'>
                    <div className='menu-items-container'>
                        {
                            contextListCount > 0 &&
                            <>
                                <div className='menu-item'>{contextListCount}</div>
                                <div>produto(s)</div>
                            </>
                        }

                    </div>

                </div>
            </nav>
        </header>
    )
}