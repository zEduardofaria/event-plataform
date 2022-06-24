import { ApolloProvider } from "@apollo/client";
import { client } from "./lib/apollo";
import { Event } from "./pages/Event";
import { Router } from "./Router";

import "./styles/global.css";

function App() {
  return (
    <ApolloProvider client={client}>
      <Router />
    </ApolloProvider>
  );
}

export default App;
