/* External */ 
import { TouchableOpacityProps } from 'react-native';

/* Styled Components */ 
import { Container, Title, IconPlus, IconPencilSimpleLine, IconTrash } from './styles';

type IconTypes = 'add' | 'edit' | 'remove';

type ButtonTypes = 'solid' | 'outline';

type ButtonSize = 'large' | 'auto';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  icon?: IconTypes;
  variant?: ButtonTypes;
  size?: ButtonSize;
}

export function Button({ title, icon, variant = 'solid', size = 'large', ...rest }: ButtonProps) {
  const ButtonIcons = {
    add: <IconPlus variant={variant} />,
    edit: <IconPencilSimpleLine variant={variant} />,
    remove: <IconTrash variant={variant} />,
  };

  return (
    <Container variant={variant} size={size} {...rest}>
      {icon && ButtonIcons[icon]}
      <Title variant={variant}>{title}</Title>
    </Container>
  )
}