import { Route, Routes, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";

function QuoteDetail() {
  const state = useParams();
  return (
    <>
      <h1> This is QuoteDetail pages</h1>
      <p>{state.quoteid}</p>
      <Routes>
        <Route
          path={`/quotes/${state.quoteid}/c`}
          element={<Comments></Comments>}
        ></Route>
      </Routes>
    </>
  );
}

export default QuoteDetail;
