import AuthForm from "../../components/AuthForm"

const Register = ({ onRegister, onLogin }: any) => {
  return (
    <AuthForm
      title="Create Your Account"
      subtitle="Register to start selling your books"
      fields={[
        { placeholder: "Full Name" },
        { placeholder: "Email" },
        { placeholder: "Password", type: "password" }
      ]}
      primaryText="Register"
      secondaryText="Already have an account? Login"
      onPrimary={onRegister}
      onSecondary={onLogin}
    />
  )
}

export default Register
