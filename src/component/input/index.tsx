import React from "react";
import { useState } from "react";
import axios from "axios";

// java의 DTO와 유사
interface PostRequest {
  title: string;
  content: string;
  writer: string;
}

const Input = () => {
  const [request, setRequest] = useState<PostRequest>({
    title: "",
    content: "",
    writer: "",
  });

  const writePost = async () => {
    const response = await axios.post("post", {
      title: request.title,
      content: request.content,
      writer: request.writer,
    });
    console.log(response);
  };

  const handleChange = (data: any) => {
    // 콘솔에서 값 확인
    console.log(data.target.id, data.target.value);

    const { id, value } = data.target;

    setRequest({
      ...request,
      [id]: value,
    });
  };

  return (
    <div>
      <form>
        <input id="title" value={request.title} onChange={handleChange}></input>
        <br />
        <input
          id="content"
          value={request.content}
          onChange={handleChange}
        ></input>
      </form>
    </div>
  );
};

export default Input;
