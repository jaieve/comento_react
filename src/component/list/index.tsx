import React from "react";
import { useState } from "react";
import Post from "./post";

// interface PostsResponse[] {
//   post: PostResponse[]
// }

// interface PostResponse {
//   id: number
//   title: string
//   content: string
//   writer: string
//   views: number
//   likes: number
// }

const List = () => {
  // const [posts, setPosts] = useState<PostsResponse>();

  return (
    <table>
      <tbody>
        <tr>
          <th scope="row">제목</th>
          <th>내용</th>
          <th>작성자</th>
        </tr>
        <Post></Post>
        <Post></Post>
        <Post></Post>
      </tbody>
    </table>
  );
};

export default List;
