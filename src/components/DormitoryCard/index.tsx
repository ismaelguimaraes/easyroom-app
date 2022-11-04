import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { DormitoriesProps } from '../../@types/dormitories';

import * as S from './styles';

interface DormitoryCardProps extends TouchableOpacityProps {
    item: DormitoriesProps;
}

export default function DormitoryCard({
    item,
    ...rest
}: DormitoryCardProps) {
    const { name, owner, photos, type } = item;

    return (
        <S.Container {...rest}>
            <S.Image source={{ uri: photos[0] }}>
                
            </S.Image>
            <S.InfoWrapper>
                <S.InfoRoomWrapper>
                    <S.RoomType>{type}</S.RoomType>
                    <S.RoomName>{name}</S.RoomName>
                </S.InfoRoomWrapper>
                <S.OwnerPhoto source={{ uri: owner.photo }}/>
            </S.InfoWrapper>
        </S.Container>
    )
}