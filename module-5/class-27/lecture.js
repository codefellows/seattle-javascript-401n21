// A Header component

// export class Header extends React.Component {
//   render() {
//     // Change "My Website" to be a value passed from the calling component
//     return <header><h1>{this.props.siteName}</h1></header>;
//   }
// }

// const Header = (props) => (
//   <header>
//     <h1>{props.siteName}</h1>
//   </header>
// );

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
    <Header siteName="My Website" headerColor={[2, 5, 7]} />
    <Cookie />;
  </>
);

// Use it in an app
// import {Header} from './header';
// class App extends React.Component {
//   render() {
//     return
//     (<>
//       <Header siteName="My Website" />
//       <Cookie />;
//     </>);
//   }
// }

// export class Cookie extends React.Component {
//   constructor(props) {
//     super(props);
//     // this.state = { clicks: 0 };
//   }

//   handleClick = () => {
//     console.log("Cookies clicked");
//     // this.setState({ clicks: this.state.clicks + 1 });
//   };

//   render() {
//     return <button onClick={this.handleClick}>{/*this.state.clicks*/}5</button>;
//   }
// }

const Cookie = () => {
  const handleClick = () => {
    console.log("Cookies clicked");
    // this.setState({ clicks: this.state.clicks + 1 });
  };
  return (
    <>
      <button onClick={handleClick}>{/* this.state.clicks */} 5 </button>
    </>
  );
};

react.rootComponent().render(App);
