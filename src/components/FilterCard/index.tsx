import './styles.css';
import { useState } from 'react';

type Props = {
    onFilter: Function;
}

type FormData = {
    minPrice?: number;
    maxPrice?: number;
}

export default function FilterCard({ onFilter }: Props) {

    const [formData, setFormData] = useState<FormData>({});

    function handleInputChange(event: any) {
        const value = event.target.value;
        const name = event.target.name;
        setFormData({ ...formData, [name]: value })
    }

    function handleSubmit(event: any) {
        event.preventDefault();
        onFilter(formData.minPrice, formData.maxPrice);

    }

    return (
        <div className='card mt20'>
            <form onSubmit={handleSubmit}>
                <div>
                    <input className='form-control mb20' type="text" name="minPrice" value={formData.minPrice || ""} onChange={handleInputChange} placeholder='Preço mínimo' />
                </div>
                <div>
                    <input className='form-control mb20' type="text" name="maxPrice" value={formData.maxPrice || ""} onChange={handleInputChange} placeholder='Preço máximo' />
                </div>
                <button type="submit" className="btn">
                    Filtrar
                </button>
            </form>

        </div>
    )
}