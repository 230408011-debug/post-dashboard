import Post from "./Post";

function PostList({ posts }) {
  return (
    <div>
      {posts.map((p) => (
        <Post key={p.id} title={p.title} body={p.body} />
      ))}
    </div>
  );
}

export default PostList;