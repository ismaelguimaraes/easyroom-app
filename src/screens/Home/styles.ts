import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { FontAwesome5 as FA5 } from '@expo/vector-icons';
import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
    width: 100%;
    height: ${RFPercentage(42)}px;
    background-color: ${({ theme }) => theme.colors.primary};

    justify-content: center;
    align-items: flex-start;
    flex-direction: row;
`;

export const UserContainer = styled.View`
    width: 100%;
    padding: 0 24px;
    margin-top: ${getStatusBarHeight() + RFValue(44)}px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const UserInfo = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Photo = styled.Image`
    width: ${RFValue(48)}px;
    height: ${RFValue(48)}px;
    border-radius: 10px;
`;

export const UserWrapper = styled.View`
    margin-left: 18px;
`;

export const UserGreeting = styled.Text`
    color: ${({ theme }) => theme.colors.text.neutral.white};
    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
`;

export const UserName = styled.Text`
    color: ${({ theme }) => theme.colors.text.neutral.white};
    font-size: ${RFValue(18)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
`;

export const FontAwesome5 = styled(FA5)`
    color: ${({ theme }) => theme.colors.tertiary};
    font-size: ${RFValue(22)}px;
`;

export const HighlightUniversitiesCards = styled.ScrollView.attrs({
    showsHorizontalScrollIndicator: false,
    horizontal: true,
    contentContainerStyle: { paddingHorizontal: 24 }
})`
    width: 100%;
    position: absolute;
    margin-top: ${RFPercentage(27)}px;
`;

export const List = styled.View`
    flex: 1;
    padding: 0 24px;
    margin-top: ${RFPercentage(19)}px;
`;

export const ListTitle = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFValue(20)}px;
    color: ${({ theme }) => theme.colors.text.primary};
    margin-bottom: 16px;
`;

export const DormitoriesCardList = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: getBottomSpace(),
})``;