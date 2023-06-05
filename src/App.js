import Header from "./Header/header";
import "./App.css";
import CategoryList from "./CategoryList/categoryList";
import { useState } from "react";
import Loading from "./Loading/loading";
import FastFoodList from "./FastFoodList/fastFoodList";
import SearchBox from "./SearchBox/searchBox";
import notFound from "./assets/images/NotFound.png";
import useAxios from "./useAxios";

function App() {
  const [url, setUrl] = useState("/FastFood/list");
  const [fastFoodItems, , loading] = useAxios({ url });

  const filterItems = (CategoryId) => {
    setUrl(`/FastFood/list${CategoryId ? `?categoryId=${CategoryId}` : ""}`);
  };

  const searchItem = async (term) => {
    setUrl(`/FastFood/search/${term ? `?term=${term}` : ""}`);
  };
  const renderContent = () => {
    if (loading) {
      return <Loading theme={"red"} />;
    }

    if (fastFoodItems.length === 0) {
      return (
        <>
          <div
            className="bg-red-100 border-t-4 border-red-700 rounded-b px-4 py-3 shadow-md"
            role="alert"
          >
            <div className="flex">
              <div className="py-1">
                <svg
                  className="fill-current h-6 w-6 text-red-700 mr-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm0 18.75c-4.663 0-8.438-3.775-8.438-8.438S5.337 1.875 10 1.875s8.438 3.775 8.438 8.438-3.775 8.437-8.438 8.437zM10 4.375a.625.625 0 1 1 0 1.25.625.625 0 0 1 0-1.25zm-.625 12.5a.625.625 0 1 1 1.25 0V14.75a.625.625 0 0 1-1.25 0v2.125zm4.375-4.375a.625.625 0 1 1 0-1.25.625.625 0 0 1 0 1.25z" />
                </svg>
              </div>
              <div className="flex items-center gap-3 pr-3">
                <p className="font-bold">خطا ! </p>
                <p className="text-sm">آیتم مورد نظر یافت نشد ... </p>
              </div>
            </div>
          </div>
          <img
            src={notFound}
            alt="not found"
            className="mx-auto my-5 fade-in-horiz"
          />
        </>
      );
    }
    if (fastFoodItems) {
      return <FastFoodList fastFoodItems={fastFoodItems} />;
    }
  };

  return (
    <div className="wrapper bg-[#373f5017]">
      <Header />
      <CategoryList filterItems={filterItems}>
        <SearchBox searchItem={searchItem} />
      </CategoryList>
      <div className=" container w-full h-full mx-auto mt-10">
        {renderContent()}
      </div>
    </div>
  );
}

export default App;
