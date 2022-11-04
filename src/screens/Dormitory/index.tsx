import React from 'react';
import Stars from 'react-native-stars';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5, MaterialIcons, Ionicons, MaterialCommunityIcons   } from '@expo/vector-icons';

import { DormitoriesProps } from '../../@types/dormitories';

import * as S from './styles';

interface DormitoryProps {
    route: {
        params: {
            item: DormitoriesProps;
        }
    }
}

export function Dormitory({ route }: DormitoryProps) {
    const navigation = useNavigation();
    const { item } = route.params;

    return (
        <S.Container>
            <S.Header>
                <S.Breadcrumb onPress={() => navigation.goBack()}>
                    <S.ArrowBack name="arrowleft" />
                    <S.BreadcrumbText>Voltar para o início</S.BreadcrumbText>
                </S.Breadcrumb>
                <S.TitleItem>{item.name}</S.TitleItem>
            </S.Header>
            

            <S.CarouselList>
                {item.photos.map((photo, index) => <S.CarouselImage key={index} source={{ uri: photo }} />)}
            </S.CarouselList>

            <S.ItemWrapper>
                <S.OwnerReview>
                    <S.InfoOwnerWrapper>
                        <S.OwnerImage source={{ uri: item.owner.photo }} />
                        <S.OwnerContainer>
                                <S.OwnerName>{item.owner.name}</S.OwnerName>
                                <S.OwnerType>Proprietário</S.OwnerType>
                        </S.OwnerContainer>
                    </S.InfoOwnerWrapper>
                    <Stars
                        default={3.5}
                        spacing={4}
                        count={5}
                        half
                        fullStar={<FontAwesome name="star" size={20} color="#eece02" />}
                        emptyStar={<FontAwesome name="star-o" size={20} color="#eece02" />}
                        halfStar={<FontAwesome name="star-half-empty" size={20} color="#eece02" />}
                    />
                </S.OwnerReview>

                <S.ItemCommodities>
                    <S.CommoditiesTitle>O que esse lugar oferece</S.CommoditiesTitle>
                    <S.CommoditiesList>
                        {[
                            {
                                key: 'Água Quente',
                                icon: <FontAwesome5 name="shower" size={24} />
                            },
                            {
                                key: 'Equipamento para exercícios',
                                icon: <MaterialIcons name="fitness-center" size={24} />
                            },
                            {
                                key: 'Wi-fi',
                                icon: <Ionicons name="wifi" size={24} />
                            },
                            {
                                key: 'Vista para o mar',
                                icon: <FontAwesome5 name="water" size={24} />
                            },
                            {
                                key: 'Acesso ao lago',
                                icon: <FontAwesome5 name="fish" size={24} />
                            },
                            {
                                key: 'Estacionamento Incluído',
                                icon: <FontAwesome5 name="parking" size={24} />
                            },
                            {
                                key: 'Academia Compartilhada',
                                icon: <MaterialCommunityIcons name="weight-lifter" size={24} />
                            },
                            {
                                key: 'Permitido Animais',
                                icon: <MaterialIcons name="pets" size={24} color="black" />
                            },
                        ].map((item) => (
                            <S.CommoditiesListItem key={item.key}>
                                {item.icon}
                                <S.CommoditiesListItemText>{item.key}</S.CommoditiesListItemText>
                            </S.CommoditiesListItem>
                        ))}
                    </S.CommoditiesList>
                </S.ItemCommodities>
            </S.ItemWrapper>
            
            <S.Footer>
                <S.PriceWrapper>
                    <S.PriceCurrency>R$</S.PriceCurrency>
                    <S.Price>1.500,00</S.Price>
                    <S.PriceMonthly>/mês</S.PriceMonthly>
                </S.PriceWrapper>
                <S.BookingNow>
                    <S.BookingNowText>RESERVAR</S.BookingNowText>
                </S.BookingNow>
            </S.Footer>
        </S.Container>
    )
}