import FilterCard from '../FilterCard';
import ListCard from '../ListCard';
import './styles.css';

export default function ListingBody() {

    function handleSearch(minPrice: number, maxPrice: number) {
        console.log(minPrice, maxPrice);
    }

    return (
        <main>
            <section className='container'>
                <FilterCard onFilter={handleSearch} />
                <ListCard />
            </section>
        </main>
    )
}
