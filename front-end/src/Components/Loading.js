import MoonLoader from "react-spinners/MoonLoader";

const Loading = ({ size, alignItemsCenter }) => {
  return (
    <div
      style={{
        width: "1500px",
        height: "800px",
        display: "flex",
        justifyContent: "center",
        alignItems: alignItemsCenter ? "center" : "",
      }}
    >
      <MoonLoader color="black" loading={true} size={size} />
    </div>
  );
};

export default Loading;
