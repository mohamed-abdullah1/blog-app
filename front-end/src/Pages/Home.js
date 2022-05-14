import Trending from "../Components/Trending";
import {} from "./styles/Home.styled";
import MostPopular from "../Components/MostPopular";
import Catagories from "../Components/Catagories";
const Home = () => {
  return (
    <div
      style={{
        marginTop: "100px",
      }}
    >
      <Trending />
      <MostPopular />
      <Catagories />
    </div>
  );
};

export default Home;
