import Header from "./components/Header/Header";
import "./assets/style.module.css";
import { Suspense } from "react";

function App() {
  function handleSearch(filteredData) {}

  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Header onSearch={handleSearch} />
      </Suspense>
    </div>
  );

  function Loading() {
    return <h2>🌀 Loading...</h2>;
  }
}

export default App;
