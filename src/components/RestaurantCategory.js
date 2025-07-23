import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  const items = data.itemCards.map((item) => item.card.info)
  return (
    <div>
      {/* Header */}
      <div className="w-10/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 items-center rounded-lg">
        <div className="flex justify-between">
          <span className="font-bold text-lg">
            {data?.title}({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        <ItemList items = {items} key={items.id}/>
      </div>
    </div>
  );
};
export default RestaurantCategory;
