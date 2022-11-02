import React from 'react';
import HighlightUniversityCard from '../../components/HighlightUniversityCard';

import { useAuth } from '../../contexts/AuthContext';

import * as S from './styles';

export function Home() {
    const { user } = useAuth();

    return (
        <S.Container>
            <S.Header>
                <S.UserContainer>
                    <S.UserInfo>
                        <S.Photo source={{ uri: user?.photo }} />
                        <S.UserWrapper>
                            <S.UserGreeting>Olá,</S.UserGreeting>
                            <S.UserName>{user.name}</S.UserName>
                        </S.UserWrapper>
                    </S.UserInfo>
                    <S.FontAwesome5 name="user" />
                </S.UserContainer>
            </S.Header>

            <S.HighlightUniversitiesCards>
                <HighlightUniversityCard />
                <HighlightUniversityCard />
                <HighlightUniversityCard />
                <HighlightUniversityCard />
            </S.HighlightUniversitiesCards>
        </S.Container>
    )
}