import axios from "axios";
import { type } from "os";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Post from "./post";

interface PostResponse {
  id: number;
  title: string;
  content: string;
  writer: string;
  // views: number;
  // likes: number;
}

const List = () => {
  const [posts, setPosts] = useState<PostResponse[]>();

  useEffect(() => {
    const getPosts = async () => {
      const posts = await axios.get<PostResponse[]>("post");
      setPosts(posts.data);
      console.log(posts);
    };
    getPosts();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th scope="row">번호</th>
          <th>제목</th>
          <th>내용</th>
          <th>작성자</th>
        </tr>
      </thead>
      <tbody>
        {posts
          ? posts.map((value, index) => {
              return (
                <Post
                  key={index}
                  id={value.id}
                  title={value.title}
                  content={value.content}
                  writer={value.writer}
                ></Post>
              );
            })
          : "거짓"}
      </tbody>
    </table>
  );
};

export default List;
