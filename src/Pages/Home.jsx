import { IoIosArrowRoundForward } from "react-icons/io";

const Home = () => {
  return (
    <div style={{ paddingTop: '10rem',backgroundColor:'white' }}>
      <div>
        <p>INTRODUCING ZARIFA</p>
        <h2>Zarifa means &apos;Elegant&apos; in Arabic Language.</h2>
        <p>sustainable clothing pieces helps protect our globe</p>
        <button className='btn'>SHOP NOW <IoIosArrowRoundForward/></button>
      </div>
      <div>2</div>
    </div>
  );
};

export default Home;
