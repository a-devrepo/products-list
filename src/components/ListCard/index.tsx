import { ProductDTO } from '../../models/product';
import './styles.css';

type Props = {
    products: ProductDTO[]
}

export default function ListCard({ products }: Props) {
    return (
        <div className='card mt20'>
            <div className='cards-container'>
                {
                    products && products.map((item) => (
                        <div key={item.id} className='product-card'>
                            <div className='product-name'>
                                {item.name}
                            </div>
                            <div className='product-price'>
                                R$ {(item.price).toFixed(2)}
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}