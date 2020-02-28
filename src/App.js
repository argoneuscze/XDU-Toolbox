import React from "react";
import { Switch, Route } from "react-router-dom";
import Container from "@material-ui/core/Container";
import CardTable from "./components/cards/CardTable";
import { CssBaseline } from "@material-ui/core";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
          <Switch>
            <Route path="/">
              <CardTable />
            </Route>
          </Switch>
        </main>
      </Container>
    </>
  );
};

export default App;
