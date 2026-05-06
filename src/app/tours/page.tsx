import ToursClient from './ToursClient';
import { ALL_TOURS } from '@/data/toursData';

export default function ToursPage() {
    return <ToursClient allTours={ALL_TOURS} />;
}
