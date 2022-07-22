import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex-basis: 20rem;
  background-color: grey;
  border-radius: 0.65rem;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  padding: 2.5rem 2rem;
`;

const Name = styled.p`
  font-size: 1.1rem;
  margin: 0 0 1.2rem;
`;

const Price = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 0 1.5rem;
`;

const DollarSign = styled.p`
  font-size: 2rem;
  margin: 0 0.3rem 0 0;
`;

const Value = styled.h1`
  font-size: 3rem;
  margin: 0;
`;

const Divider = styled.hr`
  width: 100%;
  margin: 0;
`;

const Feature = styled.p`
  font-size: 0.95rem;
  letter-spacing: 0.01rem;
  margin: 0;
`;

const Button = styled.button`
  all: unset;
  box-sizing: border-box;
  text-align: center;
  width: 100%;
  background-color: lightblue;
  font-size: 0.9rem;
  letter-spacing: 0.02rem;
  border-radius: 0.25rem;
  border: 0.2rem solid white;
  padding: 0.75rem;
  margin: 2.25rem 0 0;
`;

function renderFeatures(features) {
  return features.map((feature) => (
    <>
      <Feature>
        <p>{feature}</p>
      </Feature>
      <Divider />
    </>
  ));
}

const Plan = ({ className, name, price, features }) => {
  return (
    <Container className={className}>
      <Name>{name}</Name>
      <Price>
        <DollarSign>$</DollarSign>
        <Value>{price}</Value>
      </Price>
      <Divider />
      {renderFeatures(features)}
      <Button>LEARN MORE</Button>
    </Container>
  );
};

export default Plan;
