import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Label = styled.p``;

const Bg = styled.div``;

const Circle = styled.div``;

const Toggle = ({ leftLabel, rightLabel }) => {
  return (
    <Container>
      <Label>{leftLabel}</Label>
      <Bg>
        <Circle />
      </Bg>
      <Label>{rightLabel}</Label>
    </Container>
  );
};

export default Toggle;
