import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa'

import Header from '../../components/Header';
import Title from '../../components/Title';

import {
    Container,
    ProjectGrid,
    Project,
    ProjectDescription,
    ProjectTitle,
    Description,
    ProjectLink,
    ProjectPreview
} from './styles';

const Projects: React.FC = () => {
    return (
        <>
            <Header />

            <Container>
                <Title text="Projetos" />
                <ProjectGrid>
                    <Project>
                        <ProjectDescription>
                            <ProjectTitle>Titulo do proheto</ProjectTitle>
                            <Description>
                                jhnuimdfnfvufmefnfihzrhgehg
                            </Description>
                            <ProjectLink>
                                <a href="#">
                                    <FaExternalLinkAlt color="#fff" />
                                </a>
                            </ProjectLink>
                        </ProjectDescription>
                        <ProjectPreview>
                            <img src="https://github.com/devpolatto/Letmeask_NLW-6/raw/master/.github/Capa.png" alt="" />
                        </ProjectPreview>
                    </Project>
                    <Project>
                        <ProjectDescription>
                            <ProjectTitle>Titulo do proheto</ProjectTitle>
                            <Description>
                                jhnuimdfnfvufmefnfihefelejfeljejnuçjwgwi
                                kngregmngikj
                            </Description>
                            <ProjectLink>
                                <a href="#">
                                    <FaExternalLinkAlt color="#fff" />
                                </a>
                            </ProjectLink>
                        </ProjectDescription>
                        <ProjectPreview>
                            <img src="https://github.com/devpolatto/Letmeask_NLW-6/raw/master/.github/Capa.png" alt="" />
                        </ProjectPreview>
                    </Project>
                    <Project>
                        <ProjectDescription>
                            <ProjectTitle>Titulo do proheto</ProjectTitle>
                            <Description>
                                jhnuimdfnfvufmefnfihefelejfeljejnuçjwgwi
                                kngregmngikj
                            </Description>
                            <ProjectLink>
                                <a href="#">
                                    <FaExternalLinkAlt color="#fff" />
                                </a>
                            </ProjectLink>
                        </ProjectDescription>
                        <ProjectPreview>
                            <img src="https://github.com/devpolatto/Letmeask_NLW-6/raw/master/.github/Capa.png" alt="" />
                        </ProjectPreview>
                    </Project>
                    <Project>
                        <ProjectDescription>
                            <ProjectTitle>Titulo do proheto</ProjectTitle>
                            <Description>
                                jhnuimdfnfvufmefnfihefelejfeljejnuçjwgwi
                                kngregmngikj
                            </Description>
                            <ProjectLink>
                                <a href="#">
                                    <FaExternalLinkAlt color="#fff" />
                                </a>
                            </ProjectLink>
                        </ProjectDescription>
                        <ProjectPreview>
                            <img src="https://github.com/devpolatto/Letmeask_NLW-6/raw/master/.github/Capa.png" alt="" />
                        </ProjectPreview>
                    </Project>
                    <Project>
                        <ProjectDescription>
                            <ProjectTitle>Titulo do proheto</ProjectTitle>
                            <Description>
                                jhnuimdfnfvufmefnfihefelejfeljejnuçjwgwi
                                kngregmngikj
                            </Description>
                            <ProjectLink>
                                <a href="#">
                                    <FaExternalLinkAlt color="#fff" />
                                </a>
                            </ProjectLink>
                        </ProjectDescription>
                        <ProjectPreview>
                            <img src="https://github.com/devpolatto/Letmeask_NLW-6/raw/master/.github/Capa.png" alt="" />
                        </ProjectPreview>
                    </Project>
                </ProjectGrid>
            </Container>
        </>
    );
}

export default Projects;