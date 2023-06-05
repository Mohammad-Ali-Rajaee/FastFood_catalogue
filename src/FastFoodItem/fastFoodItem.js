import "./fastFoodItem.css";
import { Plus } from "react-huge-icons/outline";

const FastFoodItem = ({ name, price, imageUrl, ingredients, delay }) => {
  return (
    <div
      style={{ animationDelay: delay + "s" }}
      className="card fade-in-horiz max-w-sm mx-auto rounded-md overflow-hidden shadow-lg bg-white relative"
    >
      <span className="absolute top-3 right-3 bg-green-400 rounded-md py-1 px-2 text-white text-sm">
        قیمت : {price.toLocaleString()} تومان
      </span>
      <div className="card__placeholder">
        <img
          className="w-full rounded-t-md"
          src={imageUrl}
          alt="Sunset in the mountains"
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-3 text-center">{name}</div>
        <p className="text-[#7d879c] text-center text-sm mb-5 line-clamp-2">
          {ingredients}
        </p>
        <button className="bg-white flex items-center gap-2 justify-center border transition border-green-400 text-green-400 w-full py-2 rounded-md hover:bg-green-400 hover:text-white">
          <Plus />
          افزودن به سبد خرید
        </button>
      </div>
    </div>
  );
};

export default FastFoodItem;
