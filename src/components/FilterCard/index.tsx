import './styles.css';

export default function FilterCard() {
    return (
        <div className='card mt20'>
            <form >
                <div>
                    <input className='form-control mb20' type="text" placeholder='Preço mínimo' />
                </div>
                <div>
                    <input className='form-control mb20' type="text" placeholder='Preço máximo' />
                </div>
                <div className='btn'>
                    Filtrar
                </div>
            </form>

        </div>
    )
}