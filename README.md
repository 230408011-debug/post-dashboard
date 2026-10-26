# Post Dashboard

This is my Assignment 6 for Web Programming. It is a small React app made with Vite. It loads posts from the JSONPlaceholder API, shows loading, error and empty messages, and lets you filter the posts by title.

## File organization

- `src/api/postsApi.js`: has the `fetchPosts` function. It only does the fetch and returns the JSON. No JSX and no React here.
- `src/reducers/postsReducer.js`: has the initial state and the reducer that handles FETCH_START, FETCH_SUCCESS and FETCH_ERROR.
- `src/App.jsx`: the main component. It uses useReducer for the async state and useEffect to fetch the posts when the app loads. It also keeps the filter text in useState and filters the posts while rendering.
- `src/components/PostList.jsx`: gets the posts as props and shows them with `.map()`.
- `src/components/Post.jsx`: shows the title and body of one post.
- `src/components/FilterForm.jsx`: the controlled input used for filtering.

## Challenges

- At first I did not understand why we need cleanup in useEffect. I learned that if the component goes away while the fetch is still running, we should cancel it, so I used AbortController and ignored the AbortError.
- I wanted to store the filtered posts in state, but then I understood that it is derived state. So I only keep the original posts in the reducer and filter them during render.
- It took me some time to keep the reducer pure. I had to always return a new object with the spread operator and not put any fetch inside the reducer.
- I had to be careful to show the loading, error and empty states separately so the page does not break or show a blank screen.
- I also put `postsApi.js` in the wrong folder at first, and then moved it into `src/api`.

## How to run

    npm install
    npm run dev