import './styles.css';
import { useEffect, useState } from 'react';
import { ProductDTO } from '../../models/product';
import FilterCard from '../FilterCard';
import ListCard from '../ListCard';
import * as productService from '../../services/product-service';


type QueryParams = {
    minPrice: number;
    maxPrice: number;
}

export default function ListingBody() {
    4

    const [products, setProducts] = useState<ProductDTO[]>([]);
    const [queryParams, setQueryParams] = useState<QueryParams>(
        {
            minPrice: 0,
            maxPrice: Number.MAX_VALUE
        })

    function handleSearch(minPrice: number, maxPrice: number) {
        setQueryParams({ ...queryParams, minPrice, maxPrice });
    }

    useEffect(() => {
        const list = productService.findByPrice(queryParams.minPrice, queryParams.maxPrice);
        console.log(list);
    }, [queryParams])


    return (
        <main>
            <section className='container'>
                <FilterCard onFilter={handleSearch} />
                <ListCard />
            </section>
        </main>
    )
}
