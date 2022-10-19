import { useContext } from "react";
import { AppContext } from "../app.context";

export const Header = () => {
  const context = useContext(AppContext);
  return (
    <header>
      <h1>{context.siteOwner}'s Sam &amp; Cookies</h1>
    </header>
  );
};
