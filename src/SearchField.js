import "./styles/searchField.css";

function SearchField({searchQuery, setSearchQuery}) {
  return (
    <form className="search-field">
      <input 
        className="search-field"
        type="search"
        placeholder="Search your trip"
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value.trim())}
      />
    </form>
  );
}

export default SearchField;
