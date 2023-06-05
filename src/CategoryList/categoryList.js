import useAxios from "../useAxios";

const CategoryList = ({ filterItems, children }) => {
  const [categories, , loading] = useAxios({ url: "/FoodCategory/categories" });
  return (
    <nav className="container rounded-md w-full bg-white mx-auto -mt-8 flex items-center">
      <div
        className="rounded-md shadow-lg w-full py-3 flex items-center justify-between px-3 text-sm lg:text-base"
        style={{ height: "70px" }}
      >
        <input type="checkbox" id="hamburger" className="hidden" />
        <ul className="nav w-8 transition-all lg:max-w-md lg:mx-auto overflow-hidden relative md:pr-0 md:w-1/2 flex items-center justify-between px-3 h-full">
          <label
            className="hamburger md:hidden transition absolute right-0"
            htmlFor="hamburger"
          ></label>
          <li
            onClick={() => filterItems()}
            className="nav-item pr-8 md:pr-0 h-full flex items-center cursor-pointer transition hover:text-red-400"
          >
            <a href="#" className="nav-link">
              همه فست فود ها
            </a>
          </li>
          {categories?.map((category) => {
            return (
              <li
                key={category.id}
                onClick={() => filterItems(category.id)}
                className="nav-item cursor-pointer transition hover:text-red-400 h-full flex items-center"
              >
                <a href="#" className="nav-link">
                  {category.name}
                </a>
              </li>
            );
          })}
        </ul>
        {children}
      </div>
    </nav>
  );
};

export default CategoryList;
