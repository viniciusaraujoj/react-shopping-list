import { FaTrash } from 'react-icons/fa6';

const IndividualItem = ({ item, handleCheckBox, handleDelete }) => {
  return (
    <li className='item'>
      <div className='input-container'>
        <input
          type='checkbox'
          checked={item.checked}
          onChange={() => handleCheckBox(item.id)}
        />
        <label
          htmlFor='checkbox'
          style={
            item.checked
              ? { textDecoration: 'line-through' }
              : { textDecoration: 'none' }
          }
        >
          {item.title}
        </label>
      </div>
      <button onClick={() => handleDelete(item.id)}>
        <FaTrash />
      </button>
    </li>
  );
};

export default IndividualItem;
