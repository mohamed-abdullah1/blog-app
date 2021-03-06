import Nav from "./Components/Nav";
import { ThemeProvider } from "styled-components";
import Global from "./Components/styles/Global.styled";
import Home from "./Pages/Home";
import NewsLetter from "./Components/NewsLetter";
import Footer from "./Components/Footer";
import Post from "./Pages/Post";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MakePost from "./Pages/MakePost";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import NotFound from "./Pages/NotFound";
import Profile from "./Pages/Profile";
import Pay from "./Pages/Pay";
import RequestAuth from "./Helper/RequestAuth";
import { PinnedPosts } from "./Pages/PinnedPosts";
import Contact from "./Pages/Contact";
import RequestAuthAdmin from "./Helper/RequestAuthAdmin";
import Admin from "./Pages/Admin";
import axios from "./Api/axios";
import { useEffect, useState } from "react";
import PostsAdmin from "./Pages/PostsAdmin";
import UsersAdmin from "./Pages/UsersAdmin";
function App() {
  const [categoriesOptions, setCategoriesOptions] = useState();
  const theme = {
    colors: {
      secondary: "#f79918",
      whiteGray: "#c7ced6",
      gray: "#9da1a5",
      darkGray: "#888888",
    },
    fonts: "'Poppins', sans-serif",
  };
  useEffect(() => {
    axios
      .get("category/")
      .then((res) => {
        setCategoriesOptions(res.data.map((item) => item.name));
        console.log(categoriesOptions);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Router>
      <div
        className="App"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          overflowY: "auto",
          overflow: "hidden",
        }}
      >
        <ThemeProvider theme={theme}>
          <Nav />
          <div style={{ maxWidth: "1500px", width: "100%" }}>
            <Global />
            <Routes>
              <Route path="login" element={<Login />} />
              <Route
                path="register"
                element={<Register categoriesOptions={categoriesOptions} />}
              />
              <Route element={<RequestAuth />}>
                <Route
                  path="makePost"
                  element={<MakePost categoriesOptions={categoriesOptions} />}
                />
                <Route path="pinnedPosts/:userId" element={<PinnedPosts />} />
                <Route path="contact" element={<Contact />} />
              </Route>
              <Route element={<RequestAuthAdmin />}>
                <Route path="admin" element={<Admin />} />
                <Route path="allPosts" element={<PostsAdmin />} />
                <Route path="allUsers" element={<UsersAdmin />} />
              </Route>
              <Route path="/" element={<Home />} />
              <Route path="post/:postId" element={<Post />} />
              <Route path="profile/:id" element={<Profile />} />
              <Route path="pay" element={<Pay />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <NewsLetter />
          <Footer />
        </ThemeProvider>
      </div>
    </Router>
  );
}

export default App;
