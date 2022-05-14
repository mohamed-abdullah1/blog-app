import Nav from "./Components/Nav";
import { ThemeProvider } from "styled-components";
import Global from "./Components/styles/Global.styled";
import Home from "./Pages/Home";
import NewsLetter from "./Components/NewsLetter";
import Footer from "./Components/Footer";
import Post from "./Pages/Post";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const theme = {
    colors: {
      secondary: "#f79918",
      whiteGray: "#c7ced6",
      gray: "#9da1a5",
      darkGray: "#888888",
    },
    fonts: "'Poppins', sans-serif",
  };
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
              {/* <Home /> */}
              {/* <Post /> */}
              <Route path="/" element={<Home />} />
              <Route path="post/:postId" element={<Post />} />
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
