import ListItems from './ListItems';

const Content = ({ items, handleCheckBox, handleDelete }) => {
  return (
    <div className='content'>
      <ListItems
        items={items}
        handleCheckBox={handleCheckBox}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default Content;
