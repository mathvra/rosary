import { MysterySlugType } from '@/app/types';
import RosaryScreen from '../../components/RosaryScreen';

export default async function TercoPage({ params }: { params: Promise<{ 'mystery-slug': MysterySlugType }> }) {
  const { 'mystery-slug': mysteryType } = await params;

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
      <RosaryScreen chosenMysterySlug={mysteryType} />
    </div>
  );
}