import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import Toggle from "./components/Toggle";
import Plan from "./components/Plan";

const AppContainer = styled.div``;

const AppHeading = styled.div``;

const Plans = styled.div``;

const plans = [
  {
    name: "Basic",
    price: "$19.99",
    features: ["500 GB Storage", "2 Users Allowed", "Send up to 3 GB"],
  },
  {
    name: "Professional",
    price: "$24.99",
    features: ["1 TB Storage", "5 Users Allowed", "Send up to 10 GB"],
  },
  {
    name: "Master",
    price: "$39.99",
    features: ["2 TB Storage", "10 Users Allowed", "Send up to 20 GB"],
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
      <Toggle leftLabel="Annually" rightLabel="Monthly" />
      <Plans>{renderPlans(plans)}</Plans>
    </AppContainer>
  );
};

export default App;
