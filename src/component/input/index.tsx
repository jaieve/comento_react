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
    const { id, value } = data.target;

    console.log(data.target.id, data.target.value);

    setRequest({
      ...request,
      [id]: value,
    });
  };

  return (
    <div>
      <form>
        <h3>글쓰기 폼</h3>
        <label>title</label>
        <input
          id="title"
          value={request.title}
          onChange={handleChange}
          required
        ></input>
        <br />
        <label>writer</label>
        <input
          id="writer"
          value={request.writer}
          onChange={handleChange}
          required
        ></input>
        <br />
        <label>content</label>
        <input
          id="content"
          value={request.content}
          onChange={handleChange}
          required
        ></input>
        <br />
        <button onClick={writePost}>글 등록</button>
      </form>
    </div>
  );
};

export default Input;
