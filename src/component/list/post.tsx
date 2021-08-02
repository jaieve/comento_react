// default props 정의
interface PostProps {
  id: number;
  title: string;
  content: string;
  writer: string;
  // views: number;
  // likes: number;
}

const Post = ({ id, title, content, writer }: PostProps) => {
  return (
    <tr>
      <th scope="row">{id}</th>
      <th>{title}</th>
      <th>{content}</th>
      <th>{writer}</th>
      {/* <th>{views}</th>
      <th>{likes}</th> */}
    </tr>
  );
};

export default Post;
