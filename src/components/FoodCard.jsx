import styled from "styled-components";

const FoodCard = ({ data }) => {
  return (
    <>
      <Card>
        <div className="card-div">
          <img src={data?.image} alt={data?.name} />
        </div>
        <div className="card-info">
          <h3>{data?.name}</h3>
          <p>{data?.text}</p>
          <Button>$ {data?.price.toFixed(2)}</Button>
        </div>
      </Card>
    </>
  );
};

export default FoodCard;

const Card = styled.div`
  width: 360px;
  height: 167px;
  padding: 10px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  display: flex;
  transition: 0.3s background ease-in;
  cursor: pointer;
  .card-div {
    width: 300px;
  }
  .card-div > img {
    width: 100%;
  }
  .card-info {
    margin: 10px auto;
  }
  .card-info > h3 {
    margin: 5px 0;
    color: white;
    font-size: 16px;
    font-weight: 600;
  }
  .card-info > p {
    color: white;
    font-size: 12px;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transition: 0.2s background ease-in;
  }
`;

const Button = styled.button`
  background-color: #ff4343;
  color: white;
  font-weight: 400;
  padding: 8px 16px;
  outline: none;
  border: 1px solid transparent;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  transition: 0.4s background ease-in;
  position: absolute;
  bottom: 10px;
  right: 10px;

  &:hover {
    background-color: #b40101;
    transition: 0.3s background ease-in;
  }
`;