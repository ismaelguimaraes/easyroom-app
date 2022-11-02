import React from 'react';
import { View } from 'react-native';

import * as S from './styles';

interface HighlightUniversityCardProps {
    title: string;
    dormitories: number;
}

export default function HighlightUniversityCard() {
    return (
        <S.Container source={{ uri: 'https://jpimg.com.br/uploads/2021/06/ufrj.jpg' }}>
            <S.ContainerWrapper>
                <S.Title>UFRJ</S.Title>
                <S.Dormitories>58 dormitórios</S.Dormitories>
            </S.ContainerWrapper>
        </S.Container>
    );
}