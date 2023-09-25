import './styles.css';
import { useContext, useEffect, useState } from 'react';
import { ProductDTO } from '../../models/product';
import FilterCard from '../FilterCard';
import ListCard from '../ListCard';
import * as productService from '../../services/product-service';
import { ContextListCount } from '../../utils/context-list';


type QueryParams = {
    minPrice: number;
    maxPrice: number;
}

export default function ListingBody() {


    const { setContextListCount } = useContext(ContextListCount);

    const [products, setProducts] = useState<ProductDTO[]>([]);
    const [queryParams, setQueryParams] = useState<QueryParams>(
        {
            minPrice: 0,
            maxPrice: Number.MAX_VALUE
        })

    function handleSearch(minPrice: number, maxPrice: number) {
        setProducts([]);
        setQueryParams({ ...queryParams, minPrice, maxPrice });
    }

    useEffect(() => {
        const list = productService.findByPrice(queryParams.minPrice, queryParams.maxPrice);
        setContextListCount(list.length);
        setProducts(list);
    }, [queryParams])


    return (
        <main>
            <section className='container'>
                <FilterCard onFilter={handleSearch} />
                <ListCard products={products} />
            </section>
        </main>
    )
}


