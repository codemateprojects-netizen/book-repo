import "./auth.css"

type Field = {
  placeholder: string
  type?: string
}

type AuthFormProps = {
  title: string
  subtitle: string
  fields: Field[]
  primaryText: string
  secondaryText: string
  onPrimary: () => void
  onSecondary: () => void
}

const AuthForm: React.FC<AuthFormProps> = ({
  title,
  subtitle,
  fields,
  primaryText,
  secondaryText,
  onPrimary,
  onSecondary
}) => {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2 className="auth-title">{title}</h2>
        <p className="auth-subtitle">{subtitle}</p>

        <div className="auth-fields">
          {fields.map((field, i) => (
            <input
              key={i}
              type={field.type || "text"}
              placeholder={field.placeholder}
              className="auth-input"
            />
          ))}
        </div>

        <button className="auth-button" onClick={onPrimary}>
          {primaryText}
        </button>

        <p className="auth-link" onClick={onSecondary}>
          {secondaryText}
        </p>
      </div>
    </div>
  )
}

export default AuthForm
