import styled from "styled-components";
import { ThemeProvider } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex-basis: 20rem;
  background-color: ${(props) =>
    props.primary
      ? props.theme.primary.container.backgroundColor
      : props.theme.secondary.container.backgroundColor};
  border-radius: 0.65rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  padding: 2.5rem 2rem;
`;

const Name = styled.p`
  color: ${(props) =>
    props.primary
      ? props.theme.primary.text.color
      : props.theme.secondary.text.color};
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
  color: ${(props) =>
    props.primary
      ? props.theme.primary.text.color
      : props.theme.secondary.text.color};
  font-size: 2rem;
  margin: 0 0.3rem 0 0;
`;

const Value = styled.h1`
  color: ${(props) =>
    props.primary
      ? props.theme.primary.text.color
      : props.theme.secondary.text.color};
  font-size: 3rem;
  margin: 0;
`;

const Divider = styled.hr`
  width: 100%;
  margin: 0;
`;

const Feature = styled.p`
  color: ${(props) =>
    props.primary
      ? props.theme.primary.text.color
      : props.theme.secondary.text.color};
  font-size: 0.95rem;
  letter-spacing: 0.01rem;
  margin: 0;
`;

const Button = styled.button`
  all: unset;
  box-sizing: border-box;
  text-align: center;
  width: 100%;
  background-color: ${(props) =>
    props.primary
      ? props.theme.primary.button.backgroundColor
      : props.theme.secondary.button.backgroundColor};
  color: ${(props) =>
    props.primary
      ? props.theme.primary.button.color
      : props.theme.secondary.button.color};
  font-size: 0.9rem;
  letter-spacing: 0.02rem;
  border-radius: 0.25rem;
  border: 0.2rem solid
    ${(props) =>
      props.primary
        ? props.theme.primary.button.backgroundColor
        : props.theme.secondary.button.backgroundColor};
  padding: 0.75rem;
  margin: 2.25rem 0 0;
  transition: 0.2s;

  &:hover {
    cursor: pointer;
    background: none;
    color: ${(props) =>
      props.primary
        ? props.theme.secondary.button.color
        : props.theme.primary.button.color};
  }
`;

function renderFeatures(features, primary) {
  return features.map((feature) => (
    <>
      <Feature primary={primary}>
        <p>{feature}</p>
      </Feature>
      <Divider />
    </>
  ));
}

const Plan = ({ className, name, price, features, primary }) => {
  const planThemes = {
    primary: {
      container: {
        backgroundColor: "var(--Violet)",
      },
      text: {
        color: "var(--White)",
      },
      button: {
        backgroundColor: "var(--White)",
        color: "var(--Violet)",
      },
    },
    secondary: {
      container: {
        backgroundColor: "var(--White)",
      },
      text: {
        color: "var(--Dark-Grayish-Blue)",
      },
      button: {
        backgroundColor: "var(--Violet)",
        color: "var(--White)",
      },
    },
  };

  return (
    <ThemeProvider theme={planThemes}>
      <Container className={className} primary={primary}>
        <Name primary={primary}>{name}</Name>
        <Price primary={primary}>
          <DollarSign primary={primary}>$</DollarSign>
          <Value primary={primary}>{price}</Value>
        </Price>
        <Divider />
        {renderFeatures(features, primary)}
        <Button primary={primary}>LEARN MORE</Button>
      </Container>
    </ThemeProvider>
  );
};

export default Plan;
