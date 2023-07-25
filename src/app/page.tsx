import Commponente1 from './componente1/page';
import Commponente2 from './componente2/page';
import Commponente3 from './componente3/page';

export default function Home() {
  return (
    <main className="w-full flex flex-col flex-grow justify-center items-center gap-20 mb-10">
    <Commponente1/>
    <Commponente2/>
    <Commponente3/>
    </main>
  );
}
