import { Container, Label, TextInput, } from './styles';
import { TextInputProps } from 'react-native';

interface InputProps extends TextInputProps {
  label: string;
  size?: 'large' | 'small';
}

export default function Input({ label, size = 'large', ...rest }: InputProps) {
  return (
    <Container size={size}>
      <Label>{label}</Label>
      <TextInput {...rest} />
    </Container>
  )
}