import { useReducer, useEffect, useState } from "react";
import { fetchPosts } from "./api/postsApi";
import { postsReducer, initialState } from "./reducers/postsReducer";
import PostList from "./components/PostList";
import FilterForm from "./components/FilterForm";

function App() {
  const [state, dispatch] = useReducer(postsReducer, initialState);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function load() {
      dispatch({ type: "FETCH_START" });
      try {
        const data = await fetchPosts(controller.signal);
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      } catch (err) {
        if (err.name === "AbortError") return;
        dispatch({ type: "FETCH_ERROR", payload: err.message });
      }
    }

    load();
    return () => controller.abort();
  }, []);

  const filteredPosts = state.posts.filter((p) =>
    p.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Post Dashboard</h1>
      <FilterForm filter={filter} onFilterChange={setFilter} />

      {state.loading && <p>Loading posts...</p>}
      {state.error && <p>Error: {state.error}</p>}
      {!state.loading && !state.error && filteredPosts.length === 0 && (
        <p>No posts found.</p>
      )}
      {!state.loading && !state.error && filteredPosts.length > 0 && (
        <PostList posts={filteredPosts} />
      )}
    </div>
  );
}

export default App;