const FilterItems = ({ filter, setFilter }) => {
  return (
    <form className='filter-items'>
      <input
        type='text'
        placeholder='Search Item'
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
    </form>
  );
};

export default FilterItems;
