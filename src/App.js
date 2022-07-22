import { useState } from "react";
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
  padding: 3.5rem 2rem 4rem;
`;

const AppHeading = styled.div`
  color: var(--Grayish-Blue);
  font-size: 1.6rem;
  margin: 0 0 1.5rem;
`;

const PlanToggle = styled(Toggle)`
  margin: 0 0 2.75rem;
`;

const Plans = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 1rem;
`;

const plans = [
  {
    name: "Basic",
    monthlyPrice: "19.99",
    annuallyPrice: "199.99",
    features: ["500 GB Storage", "2 Users Allowed", "Send up to 3 GB"],
    primary: false,
  },
  {
    name: "Professional",
    monthlyPrice: "24.99",
    annuallyPrice: "249.99",
    features: ["1 TB Storage", "5 Users Allowed", "Send up to 10 GB"],
    primary: true,
  },
  {
    name: "Master",
    monthlyPrice: "39.99",
    annuallyPrice: "399.99",
    features: ["2 TB Storage", "10 Users Allowed", "Send up to 20 GB"],
    primary: false,
  },
];

function renderPlans(plans, monthly) {
  return plans.map((plan) => (
    <Plan
      name={plan.name}
      price={monthly ? plan.monthlyPrice : plan.annuallyPrice}
      features={plan.features}
      primary={plan.primary}
    />
  ));
}

const App = () => {
  const [monthly, setMonthly] = useState(true);

  return (
    <AppContainer>
      <GlobalStyle />
      <AppHeading>Our Pricing</AppHeading>
      <PlanToggle
        leftLabel="Annually"
        rightLabel="Monthly"
        monthly={monthly}
        setMonthly={setMonthly}
      />
      <Plans>{renderPlans(plans, monthly)}</Plans>
    </AppContainer>
  );
};

export default App;
