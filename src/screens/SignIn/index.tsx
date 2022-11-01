import React from 'react';

import AppleSvg from '../../assets/apple.svg';
import GoogleSvg from '../../assets/google.svg';

import * as S from './styles';

export function SignIn() {
    return (
        <S.Container>
            <S.Header>
                <S.TitleWrapper>
                    <S.Title>Encontre o {'\n'}Dormitório ideal {'\n'}para o seu sonho</S.Title>
                </S.TitleWrapper>
                <S.SignInTitle>Faça seu login com {'\n'} uma das contas abaixo</S.SignInTitle>
            </S.Header>
            <S.Footer>
                
            </S.Footer>
        </S.Container>
    )
}