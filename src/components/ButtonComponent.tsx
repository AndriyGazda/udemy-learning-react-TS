interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ children, ...buttonProps }: ButtonProps) => {
  return <button {...buttonProps}>{children}</button>;
};

export default Button;
