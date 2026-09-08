function Login() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Login Page</h1>
      <input
        type="email"
        placeholder="Enter Email"
        style={{
          padding: "10px",
          width: "250px"
        }}
      />

      <br /><br />
      <input
        type="password"
        placeholder="Enter Password"
        style={{
          padding: "10px",
          width: "250px"
        }}
      />
      <br /><br />
      <button
        style={{
          padding: "10px",
          background: "black",
          color: "white",
          border: "none"
        }}
      > 
        Login
      </button>

    </div>

  );
}

export default Login;
