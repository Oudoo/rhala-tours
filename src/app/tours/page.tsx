import { getTourPackages } from '@/actions/tours';
import ToursClient from './ToursClient';

export default async function ToursPage() {
    const allTours = await getTourPackages();
    return <ToursClient allTours={allTours} />;
}
