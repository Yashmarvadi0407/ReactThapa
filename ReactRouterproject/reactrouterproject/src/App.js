import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import QuoteDetail from "./pages/QuoteDetail";
import AllQuotes from "./pages/AllQuotes";
import NewQuote from "./pages/NewQuote";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/quotes"></Navigate>} exact>
          {/* <Redirect to="/quotes"> </Redirect> */}
          {/* <Navigate to="/quotes"></Navigate> */}
          {/* <Route render={() => <Navigate to="/quotes" />} /> */}
        </Route>
        <Route path="/quotes" element={<AllQuotes></AllQuotes>} exact></Route>
        <Route
          path="/quotes/:quoteid"
          element={<QuoteDetail></QuoteDetail>}
        ></Route>
        <Route path="/new-quote" element={<NewQuote></NewQuote>}></Route>
        <Route path="*" element={<NotFound></NotFound>}>
          
        </Route>
      </Routes>
      </Layout>
  );
}
export default App;
