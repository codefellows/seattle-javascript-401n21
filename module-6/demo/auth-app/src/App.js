import LoginContext from './auth/context.js';
import Auth from './auth/Auth.js';
import Login from './auth/Login.js';

function App() {
  return (
    <LoginContext>

      <header>
        <Login />
      </header>

      <main>

        <Auth>
          <div>Any logged in user can see this</div>
        </Auth>

        <Auth capability="create">
          <div>Users that can create can see this</div>
        </Auth>

        <Auth capability="update">
          <div>Users that can update can see this</div>
        </Auth>

        <Auth capability="delete">
          <div>Users that can delete can see this</div>
        </Auth>

      </main>

    </LoginContext>
  );
}

export default App;
