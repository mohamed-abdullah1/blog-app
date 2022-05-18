import {
  SearchContainer,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  CloseIcon,
  SearchResults,
  LoadingContainer,
  Nothing,
  SearchPost,
  SearchPosts,
} from "./styles/Search.styled";
import { IoSearchOutline } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import { useEffect, useState } from "react";
import MoonLoader from "react-spinners/MoonLoader";
import { useClickOutside } from "react-click-outside-hook";
// import useFetch from "./customHooks/useFetch";
import { useNavigate } from "react-router-dom";
// import { Rating } from "@mui/material";
import axios from "../Api/axios";
export const Search = () => {
  const [isExpand, setIsExpand] = useState(false);
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState();
  const [ref, isClicked] = useClickOutside();
  const [query, setQuery] = useState("");
  const [filterPosts, setfilterPosts] = useState();

  const navigate = useNavigate();
  const variants = {
    expand: {
      height: "300px",
    },
    collapse: {
      height: "35px",
    },
  };

  //functions
  const expandAction = () => {
    setIsExpand(true);
  };
  const collapseAction = () => {
    setIsExpand(false);
  };
  useEffect(() => {
    if (isClicked) collapseAction();
  }, [isClicked]);
  useEffect(() => {
    setLoading(true);
    axios
      .get("/posts/")
      .then((res) => setPosts(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);
  useEffect(() => {
    setfilterPosts(
      posts?.filter((item) =>
        item.title.toUpperCase().includes(query.toUpperCase())
      )
    );
  }, [query]);
  return (
    <>
      <SearchContainer
        ref={ref}
        variants={variants}
        animate={isExpand ? "expand" : "collapse"}
      >
        <SearchWrapper>
          <SearchIcon>
            <IoSearchOutline />
          </SearchIcon>

          <SearchInput
            placeholder="Search for any Post"
            onFocus={expandAction}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <CloseIcon>
            {isExpand && <AiOutlineClose onClick={collapseAction} />}
          </CloseIcon>
        </SearchWrapper>
        {isExpand && loading && (
          <SearchResults>
            <LoadingContainer>
              <MoonLoader loading={loading} size={27} color="black" />
            </LoadingContainer>
          </SearchResults>
        )}
        {isExpand && !loading && (
          <SearchResults>
            <SearchPosts>
              {filterPosts?.length > 0 ? (
                filterPosts?.map((item) => (
                  <SearchPost
                    onClick={() =>
                      navigate(`/post/${item.id}`, { state: item.id })
                    }
                    key={item.id}
                  >
                    <p>
                      <span>{item.title}</span> <br />
                    </p>
                    <div>
                      <img src={item.imgUrl} />
                    </div>
                  </SearchPost>
                ))
              ) : (
                <LoadingContainer>
                  <MoonLoader loading={loading} size={27} color="black" />
                </LoadingContainer>
              )}
            </SearchPosts>
          </SearchResults>
        )}
      </SearchContainer>
    </>
  );
};
export default Search;
