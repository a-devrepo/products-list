import FilterCard from '../FilterCard';
import ListCard from '../ListCard';
import './styles.css';

export default function ListingBody() {
    return (
        <main>
            <section className='container'>
                <FilterCard />
                <ListCard />
            </section>
        </main>
    )
}
