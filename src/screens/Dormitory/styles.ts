import { getBottomSpace, getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { AntDesign } from '@expo/vector-icons';
import { Platform } from "react-native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
    width: 100%;
    height: ${RFPercentage(42)}px;
    background-color: ${({ theme }) => theme.colors.primary};
`;

export const Breadcrumb = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    margin-top: ${getStatusBarHeight() + RFValue(50)}px;
    padding: 0 12px;
`;

export const BreadcrumbText = styled.Text`
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ theme }) => theme.colors.tertiary};
    text-transform: uppercase;
    font-size: ${RFValue(12)}px;
`;

export const ArrowBack = styled(AntDesign)`
    font-size: 16px;
    margin-right: 8px;
    color: ${({ theme }) => theme.colors.tertiary};
`

export const CarouselList = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: { paddingHorizontal: 12 }
})`
    width: 100%;
    position: absolute;
    margin-top: ${RFPercentage(28)}px;
`;

export const CarouselImage = styled.Image`
    width: ${RFValue(300)}px;
    height: ${RFValue(264)}px;
    border-radius: 6px;
    overflow: hidden;
    margin-right: 16px;
`;


export const ItemWrapper = styled.View`
    margin-top: ${RFPercentage(26)}px;
    padding: 0 12px;
`;

export const TitleItem = styled.Text`
    font-size: ${RFValue(20)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
    line-height: ${RFValue(32)}px;
    color: ${({ theme }) => theme.colors.text.neutral.white};
    padding: 0 12px;
    margin-top: 16px;
`;

export const InfoOwnerWrapper = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 16px;
`;

export const OwnerImage = styled.Image`
    width: ${RFValue(38)}px;
    height: ${RFValue(38)}px;
    border-radius: 6px;
`;

export const OwnerContainer = styled.View`
    margin-left: 8px;
`;

export const OwnerReview = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const OwnerName = styled.Text`
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.text.primary};
`;

export const OwnerType = styled.Text`
    color: ${({ theme }) => theme.colors.text.secondary};
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: ${RFValue(10)}px;
`;

export const Footer = styled.View`
    padding: 16px 24px 38px 24px;
    position: absolute;
    bottom: 0;
    border-top-width: 1px;
    border-top-color: ${({ theme }) => theme.colors.text.secondary};
    width: 100%;
    background-color: ${({ theme }) => theme.colors.background};

    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const PriceWrapper = styled.View`
    flex-direction: row;
    align-items: baseline;
`;

export const PriceCurrency = styled.Text`
    color: ${({ theme }) => theme.colors.text.secondary};
    font-family: ${({ theme }) => theme.fonts.medium};
`;

export const PriceMonthly = styled.Text`
    color: ${({ theme }) => theme.colors.text.secondary};
    font-family: ${({ theme }) => theme.fonts.medium};
`;

export const Price = styled.Text`
    color: ${({ theme }) => theme.colors.text.secondary};
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFValue(22)}px;
`;

export const BookingNow = styled.TouchableOpacity`
    background-color: ${({ theme }) => theme.colors.tertiary};
    padding: 12px 24px;
    border-radius: 5px;
`;

export const BookingNowText = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.text.neutral.white};
`;

export const ItemCommodities = styled.View`
    margin-top: 24px;
    border-top-width: 1px;
    border-top-color: ${({ theme }) => theme.colors.text.secondary};
`;

export const CommoditiesTitle = styled.Text`
    margin-top: 16px;
    margin-bottom: 12px;
    font-size: ${RFValue(16)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ theme }) => theme.colors.text.primary};
`;

export const CommoditiesList = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
})`
    width: 100%;
`;

export const CommoditiesListItem = styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: 16px;
    background-color: ${({ theme }) => theme.colors.text.neutral.white};
    padding: 16px 32px;
    width: ${RFValue(200)}px;
    border-radius: 6px;
    margin-right: 12px;
`;

export const CommoditiesListItemText = styled.Text`
    margin-left: 16px;
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFValue(12)}px;
    color: ${({ theme }) => theme.colors.text.secondary};
`;