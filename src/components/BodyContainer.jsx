import styled from "styled-components";
import FoodCard from "./FoodCard";

const BodyContainer = ({ foodData }) => {
  return (
    <BackGroundContainer>
      <BackGroundOverLay>
        <div className="container">
          {foodData?.map((food, index) => (
            <FoodCard key={index} data={food} />
          ))}
        </div>
      </BackGroundOverLay>
    </BackGroundContainer>
  );
};

export default BodyContainer;

const BackGroundContainer = styled.main`
  height: calc(100vh - 200px);
  background-image: url("/bg-cover-image.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-color: rgba(13, 13, 13, 0.76);
  position: relative;

  @media (max-width: 768px) {
    overflow-y: auto;
  }
`;

const BackGroundOverLay = styled.div`
  position: absolute;
  background-color: rgba(13, 13, 13, 0.76);
  min-height: 100vh;
  min-width: 100vw;
  top: 0;
  left: 0;

  .container {
    z-index: 2;
    position: relative;
    width: 80vw;
    margin: 66px auto;
    display: flex;
    flex-wrap: wrap;
    row-gap: 32px;
    column-gap: 20px;
    justify-content: center;
    align-items: center;
    padding: 2rem;
  }

  @media (max-width: 768px) {
    .container {
      margin: auto;
      row-gap: 20px;
    }
  }
`;
