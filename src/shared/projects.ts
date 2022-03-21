import Tasko from './../assets/images/projects/tasko.webp';
import PCBuilder from './../assets/images/projects/pc-builder-api.png';
import KenzieShoes from './../assets/images/projects/KenzieShoes.webp';
import Comentarios from './../assets/images/projects/comments.webp';
import Kirby from './../assets/images/projects/kirby.webp';
import Hanoi from './../assets/images/projects/hanoi-tower.webp';
import Ball from './../assets/images/projects/magical8ball.png';
import Four from './../assets/images/projects/lig4.webp';

export const myProjectList = [
    {
        project: 'tasko',
        techs: [
            'React',
            'Context API',
            'TypeScript',
            'Styled-Components',
            'Chakra UI',
            'JSONServer',
        ],
        thumbnail: Tasko,
        infos: 'Projeto feito para  gestão de tarefas com gamificação e sistema de conquistas, escreva suas principais dúvidas sobre a vida morando sozinho ou atividades domésticas no fórum da nossa comunidade.',
        replies: [{ name: '', reply: '' }],
        link: 'https://tasko.vercel.app/',
        repo: 'https://github.com/madurubini/tasko',
        code: 'tasko',
    },
    {
        project: 'PC Builder API',
        techs: ['Python', 'Flask', 'SQLAlchemy', 'Postgresql'],
        thumbnail: PCBuilder,
        infos: 'Back-end API Restful feito para o projeto: https://pc-builder-capstone-q2-three.vercel.app',
        replies: [{ name: '', reply: '' }],
        link: 'https://pc-builder-api-v2.herokuapp.com',
        repo: 'https://github.com/ezms/pc-builder-api',
        code: 'PC Builder API',
    },
    {
        project: 'KenzieShoes',
        techs: ['React', 'Styled-Components'],
        thumbnail: KenzieShoes,
        infos: 'Simulação de e-commerce para uma loja de calçados com carrinho de compras.',
        replies: [{ name: '', reply: '' }],
        link: 'https://react-entrega-s3-kenzieshop-emanuelz-martins.vercel.app',
        repo: 'https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s3-kenzieshop-emanuelz-martins/',
        code: 'kenzieshoes',
    },
    {
        project: 'Seção de Comentários',
        techs: ['React', 'Redux', 'Redux-Thunk'],
        thumbnail: Comentarios,
        infos: 'Seção de comentários simples feita com redux thunk',
        replies: [{ name: '', reply: '' }],
        link: 'https://react-atividade-s3-redux-thunk-na-pratica-emanuelz-martins.vercel.app',
        repo: 'https://github.com/Kenzie-Academy-Brasil-Developers/react-atividade-s3-redux-thunk-na-pratica-emanuelz-martins',
        code: 'comments',
    },
    {
        project: 'Kirby and The Maze of Mayonnaise',
        techs: ['HTML', 'CSS', 'JavaScript'],
        thumbnail: Kirby,
        infos: 'Labirinto feito como fan game dos jogos 8-bit do Kirby.',
        replies: [{ name: '', reply: '' }],
        link: 'https://kenzie-academy-brasil-developers.github.io/entrega-labirinto-sprint-5-emanuelz-martins/app/',
        repo: 'https://github.com/Kenzie-Academy-Brasil-Developers/entrega-labirinto-sprint-5-emanuelz-martins',
        code: 'mayonnaise',
    },
    {
        project: 'Torre de Hanoi',
        techs: ['HTML', 'CSS', 'JavaScript'],
        thumbnail: Hanoi,
        infos: 'O jogo Torre de Hanoi feito com HTML5, CSS3 e JavaScript',
        replies: [{ name: '', reply: '' }],
        link: 'https://kenzie-academy-brasil-developers.github.io/entrega-torre-de-hanoi-sprint-5-emanuelz-martins/',
        repo: 'https://github.com/Kenzie-Academy-Brasil-Developers/entrega-torre-de-hanoi-sprint-5-emanuelz-martins/settings',
        code: 'hanoi',
    },
    {
        project: 'Magical8Ball',
        techs: ['HTML', 'CSS', 'JavaScript'],
        thumbnail: Ball,
        infos: 'O jogo de azar Magical 8 Ball feito com HTML, CSS e JavaScript',
        replies: [{ name: '', reply: '' }],
        link: 'https://kenzie-academy-brasil-developers.github.io/entrega-construa-um-jogo-de-azar-sprint-3-emanuelz-martins/app/magical-8-ball/',
        repo: 'https://github.com/Kenzie-Academy-Brasil-Developers/entrega-construa-um-jogo-de-azar-sprint-3-emanuelz-martins',
        code: 'magiacal8ball',
    },
    {
        project: 'Lig-4',
        techs: ['HTML', 'CSS', 'JavaScript'],
        thumbnail: Four,
        infos: 'O jogo LIG-4 feito com HTML5, CSS3 e JavaScript',
        replies: [{ name: '', reply: '' }],
        link: 'https://kenzie-academy-brasil-developers.github.io/entrega-lig-4-sprint-5-emanuelz-martins/app/',
        repo: 'https://github.com/Kenzie-Academy-Brasil-Developers/entrega-lig-4-sprint-5-emanuelz-martins',
        code: 'lig4',
    },
];
