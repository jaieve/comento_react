import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Post from "./post";

interface PostsResponse {
  post: PostResponse;
}

interface PostResponse {
  id: number;
  title: string;
  content: string;
  writer: string;
  // views: number;
  // likes: number;
}

const List = () => {
  const [posts, setPosts] = useState<PostsResponse>();

  useEffect(() => {
    const getPosts = async () => {
      // const posts = await axios.get<PostResponse>("post");
      // setPosts(posts.data);
      // console.log(posts);
    };
    getPosts();
  }, []);
  console.log(posts);

  return (
    <table>
      <tbody>
        <thead>
          <tr>
            <th scope="row">번호</th>
            <th>제목</th>
            <th>내용</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>{posts ? "참" : "거짓"}</tbody>
      </tbody>
    </table>
  );
};

export default List;
