import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick =() => {
    setShowIndex();
  }

  return (
    <div>
      {/* Header */}
      <div className="w-10/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 items-center rounded-lg">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="font-bold text-lg">
            {data?.title}({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>

        {showItems && data.itemCards.map((item) => (
          <ItemList info={item?.card?.info} key={item?.card?.info?.id} />
        ))}
      </div>
    </div>
  );
};
export default RestaurantCategory;
