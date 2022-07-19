import styled from 'styled-components/native';

export const Container = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding-left: 15px;
    padding-right: 15px;
    height: 30px
`;

export const NameText = styled.Text`
    font-size: 20;
    font-weight: 100;
    color: #5AE;
`;

export const LogoutButton = styled.TouchableOpacity`
    color: #5AE;
    border-radius: 5;
    border: none;
`;