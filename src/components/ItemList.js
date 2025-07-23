const ItemList = ({ items }) => {
    console.log("hlo and then items")
  console.log(items);
  const name = items.map((item) => item.name);
  return (
    <div>
      {name}
    </div>
  );
};
export default ItemList;
