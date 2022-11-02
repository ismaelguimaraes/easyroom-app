import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    margin-bottom: 24px;
`;

export const Image = styled.ImageBackground`
    height: ${RFValue(235)}px;
    border-radius: 5px;
    overflow: hidden;
`;

export const InfoWrapper = styled.View`
    margin-top: 8px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const InfoRoomWrapper = styled.View``;

export const RoomType = styled.Text`
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: ${RFValue(10)}px;
    color: ${({ theme }) => theme.colors.text.secondary};
`;

export const RoomName = styled.Text`
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.text.primary};
`;

export const OwnerPhoto = styled.Image`
    width: ${RFValue(32)}px;
    height: ${RFValue(32)}px;
    border-radius: 10px;
`;