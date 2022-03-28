import {
    AboutDownloadCV,
    AboutSectionContainer,
    AboutSectionTitle,
    AboutText,
} from './style';

const anchorStyle = {
    color: '#595959',
    textDecoration: 'underline',
};

const AboutSection = () => {
    const downloadPath = './../../assets/documents/CV Emanuel Zago Martins.pdf';

    return (
        <AboutSectionContainer>
            <AboutSectionTitle>Sobre</AboutSectionTitle>
            <AboutText>
                Olá, meu nome é Emanuel Martins, tenho 20 anos e moro em uma
                cidade no interior do Paraná. Desde as aulas de informática e
                robótica quando criança sempre tive curiosidade em saber como
                web sites e programas de computador eram feitos, quando, em 2017
                comecei meus primeiros cursos de lógica de programação e em 2019
                entrei para a faculdade pelo curso de Análise e Desenvolvimento
                de Sistemas pelo Centro Universitário de Pato Branco{' '}
                <a
                    href="https://www.unidep.edu.br"
                    target="_blank"
                    style={anchorStyle}
                >
                    UNIDEP
                </a>{' '}
                onde tive a oportunidade de fazer meus primeiros estágios e
                trabalhos com freelance com tecnologia e desenvolvimento web.
            </AboutText>
            <AboutText>
                Em 2021 iniciei o curso de formação como Desenvolvedor FullStack
                pela{' '}
                <a
                    href="https://kenzie.com.br"
                    target="_blank"
                    style={anchorStyle}
                >
                    Kenzie Academy Brasil
                </a>
                . Atualmente estou buscando uma oportunidade de me inserir no
                mercado como programador Front-End ou Back-end.
            </AboutText>
            <AboutDownloadCV href={downloadPath} download>
                Download My CV
            </AboutDownloadCV>
        </AboutSectionContainer>
    );
};

export default AboutSection;
