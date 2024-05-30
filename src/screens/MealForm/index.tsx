/* External */ 
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

/* Components */ 
import { Header, Button } from '../../components';
import { Input, TypeButton } from './components';

/* Styled Components */ 
import { 
  Container, 
  Content, 
  FormContent,
  DateWrapper, 
  GroupTypeButton, 
  TypeButtonWrapper, 
  Label, 
  ErrorText,
  InputWrapper,
} from './styles';

type ErrorType = {
  name: string;
  description: string;
  date: string;
  hour: string;
  isInsideTheDiet: string;
}

export default function MealForm() {
  const navigation = useNavigation();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    date: '',
    hour: '',
    isInsideTheDiet: null,
  });
  const [errors, setErrors] = useState<ErrorType>({} as ErrorType);

  function formValidate() {
    const newErrors: any = {};

    if (!formData.name) {
      newErrors.name = 'O nome é obrigatório.';
    }

    if (!formData.description) {
      newErrors.description = 'A descrição é obrigatória.';
    }

    if (!formData.date) {
      newErrors.date = 'A data é obrigatória';
    }

    if (!formData.hour) {
      newErrors.hour = 'A hora é obrigatória';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return false;
    }

    setErrors({} as ErrorType);
    return true;
  }

  function handleChangeInput(field: string, value: string) {
    setFormData({
      ...formData,
      [field]: value,
    })
  }

  function handleRegisterMeal() {
    if (formValidate()) {
      
    } else {
      
    }
    // navigation.navigate('home'); 
  }

  return (
    <Container>
      <Header title="Nova refeição" />
      <Content>
        <FormContent>
          <InputWrapper>
            <Input 
              label="Nome" 
              value={formData.name} 
              onChangeText={(value) => handleChangeInput('name', value)}
            />
            {errors?.name && <ErrorText>{errors.name}</ErrorText>}
          </InputWrapper>
          <InputWrapper>
            <Input 
              label="Descrição" 
              multiline={true} 
              value={formData.description} 
              onChangeText={(value) => handleChangeInput('description', value)} 
            />
            {errors?.description && <ErrorText>{errors.description}</ErrorText>}
          </InputWrapper>
          <DateWrapper>
            <InputWrapper size="small">
              <Input 
                label="Data" 
                value={formData.date} 
                onChangeText={(value) => handleChangeInput('date', value)} 
              />
              {errors?.date && <ErrorText>{errors.date}</ErrorText>}
            </InputWrapper>
            <InputWrapper size="small">
              <Input 
                label="Hora" 
                value={formData.hour} 
                onChangeText={(value) => handleChangeInput('hour', value)} 
              />
              {errors?.hour && <ErrorText>{errors.hour}</ErrorText>}
            </InputWrapper>
          </DateWrapper>
          <GroupTypeButton>
            <Label>Está dentro da dieta?</Label>
            <TypeButtonWrapper>
              <TypeButton 
                type='inside' 
                title="Sim" 
                isActive={false} 
                onPress={() => null} 
              />
              <TypeButton 
                type='outside' 
                title="Não" 
                isActive={true} 
                onPress={() => null}
              />
            </TypeButtonWrapper>
          </GroupTypeButton>
        </FormContent>
        <Button 
          title="Cadastrar refeição" 
          onPress={handleRegisterMeal}  
        />
      </Content>
    </Container>
  )
}