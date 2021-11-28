import './styles.css';

function SignUp() {
  return (
    <div className="container-login-main">
      <div className="login-container">
        <h1>Login</h1>
        <div className="form-container">
          <form className="form-login" action="">
            <input type="text" placeholder="Digite seu usuário" />
            <input type="password" placeholder="Digite sua senha" />
            <button>Entrar</button>
          </form>
        </div>
      </div>
    </div>

  );
}

export default SignUp;