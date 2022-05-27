import { Container, Wrapper } from "./styles/PostsAdmin.styled";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import axios from "../Api/axios";
import { useSelector } from "react-redux";
import MoonLoader from "react-spinners/MoonLoader";

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
  //######################################

  //useEffects
  useEffect(() => {
    getProducts();
  }, []);
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
    } catch (err) {
      console.log(err);
    }
  };
  const deleteProduct = async (postId) => {
    try {
      const res = await axios.delete(`posts/${postId}`, {
        headers: {
          token: `Bearer ${currentUser?.accessToken}`,
        },
      });
      console.log(res);
    } catch (err) {
      console.log(err);
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
                checkboxSelection
                onSelectionModelChange={handleSelection}
                getRowId={(row) => row._id}
                sx={{
                  fontSize: "15px",
                  fontWeight: "700",
                  textAlign: "center",
                }}
              />
            </div>
            <div>
              <Button
                sx={{
                  bgcolor: "#060b26",
                  padding: "20px 10px",
                  fontWeigh: "800",
                  "&:hover": {
                    bgcolor: "#1a83ff",
                  },
                }}
                variant="contained"
                onClick={handleDelete}
              >
                Delete Selected Rows
              </Button>
            </div>
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
