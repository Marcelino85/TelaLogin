import { ButtonContainer } from "./style";
import { IButtonProps } from "./type";

const Button = ({ title, onClick }: IButtonProps) => {
  return <ButtonContainer onClick={onClick}>{title}</ButtonContainer>;
};

export default Button;