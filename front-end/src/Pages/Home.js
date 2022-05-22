import Trending from "../Components/Trending";
import {} from "./styles/Home.styled";
import MostPopular from "../Components/MostPopular";
import Catagories from "../Components/Catagories";
import axios from "../Api/axios";
import { useEffect, useState } from "react";
const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("posts/")
      .then((res) => setPosts(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div
      style={{
        marginTop: "100px",
      }}
    >
      <Trending posts={posts} />
      <MostPopular posts={posts} />
      <Catagories posts={posts} />
    </div>
  );
};

export default Home;
