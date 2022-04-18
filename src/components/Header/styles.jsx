import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: #fff;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    padding-left: 10px;
    padding-right: 10px;
`;

export const NameText = styled.Text`
    font-size: 20;
    font-weight: 100;
    color: #DDD;
`;

export const LogoutButton = styled.TouchableOpacity`
    color: #fafafa;
    border-radius: 5;
    border: none;
`;