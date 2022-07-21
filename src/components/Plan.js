import styled from "styled-components";

const Container = styled.div``;

const Name = styled.p``;

const Price = styled.h1``;

const Divider = styled.hr``;

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

const Plan = ({ name, price, features }) => {
  return (
    <Container>
      <Name>{name}</Name>
      <Price>{price}</Price>
      <Divider />
      {renderFeatures(features)}
      <Button>LEARN MORE</Button>
    </Container>
  );
};

export default Plan;
