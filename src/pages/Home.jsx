import Hero from '../components/Hero/Hero.jsx';
import Areas from '../components/Areas/Areas.jsx';
import Partners from '../components/Partners/Partners.jsx';
import History from '../components/History/History.jsx';
import Categories from '../components/Categories/Categories.jsx';
import Sponsors from '../components/Sponsors/Sponsors.jsx';

function Home() {
  return (
    <>
      <Hero />
      {/* <Areas /> */}
      <Categories />
      <History />
      <Partners />
      <Sponsors />
    </>
  );
}

export default Home;
