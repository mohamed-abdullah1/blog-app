import { Container, Wrapper } from "./styles/UsersAdmin.styled";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import axios from "../Api/axios";
import { useSelector } from "react-redux";
import MoonLoader from "react-spinners/MoonLoader";

const columns = [
  { field: "_id", headerName: "ID", width: 100 },
  { field: "username", headerName: "Name", width: 150 },
  { field: "email", headerName: "Email", width: 200 },
  { field: "credential", headerName: "Credential", width: 100 },
  { field: "job", headerName: "Job", width: 200 },
  { field: "interests", headerName: "interests", width: 300 },
];

const Users = () => {
  //variables
  const [rows, setRows] = useState();
  const [deletedRowsIds, setDeletedRowsIds] = useState([]);
  const { accessToken } = useSelector((state) => state.user.currentUser);
  const [response, setResponse] = useState({ done: false });
  //handlers
  const handleSelection = (rowsSelected) => {
    setDeletedRowsIds(rowsSelected);
    console.log(rowsSelected);
  };
  const handleDelete = () => {
    deletedRowsIds.forEach((rowId) => {
      deleteUser(rowId);
    });
  };
  //async functions
  const getUsers = async () => {
    try {
      const res = await axios.get("users/", {
        headers: {
          token: `Bearer ${accessToken}`,
        },
      });
      console.log("fetched Data", res.data);
      setRows(
        res.data
          .map((user) => ({
            ...user,
            credential: user?.credential === 0 ? "regular" : "premier",
            interests: user?.interests?.slice(0, 3).join(" - "),
          }))
          .filter((user) => user.credentials !== 2)
          .reverse()
      );
    } catch (err) {
      console.log(err);
    }
  };
  const deleteUser = async (userId) => {
    try {
      const res = await axios.delete(`users/${userId}`, {
        headers: {
          token: `Bearer ${accessToken}`,
        },
      });
      console.log(res);
      setResponse({ done: true });
    } catch (err) {
      console.log(err);
      setResponse({ done: false });
    }
  };
  //useEffects
  useEffect(() => {
    getUsers();
    console.log(response);
  }, [response]);
  return (
    <>
      {rows ? (
        <Container>
          <Wrapper>
            <h1>Users</h1>
            <div
              style={{
                height: 700,
                width: "100%",
                fontSize: "200px",
              }}
            >
              <DataGrid
                rows={rows}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
                checkboxSelection
                onSelectionModelChange={handleSelection}
                getRowId={(row) => row._id}
                sx={{ fontSize: "15px", fontWeight: "700" }}
              />
            </div>
            <div>
              <Button
                sx={{
                  bgcolor: "#060b26",
                  "&:hover": {
                    bgcolor: "#1a83ff",
                  },
                }}
                variant="contained"
                onClick={handleDelete}
                color="error"
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

export default Users;
