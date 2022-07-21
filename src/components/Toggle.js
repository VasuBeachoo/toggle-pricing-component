import styled from "styled-components";

const Container = styled.div``;

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
