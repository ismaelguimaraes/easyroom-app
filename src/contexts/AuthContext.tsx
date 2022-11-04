import React, { createContext, ReactNode, useContext, useState, useEffect } from "react";

import * as AuthSession from 'expo-auth-session';
import * as AppleAuthenticate from 'expo-apple-authentication';

import AsyncStorage from '@react-native-async-storage/async-storage';

const { CLIENT_ID } = process.env;
const { REDIRECT_URI } = process.env;

interface AuthProviderProps {
    children: ReactNode;
}

interface UserData {
    id: string;
    name: string;
    email: string;
    photo?: string;
}

interface AuthContextData {
    user: UserData;
    signInWithGoogle: () => Promise<void>;
    signInWithApple: () => Promise<void>;
}

interface AuthorizationResponse {
    params: {
        access_token: string;
    };
    type: string;
}

const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<UserData>({} as UserData);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        async function loadUserStorageDate(): Promise<void> {
            await AsyncStorage.removeItem('@easyroom:user');
            const data = await AsyncStorage.getItem('@easyroom:user');

            if (data) {
                const userLogged = JSON.parse(data) as UserData;
                setUser(userLogged);
            }
            setIsLoading(false);
        }

        loadUserStorageDate();
    }, []);

    async function signInWithGoogle() {
        try {
            const RESPONSE_TYPE = 'token';
            const SCOPE = encodeURI('profile email');

            const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

            const { type, params } = await AuthSession.startAsync({ authUrl }) as AuthorizationResponse;
            
            if (type === 'success') {
                const response = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.access_token}`);
                const userInfo = await response.json();

                const userLogged: UserData = {
                    id: userInfo.id,
                    email: userInfo.email,
                    name: userInfo.given_name,
                    photo: userInfo.picture
                }
                
                setUser(userLogged);
                await AsyncStorage.setItem('@easyroom:user', JSON.stringify(userLogged));
            }
        } catch (error: any) {
            throw new Error(error);
        }
    }

    async function signInWithApple() {
        try {
            const credential = await AppleAuthenticate.signInAsync({
                requestedScopes: [
                    AppleAuthenticate.AppleAuthenticationScope.FULL_NAME,
                    AppleAuthenticate.AppleAuthenticationScope.EMAIL,
                ]
            });

            if (credential) {
                const userLogged: UserData = {
                    id: credential.user,
                    email: credential.email!,
                    name: credential.fullName!.givenName!,
                    photo: undefined
                }
                
                setUser(userLogged);
                await AsyncStorage.setItem('@easyroom:user', JSON.stringify(userLogged));
            }
        } catch (error: any) {
            throw new Error(error);
        }
    }

    return (
        <AuthContext.Provider value={{ 
            user,
            signInWithGoogle,
            signInWithApple
        }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext);
    return context;
}

export { AuthProvider, useAuth };