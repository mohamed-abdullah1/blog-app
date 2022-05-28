import {
  ButtonsContainer,
  Container,
  Wrapper,
} from "./styles/PostsAdmin.styled";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import axios from "../Api/axios";
import { useSelector } from "react-redux";
import MoonLoader from "react-spinners/MoonLoader";
import { useNavigate } from "react-router-dom";

const columns = [
  { field: "_id", headerName: "ID", width: 100 },
  { field: "title", headerName: "Title", width: 600 },
  { field: "numberOfLikes", headerName: "Likes", width: 90 },
  { field: "numberOfDisLikes", headerName: "DisLikes", width: 90 },
  { field: "comments", headerName: "NumOfcomments", width: 200 },

  //   { field: "colors", headerName: "Colors", width: 200 },
  //   { field: "price", headerName: "Price", width: 100 },
];

const Products = () => {
  //states and variables
  const [rows, setRows] = useState();
  const [deletedRowsIds, setDeletedRowsIds] = useState([]);
  const { currentUser } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  //######################################

  //handlers
  const handleSelection = (rowsSelected) => {
    setDeletedRowsIds(rowsSelected);
    console.log(rowsSelected);
  };
  const handleDelete = () => {
    deletedRowsIds.forEach((rowId) => {
      deleteProduct(rowId);
    });
  };
  const handleView = () => {
    // console.log("deletedRowsIds", deletedRowsIds);
    deletedRowsIds.length > 0 &&
      navigate(`/post/${deletedRowsIds[0]?._id}`, {
        state: posts.find((post) => post._id === deletedRowsIds[0]),
      });
  };
  const handleEdit = () => {
    deletedRowsIds.length > 0 &&
      navigate(`/makePost`, {
        state: posts.find((post) => post._id === deletedRowsIds[0]),
      });
  };
  //######################################

  //useEffects
  useEffect(() => {
    getProducts();
  }, [loading]);
  //######################################

  //async functions
  const getProducts = async () => {
    try {
      const res = await axios.get(`posts/`, {
        headers: { token: `Bearer ${currentUser.accessToken}` },
      });
      console.log("fetched Data", res.data);
      console.log("example for a product", res.data[0]);
      setRows(
        res.data
          .map((post) => ({
            ...post,
            comments: post?.comments?.length,
          }))
          .reverse()
      );
      res.data.map(async (post) => {
        try {
          const userResponse = await axios.get(`users/find/${post.writer_id}`);
          // console.log("post from trending", { ...post, user: userResponse.data });
          setPosts((prev) => [...prev, { ...post, user: userResponse.data }]);
          return;
        } catch (err) {
          alert(`can't get the user`);
          return;
        }
      });
    } catch (err) {
      console.log(err);
    }
  };
  const deleteProduct = async (postId) => {
    setLoading(true);
    try {
      const res = await axios.delete(`posts/${postId}`, {
        headers: {
          token: `Bearer ${currentUser?.accessToken}`,
        },
      });
      console.log(res);
      setLoading(false);
      alert("deleted successfully");
    } catch (err) {
      console.log(err);
      setLoading(false);
      alert("there is problem in deleting");
    }
  };
  //######################################

  return (
    <>
      {rows ? (
        <Container>
          <Wrapper>
            <h1>Posts</h1>
            <div
              style={{
                height: 1000,
                width: "100%",
                fontSize: "200px",
                fontSize: "50px",
              }}
            >
              <DataGrid
                rows={rows}
                columns={columns}
                pageSize={20}
                rowsPerPageOptions={[10]}
                onSelectionModelChange={handleSelection}
                getRowId={(row) => row._id}
                sx={{
                  fontSize: "15px",
                  fontWeight: "700",
                  textAlign: "center",
                }}
              />
            </div>
            <ButtonsContainer>
              <div>
                <Button
                  sx={{
                    bgcolor: "#060b26",
                    padding: "10px 20px",
                    fontWeigh: "800",
                    "&:hover": {
                      bgcolor: "#f79918",
                    },
                  }}
                  variant="contained"
                  onClick={handleDelete}
                  disabled={loading}
                >
                  Delete
                </Button>
              </div>
              <div>
                <Button
                  sx={{
                    bgcolor: "#060b26",
                    padding: "10px 20px",
                    fontWeigh: "800",
                    "&:hover": {
                      bgcolor: "#f79918",
                    },
                  }}
                  variant="contained"
                  onClick={handleView}
                  disabled={loading}
                >
                  View
                </Button>
              </div>
              <div>
                <Button
                  sx={{
                    bgcolor: "#060b26",
                    padding: "10px 20px",
                    fontWeigh: "800",
                    "&:hover": {
                      bgcolor: "#f79918",
                    },
                  }}
                  variant="contained"
                  disabled={loading}
                  onClick={handleEdit}
                >
                  Edit
                </Button>
              </div>
            </ButtonsContainer>
          </Wrapper>
        </Container>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "1000px",
          }}
        >
          <MoonLoader loading={true} size={30} color="black" />
        </div>
      )}
    </>
  );
};

export default Products;
