import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const Name = styled.p``;

const Price = styled.h1``;

const Divider = styled.hr`
  width: 100%;
`;

const Feature = styled.p``;

const Button = styled.button``;

function renderFeatures(features) {
  return features.map((feature) => (
    <Feature>
      <p>{feature}</p>
      <Divider />
    </Feature>
  ));
}

const Plan = ({ className, name, price, features }) => {
  return (
    <Container className={className}>
      <Name>{name}</Name>
      <Price>{price}</Price>
      <Divider />
      {renderFeatures(features)}
      <Button>LEARN MORE</Button>
    </Container>
  );
};

export default Plan;
