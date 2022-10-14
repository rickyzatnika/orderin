import Item from "../Item";

function ListItem({ items }) {
  return (
    <div>
      {items.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </div>
  );
}

export default ListItem;
