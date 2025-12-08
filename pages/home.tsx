import dynamic from 'next/dynamic';

const Charts = dynamic(() => import('../src/presentation/components/Charts'), {
  ssr: false,
});

export default function HomePage() {
  return <Charts />;
}