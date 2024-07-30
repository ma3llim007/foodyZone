import { useState } from "react";
import { BodyContainer, Header } from "./components";
import { foodData as data } from "./data";

const App = () => {
  const [foodData, setFoodData] = useState(data);
  const [selectBtn, setSelectBtn] = useState("all");

  // Function For Handle Input Search
  const handleInputSearch = (value) => {
    const inputValue = value.toLowerCase();
    if (inputValue === "") {
      setFoodData(data);
    } else {
      let newFoodData = foodData.filter((food) =>
        food.name.toLowerCase().includes(inputValue)
      );
      setFoodData(newFoodData);
    }
  };

  // Function For Handle Button
  const handleButtonClick = (button_value) => {
    if (button_value === "all") {
      setFoodData(data);
      return;
    }
    let newFoodData = data.filter((food) =>
      food.category.toLowerCase().includes(button_value)
    );
    setFoodData(newFoodData);
  };

  return (
    <>
      <Header
        handleInputSearch={handleInputSearch}
        handleButtonClick={handleButtonClick}
      />
      <BodyContainer foodData={foodData} />
    </>
  );
};

export default App;
