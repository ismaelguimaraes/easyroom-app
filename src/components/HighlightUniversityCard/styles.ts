import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";


export const Container = styled.ImageBackground`
    width: ${RFValue(300)}px;
    height: ${RFValue(200)}px;
    border-radius: 6px;
    overflow: hidden;
    margin-right: 16px;
`;

export const ContainerWrapper = styled.View`
    background-color: rgba(0,0,0,0.6);
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    font-size: ${RFValue(28)}px;
    color: ${({ theme }) => theme.colors.text.neutral.white};
    font-family: ${({ theme }) => theme.fonts.bold};
`;

export const Dormitories = styled.Text`
    font-size: ${RFValue(16)}px;
    color: ${({ theme }) => theme.colors.text.neutral.white};
    font-family: ${({ theme }) => theme.fonts.regular};
`;