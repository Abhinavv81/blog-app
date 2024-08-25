import { use, useEffect, useState } from "react";

const useFetchPost = (id:any) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPost = async (id: any) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/blog/${id}`, {
        method: "GET",
      });
      const data = await response.json();
      setData(data.data);
      return data.data;
    } catch (error) {
      setError(error as any);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchPost(id);
  }, [id]);

  return { data, loading, error, fetchPost };
};
export default useFetchPost;
