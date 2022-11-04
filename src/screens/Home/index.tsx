import React from 'react';
import { useNavigation } from '@react-navigation/native';

import UniversitiesProps from '../../@types/universities';
import { DormitoriesProps } from '../../@types/dormitories';

import DormitoryCard from '../../components/DormitoryCard';
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

const dormitories: DormitoriesProps[] = [
    {
        name: 'Chalé inteiro aconchegante',
        type: 'Imóvel Inteiro',
        owner: {
            name: 'Juliano Alves',
            photo: 'https://a0.muscache.com/im/pictures/user/d09fdff3-53ff-431f-811e-2d1b10a592b8.jpg',
            telephones: [
                {
                    ddd: '21',
                    number: '98397-7817'
                }
            ]
        },
        photos: [
            'https://a0.muscache.com/im/pictures/09e2d45d-a29c-4aef-a550-d16fdc3261c6.jpg',
            'https://a0.muscache.com/im/pictures/6d4c50f5-b8c3-4d1b-b07a-281525aea23f.jpg',
            'https://a0.muscache.com/im/pictures/84c62937-1b41-4db1-8de4-e0747f238b02.jpg',
            'https://a0.muscache.com/im/pictures/0f352e06-4d02-41be-971a-6a8b0355a6a0.jpg',
            'https://a0.muscache.com/im/pictures/585030b1-9b12-4031-b3fd-9174e96bce18.jpg'
            
        ]
    },
    {
        name: 'Quarto Compartilhado com Ótima...',
        type: 'Quarto compartilhado',
        owner: {
            name: 'Nathan Cordeiro',
            photo: 'https://a0.muscache.com/im/pictures/user/cda3deaf-7328-45ad-8292-9bae6d09b174.jpg',
            telephones: [
                {
                    ddd: '21',
                    number: '98397-7817'
                }
            ]
        },
        photos: [
            'https://a0.muscache.com/im/pictures/796dfdce-b399-4303-bb9a-0c313aecf751.jpg',
            'https://a0.muscache.com/im/pictures/95d98cbf-0ad6-4cdf-abb7-9eb5452878fe.jpg',
            'https://a0.muscache.com/im/pictures/045cf0bd-c608-43f4-97a4-03bd7b82a3a2.jpg',
            'https://a0.muscache.com/im/pictures/afcbf42e-3667-46d7-885b-7e252bd595b6.jpg',
            'https://a0.muscache.com/im/pictures/35180c90-4aef-482d-8f3d-6f3339ab257b.jpg'
            
        ]
    },
    {
        name: 'Quarto inteiro com lareira',
        type: 'Quarto inteiro',
        owner: {
            name: 'Edson de Oliveira',
            photo: 'https://a0.muscache.com/im/pictures/user/37716261-bda4-4ae5-a2a5-5e1c1a376947.jpg',
            telephones: [
                {
                    ddd: '21',
                    number: '98977-7969'
                }
            ]
        },
        photos: [
            'https://a0.muscache.com/im/pictures/04fb70ed-7306-46d3-ac00-7f622159c97d.jpg',
            'https://a0.muscache.com/im/pictures/13d81c6c-24cd-48fc-9b73-2c0ff6bca842.jpg',
            'https://a0.muscache.com/im/pictures/a80c3d19-04d4-4289-ab93-95a1e494a802.jpg',
            'https://a0.muscache.com/im/pictures/ec2beba5-e367-4849-b84d-40c466c49439.jpg',
            'https://a0.muscache.com/im/pictures/0cbe120d-649f-492c-a45a-b521c6d46e00.jpg?'
            
        ]
    },
    {
        name: 'Loft com suíte',
        type: 'Imóvel Inteiro',
        owner: {
            name: 'Daniela Ribeiro',
            photo: 'https://a0.muscache.com/im/pictures/user/563ca90c-1a10-40d3-8811-2e2ed41c19ff.jpg?aki_policy=profile_large',
            telephones: [
                {
                    ddd: '24',
                    number: '97865-3698'
                }
            ]
        },
        photos: [
            'https://fotos.vivadecora.com.br/decoracao-aquilesnicol-178213-square_cover_xsmall.jpg',
            'https://a0.muscache.com/im/pictures/47dc326f-9898-4d79-b0d8-4d20f281d800.jpg',
            'https://a0.muscache.com/im/pictures/31193db0-36b6-4aa0-b3c4-096209afab41.jpg',
            'https://a0.muscache.com/im/pictures/6b15bac9-601b-4193-861c-b074a12425d9.jpg',
            'https://a0.muscache.com/im/pictures/e346b74a-2487-4409-8c37-4264d9e76cbe.jpg'
            
        ]
    },
    {
        name: 'Casa Inteira com 2 Quartos...',
        type: 'Imóvel Inteiro',
        owner: {
            name: 'Rafael Nascimento',
            photo: 'https://avatars.githubusercontent.com/u/62576794?v=4',
            telephones: [
                {
                    ddd: '21',
                    number: '97017-7872'
                }
            ]
        },
        photos: [
            'https://www.ideiasdecor.com/wp-content/uploads/2019/03/casas-grandes-1.jpg',
            'https://www.ideiasdecor.com/wp-content/uploads/2019/03/casas-grandes-2.jpg',
            'https://www.ideiasdecor.com/wp-content/uploads/2019/03/casas-grandes-3.jpg',
            'https://www.ideiasdecor.com/wp-content/uploads/2019/03/casas-grandes-5.jpg',
            'https://www.ideiasdecor.com/wp-content/uploads/2019/03/casas-grandes-7.jpg'
            
        ]
    },
    {
        name: 'Flat com uma linda vista',
        type: 'Imóvel Inteiro',
        owner: {
            name: 'Andrea Visconde',
            photo: 'https://a0.muscache.com/im/pictures/user/46d68dc1-2dc5-4b50-a33b-9555b2c8aecc.jpg?aki_policy=profile_large',
            telephones: [
                {
                    ddd: '21',
                    number: '97455-8698'
                }
            ]
        },
        photos: [
            'https://a0.muscache.com/im/pictures/0f4efa6f-8de3-432f-9910-e3cef74e0631.jpg',
            'https://a0.muscache.com/im/pictures/5b97fb4e-30c1-4283-9b86-fbdb5f638776.jpg',
            'https://a0.muscache.com/im/pictures/e3c054c6-b8e0-43a4-ad0b-7e07d4dc4642.jpg',
            'https://a0.muscache.com/im/pictures/319d69d6-3c3f-465d-bfea-919a03ed3c6a.jpg',
            'https://a0.muscache.com/im/pictures/miso/Hosting-47031018/original/7897f8e4-1a35-4d5e-8e76-a8c558c44eb0.jpeg'
            
        ]
    },
    {
        name: 'Casa com suíte e frigobar',
        type: 'Imóvel Inteiro',
        owner: {
            name: 'Vanderlei Costa',
            photo: 'https://a0.muscache.com/im/pictures/user/3f0f6dac-3fef-4021-9530-578e5d2dc2a1.jpg',
            telephones: [
                {
                    ddd: '21',
                    number: '98969-7459'
                }
            ]
        },
        photos: [
            'https://a0.muscache.com/im/pictures/miso/Hosting-662422880030199000/original/3fc411e3-768f-4ac5-9293-1a6de41c1bb2.jpeg',
            'https://a0.muscache.com/im/pictures/miso/Hosting-652253947199568854/original/de88214e-e61f-41e5-8ba6-7fa66ff31694.jpeg',
            'https://a0.muscache.com/im/pictures/miso/Hosting-662422880030199000/original/05227406-a441-4acf-8f1c-8ffb2320f70c.jpeg',
            'https://a0.muscache.com/im/pictures/miso/Hosting-662422880030199000/original/ed055bb1-260d-4ec7-a7b7-c3da0f570f85.jpeg',
            'https://a0.muscache.com/im/pictures/miso/Hosting-662422880030199000/original/7cf411f5-2f59-49f0-9ec2-7d8059688a4a.jpeg'
            
        ]
    },
    {
        name: 'Apartamento com 2 quartos e lareira',
        type: 'Imóvel Inteiro',
        owner: {
            name: 'Rycardo Santos',
            photo: 'https://a0.muscache.com/im/pictures/user/63be376c-3dd8-4ddc-972f-b7128b46d605.jpg',
            telephones: [
                {
                    ddd: '21',
                    number: '98896-7017'
                }
            ]
        },
        photos: [
            'https://a0.muscache.com/im/pictures/miso/Hosting-584011681842024959/original/5d626c5f-0508-4fb8-9d5d-8602c9834197.jpeg',
            'https://a0.muscache.com/im/pictures/miso/Hosting-639016574830988575/original/b6678ad8-1b5f-41ce-aeee-4b6983df8815.jpeg',
            'https://a0.muscache.com/im/pictures/miso/Hosting-715350431745433873/original/3a2ecc2e-8695-4e55-9d84-a72cd676140e.jpeg',
            'https://a0.muscache.com/im/pictures/miso/Hosting-715350431745433873/original/bf684e45-e9c7-4da8-abd5-4727827228bc.jpeg',
            'https://a0.muscache.com/im/pictures/miso/Hosting-715350431745433873/original/4d62be49-cf31-4e58-bcae-c5019fe7f031.jpeg'
            
        ]
    },
] 

export function Home() {
    const navigation = useNavigation();
    const { user } = useAuth();

    function navigateRoom(item: any) {
        navigation.navigate('Dormitory', {
            item
        });
    }

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

                <S.DormitoriesCardList 
                    data={dormitories}
                    renderItem={({ item }: any) => <DormitoryCard item={item} onPress={() => navigateRoom(item)} />}
                />
            </S.List>
        </S.Container>
    )
}