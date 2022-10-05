// A Header component

const Header = ({ siteName, headerColor }) => (
  <header
    style={{
      color: `rgb(${headerColor[0]}, ${headerColor[1]}, ${headerColor[2]})`,
    }}
  >
    <h1>{siteName}</h1>
  </header>
);

const App = () => (
  <>
    <Header siteName="My Website" headerColor={[22, 58, 77]} />
    <Cookie />;
  </>
);

const Cookie = () => {
  // this.state = initialValue
  let [clicks, setClicks] = useState(/* initialValue */ 0); // A react hook that remembers a value over time
  // "time" being multiple react renders
  // Tracks one "piece" of data, but as complicated as you want
  //     number, string, object, etc

  const handleClick = () => {
    console.log("Cookies clicked");
    // this.setState({ clicks: this.state.clicks + 1 });
    setClicks(clicks + 1); // ✅
  };
  return (
    <>
      {/* <button onClick={() => setState(state + 1)}>{state}</button> */}
      <button onClick={handleClick}>{clicks}</button>
    </>
  );
};

react.rootComponent().render(App);
