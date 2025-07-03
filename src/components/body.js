import { RestaurantCard } from "./restaurantCard"
import { resList } from "../utils/mockData"
export const Body = () => {
    return <div className="body">
        <div className="res-search">
            Search
        </div>
        <div className="res-container">
            {
                resList.map((restaurant) => (
                    <RestaurantCard key={restaurant.id} resData={restaurant}/>
                ))
            }
        </div>
    </div>
}