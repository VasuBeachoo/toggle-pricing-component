import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const Label = styled.p`
  color: var(--Light-Grayish-Blue);
  font-size: 0.95rem;
  letter-spacing: 0.02rem;
`;

const Bg = styled.div`
  user-select: none;
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => (props.monthly ? "flex-end" : "flex-start")};
  align-items: center;
  width: 3rem;
  height: 1.65rem;
  background-color: var(--Violet);
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  padding: 0 0.25rem;
  transition: 0.2s;

  &:hover {
    cursor: pointer;
    background-color: var(--Light-Violet);
  }
`;

const Circle = styled.div`
  width: 1.2rem;
  height: 1.2rem;
  background-color: var(--White);
  border-radius: 100%;
`;

const Toggle = ({ className, leftLabel, rightLabel, monthly, setMonthly }) => {
  return (
    <Container className={className}>
      <Label>{leftLabel}</Label>
      <Bg monthly={monthly} onClick={() => setMonthly(!monthly)}>
        <Circle />
      </Bg>
      <Label>{rightLabel}</Label>
    </Container>
  );
};

export default Toggle;
