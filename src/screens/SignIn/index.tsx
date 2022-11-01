import React from 'react';

import AppleSvg from '../../assets/apple.svg';
import GoogleSvg from '../../assets/google.svg';

import SignInSocialButton  from '../../components/SignInSocialButton';

import { useAuth } from '../../contexts/AuthContext';

import * as S from './styles';

export function SignIn() {
    const { signInWithGoogle } = useAuth();

    async function handleSignInWithGoogle() {
        try {
            await signInWithGoogle();
        } catch (error) {
            console.error(error);
        }
    }

    const SocialButtons = [
        {
            svg: GoogleSvg,
            title: "Entrar com Google",
            onPress: handleSignInWithGoogle,
        },
        {
            svg: AppleSvg,
            title: "Entrar com Apple"
        }
    ]

    return (
        <S.Container>
            <S.Header>
                <S.TitleWrapper>
                    <S.Title>Encontre o {'\n'}Dormitório ideal {'\n'}para o seu sonho</S.Title>
                </S.TitleWrapper>
                <S.SignInTitle>Faça seu login com {'\n'} uma das contas abaixo</S.SignInTitle>
            </S.Header>
            <S.Footer>
                <S.FooterWrapper>
                    {SocialButtons.map((socialButton, index) => (
                        <SignInSocialButton key={index} svg={socialButton.svg} onPress={socialButton.onPress} title={socialButton.title} />
                    ))}
                </S.FooterWrapper>
            </S.Footer>
        </S.Container>
    )
}