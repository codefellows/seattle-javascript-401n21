import { useContext } from "react";
import { AppContext } from "../app.context";

export const Footer = () => {
  const { siteOwner } = useContext(AppContext);

  return (
    <footer>
      <a href="http://davidsouther.com">Made by {siteOwner}</a>
    </footer>
  );
};
