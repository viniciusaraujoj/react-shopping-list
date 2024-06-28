function Footer({ listLength }) {
  return (
    <footer>
      {listLength} List {listLength === 1 ? 'Item' : 'Items'}
    </footer>
  );
}

export default Footer;
