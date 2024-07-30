import styled from "styled-components";
import ButtonRow from "./ButtonRow";

const Header = ({ handleInputSearch, handleButtonClick }) => {
  return (
    <>
      <HeaderContainer>
        <div className="header-div">
          <div className="image-logo">
            <img src="/FoodyZone.svg" alt="Logo" />
          </div>
          <div className="input-form">
            <input
              onChange={(e) => handleInputSearch(e.target.value)}
              type="text"
              placeholder="Search Food....."
            />
          </div>
        </div>
        <div className="button-div">
          <ButtonRow handleButtonClick={handleButtonClick} />
        </div>
      </HeaderContainer>
    </>
  );
};

export default Header;

const HeaderContainer = styled.div`
  height: 200px;
  background-color: #323334;
  align-content: center;
  .header-div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 80vw;
    margin: 25px auto;
  }

  .image-logo {
    width: 185px;
  }
  .image-logo > img {
    width: 100%;
  }
  .input-form {
    width: 270px;
  }

  .input-form > input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ff0909;
    background-color: #323334;
    color: white;
    border-radius: 5px;
    outline: none;
    font-size: 16px;
  }

  .button-div {
    width: 80vw;
    height: auto;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 10px;

    .header-div {
      flex-direction: column;
      justify-content: center;
      align-content: center;
      align-items: center;
      gap: 10px;
      margin: 10px auto;
    }
  }
`;
