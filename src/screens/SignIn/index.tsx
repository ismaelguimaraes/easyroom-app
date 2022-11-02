import React,  { useState } from 'react';
import { Platform, ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components';

import AppleSvg from '../../assets/apple.svg';
import GoogleSvg from '../../assets/google.svg';

import SignInSocialButton  from '../../components/SignInSocialButton';

import { useAuth } from '../../contexts/AuthContext';

import * as S from './styles';

export function SignIn() {
    const { signInWithGoogle, signInWithApple } = useAuth();

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const theme = useTheme();

    async function handleSignInWithGoogle() {
        try {
            setIsLoading(true);
            await signInWithGoogle();
        } catch (error) {
            console.error(error);
            setIsLoading(false);
        }
    }

    async function handleSignInWithApple() {
        try {
            setIsLoading(true);
            await signInWithApple();
        } catch (error) {
            console.error(error);
            setIsLoading(false);
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
            {isLoading && <ActivityIndicator color={theme.colors.text.neutral.white} size="small" style={{ marginTop: 18 }} />}
        </S.Container>
    )
}