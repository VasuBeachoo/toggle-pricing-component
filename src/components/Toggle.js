import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  transition: 0.2s;

  &:hover {
    cursor: pointer;
  }
`;

const Label = styled.p`
  color: var(--Light-Grayish-Blue);
  font-size: 0.95rem;
  letter-spacing: 0.02rem;
`;

const Bg = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => {
    if (props.toggle === "monthly") {
      return "flex-end";
    } else if (props.toggle === "annually") {
      return "flex-start";
    }
  }};
  align-items: center;
  width: 3rem;
  height: 1.65rem;
  background-color: var(--Light-Violet);
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  padding: 0 0.25rem;
`;

const Circle = styled.div`
  width: 1.2rem;
  height: 1.2rem;
  background-color: var(--White);
  border-radius: 100%;
`;

function switchToggle(toggle, setToggle) {
  if (toggle === "monthly") setToggle("annually");
  else if (toggle === "annually") setToggle("monthly");
}

const Toggle = ({ className, leftLabel, rightLabel, toggle, setToggle }) => {
  return (
    <Container
      className={className}
      onClick={() => switchToggle(toggle, setToggle)}
    >
      <Label>{leftLabel}</Label>
      <Bg toggle={toggle}>
        <Circle />
      </Bg>
      <Label>{rightLabel}</Label>
    </Container>
  );
};

export default Toggle;
