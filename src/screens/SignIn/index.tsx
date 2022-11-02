import React from 'react';
import { Platform } from 'react-native';

import AppleSvg from '../../assets/apple.svg';
import GoogleSvg from '../../assets/google.svg';

import SignInSocialButton  from '../../components/SignInSocialButton';

import { useAuth } from '../../contexts/AuthContext';

import * as S from './styles';

export function SignIn() {
    const { signInWithGoogle, signInWithApple } = useAuth();

    async function handleSignInWithGoogle() {
        try {
            await signInWithGoogle();
        } catch (error) {
            console.error(error);
        }
    }

    async function handleSignInWithApple() {
        try {
            await signInWithApple();
        } catch (error) {
            console.error(error);
        }
    }
 
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
                    <SignInSocialButton svg={GoogleSvg} onPress={handleSignInWithGoogle} title="Entrar com Google" />
                    {Platform.OS === 'ios' && <SignInSocialButton svg={AppleSvg} onPress={handleSignInWithApple} title="Entrar com Apple" />}
                </S.FooterWrapper>
            </S.Footer>
        </S.Container>
    )
}