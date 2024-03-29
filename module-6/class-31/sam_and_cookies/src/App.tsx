import "./App.css";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Cookies, CookieStand } from "./components/cookies";
import { useEffect, useMemo, useState } from "react";
import { Form, StoreFormValues } from "./components/form";
import { AppContext } from "./app.context";

const STARTING_STORES = [
  new CookieStand("Seattle", 23, 65, 6.3),
  new CookieStand("Tokyo", 3, 24, 1.2),
  new CookieStand("Dubai", 11, 38, 3.7),
  new CookieStand("Paris", 20, 38, 2.3),
  new CookieStand("Lima", 2, 16, 4.6),
];

function App() {
  const [stores, setStores] = useState(STARTING_STORES);
  const [formValues, setFormValues] = useState<undefined | StoreFormValues>();

  useEffect(() => {
    // console.log("Effect ran");
    console.log(`There are now ${stores.length} stores`);
  }, [stores]);

  useEffect(() => {
    if (formValues !== undefined) {
      const { name, min, max, avg } = formValues;
      const store = new CookieStand(name, min, max, avg);
      setStores([...stores, store]);
      setFormValues(undefined);
    }
  }, [formValues, stores]);

  const bigStores = useMemo(() => {
    return stores.filter((store) => store.totalCookies > 1000).length;
  }, [stores]);

  const [siteOwner, setSiteOwner] = useState("Hugo");

  return (
    <>
      <AppContext.Provider value={{ siteOwner }}>
        <Header />
        <main>
          <p>There are {bigStores} high-sales stores!</p>
          <Cookies stores={stores} />
          <Form onAddStore={setFormValues} />
        </main>
        <Footer />
      </AppContext.Provider>
      <input onChange={(e) => setSiteOwner(e.target.value)} />
    </>
  );
}

export default App;
