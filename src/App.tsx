import Header from "./components/Header";
import ListingBody from "./components/ListingBody";
import { ContextListCount } from "./utils/context-list";
import { useState } from "react";

function App() {

  const [contextListCount, setContextListCount] = useState<number>(0);

  return (
    <>
      <ContextListCount.Provider value={{ contextListCount, setContextListCount }}>
        <Header />
        <ListingBody></ListingBody>
      </ContextListCount.Provider>
    </>
  )
}

export default App