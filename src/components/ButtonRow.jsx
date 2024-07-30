import styled from "styled-components";
const filterBtnLists = [
  {
    name: "All",
    type: "all",
  },
  {
    name: "Breakfast",
    type: "breakfast",
  },
  {
    name: "Lunch",
    type: "lunch",
  },
  {
    name: "Dinner",
    type: "dinner",
  },
];
const ButtonRow = ({ handleButtonClick }) => {
  return (
    <>
      <ButtonContainer>
        {filterBtnLists.map((value, index) => (
          <Button onClick={() => handleButtonClick(value.type)} value={value.name} key={index}>
            {value.name}
          </Button>
        ))}
      </ButtonContainer>
    </>
  );
};

export default ButtonRow;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  background-color: #ff4343;
  color: white;
  font-weight: 400;
  padding: 8px 16px;
  outline: none;
  border: 1px solid transparent;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: 0.4s background ease-in;

  &:hover {
    background-color: #b40101;
    transition: 0.3s background ease-in;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
