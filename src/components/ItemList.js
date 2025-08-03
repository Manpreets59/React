import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ info }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    // disapatch action
    dispatch(addItem(item));
  };
  return (
    <div>
      <div className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between items-center ">
        <div className="w-9/12">
          <div className="py-2">
            <span>{info?.name}</span>
            <span>-₹{info?.price / 100}</span>
          </div>
          <p className="text-xs">{info?.description}</p>
        </div>
        <div className="w-3/12 p-4">
          <div className="absolute ">
            <button
              className="p-2 mx-10 rounded-lg bg-white shadow-lg hover:bg-gray-400"
              onClick={() => handleAddItem(info)}
            >
              Add+
            </button>
          </div>

          <img
            src={CDN_URL + info?.imageId}
            className="w-14 h-auto"
            alt="info?.name"
          />
        </div>
      </div>
    </div>
  );
};
export default ItemList;
