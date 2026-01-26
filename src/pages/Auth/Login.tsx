import AuthForm from "../../components/AuthForm"

const Login = ({ onLogin, onRegister }: any) => {
  return (
    <AuthForm
      title="Login to STUVO"
      subtitle="Login to sell your books and earn money"
      fields={[
        { placeholder: "Email" },
        { placeholder: "Password", type: "password" }
      ]}
      primaryText="Login"
      secondaryText="New user? Register here"
      onPrimary={onLogin}
      onSecondary={onRegister}
    />
  )
}

export default Login
