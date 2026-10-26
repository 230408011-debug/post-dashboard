export async function fetchPosts(signal) {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", { signal });
  if (!res.ok) throw new Error(`Request failed: ${res.status}`);
  return res.json();
}