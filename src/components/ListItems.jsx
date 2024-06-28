import IndividualItem from './IndividualItem';
const ListItems = ({ items, handleCheckBox, handleDelete }) => {
  return (
    <form>
      {items.length === 0 && (
        <h2 style={{ textAlign: 'center' }}>The List is Empty</h2>
      )}
      <ul>
        {items.map((item) => (
          <IndividualItem
            item={item}
            key={item.id}
            handleCheckBox={handleCheckBox}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    </form>
  );
};

export default ListItems;
