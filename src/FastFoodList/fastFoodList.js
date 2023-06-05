import FastFoodItem from "../FastFoodItem/fastFoodItem";

const FastFoodList = ({ fastFoodItems }) => {
  let delay = 0.1;
  return (
    <div className="grid md:grid-cols-3 gap-y-6 md:gap-x-4 sm:gap-x-3 sm:grid-cols-2 mx-auto">
      {fastFoodItems?.map((item) => {
        delay += 0.03;
        return (
          <div key={item.id}>
            <FastFoodItem {...item} delay={delay} />
          </div>
        );
      })}
    </div>
  );
};

export default FastFoodList;
