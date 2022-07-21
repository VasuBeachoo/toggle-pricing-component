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
  font-size: 0.9rem;
  letter-spacing: 0.05rem;
`;

const Bg = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 3rem;
  height: 1.65rem;
  background-color: var(--Light-Violet);
  border-radius: 1rem;
  padding: 0 0.25rem;
`;

const Circle = styled.div`
  width: 1.2rem;
  height: 1.2rem;
  background-color: var(--White);
  border-radius: 100%;
`;

const Toggle = ({ className, leftLabel, rightLabel }) => {
  return (
    <Container className={className}>
      <Label>{leftLabel}</Label>
      <Bg>
        <Circle />
      </Bg>
      <Label>{rightLabel}</Label>
    </Container>
  );
};

export default Toggle;
