import { useEffect, useState } from "react";
import axios from "../Api/axios";

const useFetch = ({ url }) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  //fetching the post
  useEffect(() => {
    axios
      .get(url)
      .then((res) => setData(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);
  return { data, error, loading };
};

export default useFetch;
