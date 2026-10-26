function FilterForm({ filter, onFilterChange }) {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        placeholder="Filter by title..."
        value={filter}
        onChange={(e) => onFilterChange(e.target.value)}
      />
    </form>
  );
}

export default FilterForm;