import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import Toggle from "./components/Toggle";
import Plan from "./components/Plan";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: var(--Very-Light-Grayish-Blue);
  padding: 3.5rem;
`;

const AppHeading = styled.div`
  color: var(--Grayish-Blue);
  font-size: 1.6rem;
  margin: 1rem 0 1.75rem;
`;

const PlanToggle = styled(Toggle)`
  margin: 0 0 2rem;
`;

const Plans = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const plans = [
  {
    name: "Basic",
    price: "$19.99",
    features: ["500 GB Storage", "2 Users Allowed", "Send up to 3 GB"],
    primary: false,
  },
  {
    name: "Professional",
    price: "$24.99",
    features: ["1 TB Storage", "5 Users Allowed", "Send up to 10 GB"],
    primary: true,
  },
  {
    name: "Master",
    price: "$39.99",
    features: ["2 TB Storage", "10 Users Allowed", "Send up to 20 GB"],
    primary: false,
  },
];

function renderPlans(plans) {
  return plans.map((plan) => (
    <Plan name={plan.name} price={plan.price} features={plan.features} />
  ));
}

const App = () => {
  return (
    <AppContainer>
      <GlobalStyle />
      <AppHeading>Our Pricing</AppHeading>
      <PlanToggle leftLabel="Annually" rightLabel="Monthly" />
      <Plans>{renderPlans(plans)}</Plans>
    </AppContainer>
  );
};

export default App;
