import { FaPlus } from 'react-icons/fa6';

const AddItem = ({ item, setItem, handleSubmit }) => {
  return (
    <form className='add-item' onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Add Item'
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <button type='submit'>
        <FaPlus />
      </button>
    </form>
  );
};

export default AddItem;
