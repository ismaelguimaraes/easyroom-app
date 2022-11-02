import React from 'react';
import UniversitiesProps from '../../@types/universities';
import HighlightUniversityCard from '../../components/HighlightUniversityCard';

import { useAuth } from '../../contexts/AuthContext';

import * as S from './styles';

const universities: UniversitiesProps[] = [
    {
        name: 'UFRJ',
        photo: 'https://jpimg.com.br/uploads/2021/06/ufrj.jpg',
        dormitories: [
            {
                name: 'Quarto muito maneiro com sala...',
                type: 'Quarto privativo',
                owner: {
                    name: 'Ismael Borba',
                    photo: 'https://avatars.githubusercontent.com/u/56137836?v=4',
                    telephones: [
                        {
                            ddd: '21',
                            number: '98671-5747'
                        }
                    ]
                },
                photos: [
                    'https://imagens-revista.vivadecora.com.br/uploads/2020/05/quartos-bonitos-de-solteiro-decorado-com-bancada-de-estudos-Foto-Dicas-de-Mulher.jpg',
                    'https://casaeconstrucao.org/wp-content/uploads/2020/01/Quarto-para-meninas-Tumblr.jpg',
                    'http://static.casadevalentina.com.br/assets/files/2012/10/jpg/5087f0502033e-820_decoracao-morar-mais-por-menos-quarto-00.jpg'
                ]
            },
            {
                name: 'Quarto muito simples',
                type: 'Quarto compartilhado',
                owner: {
                    name: 'Ismael Borba',
                    photo: 'https://avatars.githubusercontent.com/u/56137836?v=4',
                    telephones: [
                        {
                            ddd: '21',
                            number: '98671-5747'
                        }
                    ]
                },
                photos: [
                    'https://www.cadernodeviagem.com.br/wp-content/uploads/2019/11/dormitorio-freehand-miami-hostel-1024x683.jpg',
                    'https://www.cadernodeviagem.com.br/wp-content/uploads/2019/11/dormitorios-de-hostel-1024x683.jpg'
                ]
            }
        ]
    },
    {
        name: 'USP',
        photo: 'https://www.pragmatismopolitico.com.br/wp-content/uploads/2017/10/usp-perde-posto-de-melhor-universidade-america-latina.jpg',
        dormitories: [
            {
                name: 'Quarto muito maneiro com sala...',
                type: 'Quarto privativo',
                owner: {
                    name: 'Ismael Borba',
                    photo: 'https://avatars.githubusercontent.com/u/56137836?v=4',
                    telephones: [
                        {
                            ddd: '21',
                            number: '98671-5747'
                        }
                    ]
                },
                photos: [
                    'https://imagens-revista.vivadecora.com.br/uploads/2020/05/quartos-bonitos-de-solteiro-decorado-com-bancada-de-estudos-Foto-Dicas-de-Mulher.jpg',
                    'https://casaeconstrucao.org/wp-content/uploads/2020/01/Quarto-para-meninas-Tumblr.jpg',
                    'http://static.casadevalentina.com.br/assets/files/2012/10/jpg/5087f0502033e-820_decoracao-morar-mais-por-menos-quarto-00.jpg'
                ]
            },
            {
                name: 'Quarto muito simples',
                type: 'Quarto compartilhado',
                owner: {
                    name: 'Ismael Borba',
                    photo: 'https://avatars.githubusercontent.com/u/56137836?v=4',
                    telephones: [
                        {
                            ddd: '21',
                            number: '98671-5747'
                        }
                    ]
                },
                photos: [
                    'https://www.cadernodeviagem.com.br/wp-content/uploads/2019/11/dormitorio-freehand-miami-hostel-1024x683.jpg',
                    'https://www.cadernodeviagem.com.br/wp-content/uploads/2019/11/dormitorios-de-hostel-1024x683.jpg'
                ]
            },
            {
                name: 'Quarto muito maneiro com sala...',
                type: 'Quarto privativo',
                owner: {
                    name: 'Ismael Borba',
                    photo: 'https://avatars.githubusercontent.com/u/56137836?v=4',
                    telephones: [
                        {
                            ddd: '21',
                            number: '98671-5747'
                        }
                    ]
                },
                photos: [
                    'https://imagens-revista.vivadecora.com.br/uploads/2020/05/quartos-bonitos-de-solteiro-decorado-com-bancada-de-estudos-Foto-Dicas-de-Mulher.jpg',
                    'https://casaeconstrucao.org/wp-content/uploads/2020/01/Quarto-para-meninas-Tumblr.jpg',
                    'http://static.casadevalentina.com.br/assets/files/2012/10/jpg/5087f0502033e-820_decoracao-morar-mais-por-menos-quarto-00.jpg'
                ]
            },
            {
                name: 'Quarto muito simples',
                type: 'Quarto compartilhado',
                owner: {
                    name: 'Ismael Borba',
                    photo: 'https://avatars.githubusercontent.com/u/56137836?v=4',
                    telephones: [
                        {
                            ddd: '21',
                            number: '98671-5747'
                        }
                    ]
                },
                photos: [
                    'https://www.cadernodeviagem.com.br/wp-content/uploads/2019/11/dormitorio-freehand-miami-hostel-1024x683.jpg',
                    'https://www.cadernodeviagem.com.br/wp-content/uploads/2019/11/dormitorios-de-hostel-1024x683.jpg'
                ]
            },
            {
                name: 'Quarto muito maneiro com sala...',
                type: 'Quarto privativo',
                owner: {
                    name: 'Ismael Borba',
                    photo: 'https://avatars.githubusercontent.com/u/56137836?v=4',
                    telephones: [
                        {
                            ddd: '21',
                            number: '98671-5747'
                        }
                    ]
                },
                photos: [
                    'https://imagens-revista.vivadecora.com.br/uploads/2020/05/quartos-bonitos-de-solteiro-decorado-com-bancada-de-estudos-Foto-Dicas-de-Mulher.jpg',
                    'https://casaeconstrucao.org/wp-content/uploads/2020/01/Quarto-para-meninas-Tumblr.jpg',
                    'http://static.casadevalentina.com.br/assets/files/2012/10/jpg/5087f0502033e-820_decoracao-morar-mais-por-menos-quarto-00.jpg'
                ]
            },
            {
                name: 'Quarto muito simples',
                type: 'Quarto compartilhado',
                owner: {
                    name: 'Ismael Borba',
                    photo: 'https://avatars.githubusercontent.com/u/56137836?v=4',
                    telephones: [
                        {
                            ddd: '21',
                            number: '98671-5747'
                        }
                    ]
                },
                photos: [
                    'https://www.cadernodeviagem.com.br/wp-content/uploads/2019/11/dormitorio-freehand-miami-hostel-1024x683.jpg',
                    'https://www.cadernodeviagem.com.br/wp-content/uploads/2019/11/dormitorios-de-hostel-1024x683.jpg'
                ]
            },
            {
                name: 'Quarto muito maneiro com sala...',
                type: 'Quarto privativo',
                owner: {
                    name: 'Ismael Borba',
                    photo: 'https://avatars.githubusercontent.com/u/56137836?v=4',
                    telephones: [
                        {
                            ddd: '21',
                            number: '98671-5747'
                        }
                    ]
                },
                photos: [
                    'https://imagens-revista.vivadecora.com.br/uploads/2020/05/quartos-bonitos-de-solteiro-decorado-com-bancada-de-estudos-Foto-Dicas-de-Mulher.jpg',
                    'https://casaeconstrucao.org/wp-content/uploads/2020/01/Quarto-para-meninas-Tumblr.jpg',
                    'http://static.casadevalentina.com.br/assets/files/2012/10/jpg/5087f0502033e-820_decoracao-morar-mais-por-menos-quarto-00.jpg'
                ]
            },
            {
                name: 'Quarto muito simples',
                type: 'Quarto compartilhado',
                owner: {
                    name: 'Ismael Borba',
                    photo: 'https://avatars.githubusercontent.com/u/56137836?v=4',
                    telephones: [
                        {
                            ddd: '21',
                            number: '98671-5747'
                        }
                    ]
                },
                photos: [
                    'https://www.cadernodeviagem.com.br/wp-content/uploads/2019/11/dormitorio-freehand-miami-hostel-1024x683.jpg',
                    'https://www.cadernodeviagem.com.br/wp-content/uploads/2019/11/dormitorios-de-hostel-1024x683.jpg'
                ]
            },
            {
                name: 'Quarto muito maneiro com sala...',
                type: 'Quarto privativo',
                owner: {
                    name: 'Ismael Borba',
                    photo: 'https://avatars.githubusercontent.com/u/56137836?v=4',
                    telephones: [
                        {
                            ddd: '21',
                            number: '98671-5747'
                        }
                    ]
                },
                photos: [
                    'https://imagens-revista.vivadecora.com.br/uploads/2020/05/quartos-bonitos-de-solteiro-decorado-com-bancada-de-estudos-Foto-Dicas-de-Mulher.jpg',
                    'https://casaeconstrucao.org/wp-content/uploads/2020/01/Quarto-para-meninas-Tumblr.jpg',
                    'http://static.casadevalentina.com.br/assets/files/2012/10/jpg/5087f0502033e-820_decoracao-morar-mais-por-menos-quarto-00.jpg'
                ]
            },
            {
                name: 'Quarto muito simples',
                type: 'Quarto compartilhado',
                owner: {
                    name: 'Ismael Borba',
                    photo: 'https://avatars.githubusercontent.com/u/56137836?v=4',
                    telephones: [
                        {
                            ddd: '21',
                            number: '98671-5747'
                        }
                    ]
                },
                photos: [
                    'https://www.cadernodeviagem.com.br/wp-content/uploads/2019/11/dormitorio-freehand-miami-hostel-1024x683.jpg',
                    'https://www.cadernodeviagem.com.br/wp-content/uploads/2019/11/dormitorios-de-hostel-1024x683.jpg'
                ]
            },
            {
                name: 'Quarto muito maneiro com sala...',
                type: 'Quarto privativo',
                owner: {
                    name: 'Ismael Borba',
                    photo: 'https://avatars.githubusercontent.com/u/56137836?v=4',
                    telephones: [
                        {
                            ddd: '21',
                            number: '98671-5747'
                        }
                    ]
                },
                photos: [
                    'https://imagens-revista.vivadecora.com.br/uploads/2020/05/quartos-bonitos-de-solteiro-decorado-com-bancada-de-estudos-Foto-Dicas-de-Mulher.jpg',
                    'https://casaeconstrucao.org/wp-content/uploads/2020/01/Quarto-para-meninas-Tumblr.jpg',
                    'http://static.casadevalentina.com.br/assets/files/2012/10/jpg/5087f0502033e-820_decoracao-morar-mais-por-menos-quarto-00.jpg'
                ]
            },
            {
                name: 'Quarto muito simples',
                type: 'Quarto compartilhado',
                owner: {
                    name: 'Ismael Borba',
                    photo: 'https://avatars.githubusercontent.com/u/56137836?v=4',
                    telephones: [
                        {
                            ddd: '21',
                            number: '98671-5747'
                        }
                    ]
                },
                photos: [
                    'https://www.cadernodeviagem.com.br/wp-content/uploads/2019/11/dormitorio-freehand-miami-hostel-1024x683.jpg',
                    'https://www.cadernodeviagem.com.br/wp-content/uploads/2019/11/dormitorios-de-hostel-1024x683.jpg'
                ]
            },
            {
                name: 'Quarto muito maneiro com sala...',
                type: 'Quarto privativo',
                owner: {
                    name: 'Ismael Borba',
                    photo: 'https://avatars.githubusercontent.com/u/56137836?v=4',
                    telephones: [
                        {
                            ddd: '21',
                            number: '98671-5747'
                        }
                    ]
                },
                photos: [
                    'https://imagens-revista.vivadecora.com.br/uploads/2020/05/quartos-bonitos-de-solteiro-decorado-com-bancada-de-estudos-Foto-Dicas-de-Mulher.jpg',
                    'https://casaeconstrucao.org/wp-content/uploads/2020/01/Quarto-para-meninas-Tumblr.jpg',
                    'http://static.casadevalentina.com.br/assets/files/2012/10/jpg/5087f0502033e-820_decoracao-morar-mais-por-menos-quarto-00.jpg'
                ]
            },
            {
                name: 'Quarto muito simples',
                type: 'Quarto compartilhado',
                owner: {
                    name: 'Ismael Borba',
                    photo: 'https://avatars.githubusercontent.com/u/56137836?v=4',
                    telephones: [
                        {
                            ddd: '21',
                            number: '98671-5747'
                        }
                    ]
                },
                photos: [
                    'https://www.cadernodeviagem.com.br/wp-content/uploads/2019/11/dormitorio-freehand-miami-hostel-1024x683.jpg',
                    'https://www.cadernodeviagem.com.br/wp-content/uploads/2019/11/dormitorios-de-hostel-1024x683.jpg'
                ]
            },
            {
                name: 'Quarto muito maneiro com sala...',
                type: 'Quarto privativo',
                owner: {
                    name: 'Ismael Borba',
                    photo: 'https://avatars.githubusercontent.com/u/56137836?v=4',
                    telephones: [
                        {
                            ddd: '21',
                            number: '98671-5747'
                        }
                    ]
                },
                photos: [
                    'https://imagens-revista.vivadecora.com.br/uploads/2020/05/quartos-bonitos-de-solteiro-decorado-com-bancada-de-estudos-Foto-Dicas-de-Mulher.jpg',
                    'https://casaeconstrucao.org/wp-content/uploads/2020/01/Quarto-para-meninas-Tumblr.jpg',
                    'http://static.casadevalentina.com.br/assets/files/2012/10/jpg/5087f0502033e-820_decoracao-morar-mais-por-menos-quarto-00.jpg'
                ]
            },
            {
                name: 'Quarto muito simples',
                type: 'Quarto compartilhado',
                owner: {
                    name: 'Ismael Borba',
                    photo: 'https://avatars.githubusercontent.com/u/56137836?v=4',
                    telephones: [
                        {
                            ddd: '21',
                            number: '98671-5747'
                        }
                    ]
                },
                photos: [
                    'https://www.cadernodeviagem.com.br/wp-content/uploads/2019/11/dormitorio-freehand-miami-hostel-1024x683.jpg',
                    'https://www.cadernodeviagem.com.br/wp-content/uploads/2019/11/dormitorios-de-hostel-1024x683.jpg'
                ]
            },
            {
                name: 'Quarto muito maneiro com sala...',
                type: 'Quarto privativo',
                owner: {
                    name: 'Ismael Borba',
                    photo: 'https://avatars.githubusercontent.com/u/56137836?v=4',
                    telephones: [
                        {
                            ddd: '21',
                            number: '98671-5747'
                        }
                    ]
                },
                photos: [
                    'https://imagens-revista.vivadecora.com.br/uploads/2020/05/quartos-bonitos-de-solteiro-decorado-com-bancada-de-estudos-Foto-Dicas-de-Mulher.jpg',
                    'https://casaeconstrucao.org/wp-content/uploads/2020/01/Quarto-para-meninas-Tumblr.jpg',
                    'http://static.casadevalentina.com.br/assets/files/2012/10/jpg/5087f0502033e-820_decoracao-morar-mais-por-menos-quarto-00.jpg'
                ]
            },
            {
                name: 'Quarto muito simples',
                type: 'Quarto compartilhado',
                owner: {
                    name: 'Ismael Borba',
                    photo: 'https://avatars.githubusercontent.com/u/56137836?v=4',
                    telephones: [
                        {
                            ddd: '21',
                            number: '98671-5747'
                        }
                    ]
                },
                photos: [
                    'https://www.cadernodeviagem.com.br/wp-content/uploads/2019/11/dormitorio-freehand-miami-hostel-1024x683.jpg',
                    'https://www.cadernodeviagem.com.br/wp-content/uploads/2019/11/dormitorios-de-hostel-1024x683.jpg'
                ]
            },
            {
                name: 'Quarto muito maneiro com sala...',
                type: 'Quarto privativo',
                owner: {
                    name: 'Ismael Borba',
                    photo: 'https://avatars.githubusercontent.com/u/56137836?v=4',
                    telephones: [
                        {
                            ddd: '21',
                            number: '98671-5747'
                        }
                    ]
                },
                photos: [
                    'https://imagens-revista.vivadecora.com.br/uploads/2020/05/quartos-bonitos-de-solteiro-decorado-com-bancada-de-estudos-Foto-Dicas-de-Mulher.jpg',
                    'https://casaeconstrucao.org/wp-content/uploads/2020/01/Quarto-para-meninas-Tumblr.jpg',
                    'http://static.casadevalentina.com.br/assets/files/2012/10/jpg/5087f0502033e-820_decoracao-morar-mais-por-menos-quarto-00.jpg'
                ]
            },
            {
                name: 'Quarto muito simples',
                type: 'Quarto compartilhado',
                owner: {
                    name: 'Ismael Borba',
                    photo: 'https://avatars.githubusercontent.com/u/56137836?v=4',
                    telephones: [
                        {
                            ddd: '21',
                            number: '98671-5747'
                        }
                    ]
                },
                photos: [
                    'https://www.cadernodeviagem.com.br/wp-content/uploads/2019/11/dormitorio-freehand-miami-hostel-1024x683.jpg',
                    'https://www.cadernodeviagem.com.br/wp-content/uploads/2019/11/dormitorios-de-hostel-1024x683.jpg'
                ]
            }
        ]
    }
]

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
                {universities.map((university) => (
                    <HighlightUniversityCard key={university.name} name={university.name} photo={university.photo} dormitories={university.dormitories} />
                ))}
            </S.HighlightUniversitiesCards>

            <S.List>
                <S.ListTitle>Os mais curtidos</S.ListTitle>
            </S.List>
        </S.Container>
    )
}