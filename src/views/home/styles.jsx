import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 15px;
`;

export const ModalContainer = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const Input = styled.TextInput`
  flex: 1;
  height: 40px;
  background-color: #fff;
  padding: 0 20px;
  border-radius: 5px;
`;

export const InputPreco = styled.TextInput`
  width: 60%;
  height: 40px;
  background-color: #fff;
  padding: 0 20px;
  border-radius: 5px;
`;

export const InputQtd = styled.TextInput`
  flex: 1;
  height: 40px;
  background-color: #fff;
  padding: 0 20px;
  border-radius: 5px;
  margin-left: 10px;
`;
export const ButtonModal = styled.TouchableOpacity`
  width: 60%;
  height: 40px;
  background-color: #23a109;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.TouchableOpacity`
  flex: 1;
  height: 40px;
  background-color: #23a109;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
`;

export const ButtonFooter = styled.TouchableOpacity`
  display: ${props => props.mostrar ? 'flex' : 'none'};
  height: 40px;
  background-color: #23a109;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

export const FormAddNewTask = styled.View`
  flex-direction: row;
  margin-bottom: 15px;
`;


export const CardView = styled.View`
  
  background-color: #fff;
  margin-bottom: 10px;
  border-radius: 5px;
  padding: 10px 20px;
  justify-content: space-between;
  flex-direction: row;
`;

export const CardText = styled.Text`
font-size: 18;
font-weight: 200;
color: black;
`;

export const CardButton = styled.TouchableOpacity`
background-color: blue;
color: #f3f3f3;

`;
