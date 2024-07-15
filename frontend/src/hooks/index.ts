import axios from "axios";
import { useState, useEffect } from "react";
import { BACKEND_URL } from "../config";

interface BlogType {
  content: string;
  title: string;
  id: number;
  date:string;
  author: {
    name: string;
  };
}

export const FetchBlogs = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<BlogType[]>([]);

  async function fetch() {
    const token = localStorage.getItem("token");
    try {
      const res = await axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
        headers: {
          Authorization: token ? `Bearer ${token}` : ""
        }
      });
      const fetchedBlogs = res.data.blogs || [];
      setBlogs(fetchedBlogs);
      setLoading(false);
    } catch (e) {
      console.error("Fetch error:", e);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetch();
  }, []);

  return { blogs, loading };
};

export const FetchBlog = ({ id }: { id: string }) => {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState<BlogType | null>(null);

  async function fetch() {
    const token = localStorage.getItem("token");
    try {
      const res = await axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
        headers: {
          Authorization: token ? `Bearer ${token}` : ""
        }
      });
      const fetchedBlog = res.data.blog || [];
      setBlog(fetchedBlog);
      setLoading(false);
    } catch (e) {
      console.error("Fetch error:", e);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetch();
  }, [id]);

  return { blog, loading };
};
