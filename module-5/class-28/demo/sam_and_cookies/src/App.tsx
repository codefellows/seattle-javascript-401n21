import "./App.css";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Cookies, CookieStand } from "./components/cookies";
import { FormEvent, useState } from "react";

const STARTING_STORES = [
  new CookieStand("Seattle", 23, 65, 6.3),
  new CookieStand("Tokyo", 3, 24, 1.2),
  new CookieStand("Dubai", 11, 38, 3.7),
  new CookieStand("Paris", 20, 38, 2.3),
  new CookieStand("Lima", 2, 16, 4.6),
];

function App() {
  const [stores, setStores] = useState(STARTING_STORES);

  function addStore(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const target = e.target as HTMLFormElement;

    const name = (target[0] as HTMLInputElement).value;
    const min = (target[1] as HTMLInputElement).value;
    const max = (target[2] as HTMLInputElement).value;
    const avg = (target[3] as HTMLInputElement).value;

    const store = new CookieStand(name, Number(min), Number(max), Number(avg));
    setStores([...stores, store]);
  }

  return (
    <>
      <Header />
      <Cookies stores={stores} />
      <form onSubmit={addStore}>
        <label>
          Store name <input name="store" />
        </label>
        <br />
        <label>
          Min Customers per hour <input name="min" />
        </label>
        <br />
        <label>
          Max customers per hour <input name="max" />
        </label>
        <br />
        <label>
          Average cookies per sale <input name="avg" />
        </label>
        <br />
        <button type="submit">Add store</button>
      </form>
      <Footer />
    </>
  );
}

export default App;
