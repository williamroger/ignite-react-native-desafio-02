/* External */ 
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Masks } from 'react-native-mask-input';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';

/* Components */ 
import { Header, Button } from '../../components';
import { Input, TypeButton } from './components';

/* Storage */ 
import { mealCreate } from '../../storage/meal/mealCreate';

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

export type MealType = {
  name: string;
  description: string;
  date: string;
  hour: string;
  isInsideTheDiet: string;
}

const HOUR_MASK = [/\d/, /\d/, ":", /\d/, /\d/];

export default function MealForm() {
  const navigation = useNavigation();
  const [formData, setFormData] = useState<MealType>({
    name: '',
    description: '',
    date: '',
    hour: '',
    isInsideTheDiet: '',
  });
  const [errors, setErrors] = useState<MealType>({} as MealType);

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

    if (!formData.isInsideTheDiet) {
      newErrors.isInsideTheDiet = 'Está dentro da dieta é obrigatório.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return false;
    }

    setErrors({} as MealType);
    return true;
  }

  function handleChangeInput(field: string, value: string) {
    setFormData({
      ...formData,
      [field]: value,
    })
  }

  async function handleRegisterMeal() {
    if (formValidate()) {
      await mealCreate(formData);
      
      navigation.navigate('feedback', { isInsideTheDiet: formData.isInsideTheDiet }); 
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
                  keyboardType="number-pad"
                  onChangeText={(value) => handleChangeInput('date', value)} 
                  mask={Masks.DATE_DDMMYYYY}
                />
                {errors?.date && <ErrorText>{errors.date}</ErrorText>}
              </InputWrapper>
              <InputWrapper size="small">
                <Input 
                  label="Hora" 
                  value={formData.hour} 
                  keyboardType="number-pad"
                  onChangeText={(value) => handleChangeInput('hour', value)} 
                  mask={HOUR_MASK}
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
                  isActive={formData.isInsideTheDiet === 'inside'} 
                  onPress={() => handleChangeInput('isInsideTheDiet', 'inside')} 
                />
                <TypeButton 
                  type='outside' 
                  title="Não" 
                  isActive={formData.isInsideTheDiet === 'outside'} 
                  onPress={() => handleChangeInput('isInsideTheDiet', 'outside')} 
                />
              </TypeButtonWrapper>
              {errors?.isInsideTheDiet && <ErrorText>{errors.isInsideTheDiet}</ErrorText>}
            </GroupTypeButton>
          </FormContent>
          <Button 
            title="Cadastrar refeição" 
            onPress={handleRegisterMeal}  
          />
        </Content>
      </Container>
    </TouchableWithoutFeedback>
  )
}