import React from 'react';

import { DormitoriesProps } from '../../@types/dormitories';

import * as S from './styles';

interface HighlightUniversityCardProps {
    name: string;
    photo: string;
    dormitories: DormitoriesProps[];
}

export default function HighlightUniversityCard({
    name,
    dormitories,
    photo
}: HighlightUniversityCardProps) {
    return (
        <S.Container source={{ uri: photo }}>
            <S.ContainerWrapper>
                <S.Title>{name}</S.Title>
                <S.Dormitories>{dormitories.length} {dormitories.length === 1 ? 'dormitório' : 'dormitórios'}</S.Dormitories>
            </S.ContainerWrapper>
        </S.Container>
    );
}