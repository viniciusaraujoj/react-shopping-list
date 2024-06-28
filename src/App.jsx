import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import AddItem from './components/AddItem';
import FilterItems from './components/FilterItems';
import { useState } from 'react';
const App = () => {
  const isStorageNull = (key) => localStorage.getItem(key) === null;

  const [items, setItems] = useState(
    isStorageNull('shoppinglist')
      ? []
      : JSON.parse(localStorage.getItem('shoppinglist'))
  );

  const handleCheckBox = (id) => {
    const newArray = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(newArray);
    localStorage.setItem('shoppinglist', JSON.stringify(newArray));
  };

  const handleDelete = (id) => {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
    localStorage.setItem('shoppinglist', JSON.stringify(newArray));
  };

  // add item
  const [item, setItem] = useState('');

  const addItem = () => {
    const id = items.length + 1;
    const newItem = { id: id, title: item, checked: false };
    const newArray = [...items, newItem];
    setItems(newArray);
    localStorage.setItem('shoppinglist', JSON.stringify(newArray));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!item.length) {
      return;
    }
    addItem();
    setItem('');
  };

  // filter
  const [filter, setFilter] = useState('');

  return (
    <div className='App'>
      <Header title='Shopping List' />
      <div className='container'>
        <AddItem item={item} setItem={setItem} handleSubmit={handleSubmit} />
        <FilterItems filter={filter} setFilter={setFilter} />
        <Content
          items={items.filter((item) =>
            item.title.toLowerCase().includes(filter.toLowerCase())
          )}
          handleCheckBox={handleCheckBox}
          handleDelete={handleDelete}
        />
      </div>
      <Footer listLength={items.length} />
    </div>
  );
};

export default App;
