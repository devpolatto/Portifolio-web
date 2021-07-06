import Lottie from 'react-lottie';
import DeveloperAnimation from '../../lotties/developerAnimation.json';

import Title from '../../components/Title';
import Header from '../../components/Header';

import { Cover, AboutMe } from './styles';

import { useTheme } from '../../hooks/useTheme';

import Avatar from '../../assets/avatar.png';

const Home: React.FC = () => {

    const defaultOptionsLottie = {
        loop: true,
        autoplay: true,
        animationData: DeveloperAnimation,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    const { theme } = useTheme();

    return (
        <>
            <Header />
            <Cover id="cover" theme={theme}>
                <div className="title">
                    <div className="content">
                        {/* <div className="hello text-myText-light text-sm lg:text-2xl">Olá! Meu nome é</div> */}
                        <div className="name text-myText-title font-bold text-4xl md:text-6xl lg:text-6xl 2xl:text-9xl">Angelo Polatto</div>
                        <div className="office text-myText-light font-bold text-1xl md:text-2xl lg:text-2xl 2xl:text-4xl">Técnico de <span className="text-myText-title">TI</span> &</div>
                        <div className="office w-max ml-20 text-myText-light font-bold text-1xl md:text-2xl lg:text-2xl 2xl:text-4xl">Desenvolvedor <span className="text-myText-title">MERN</span> stack</div>
                    </div>
                </div>
                <div id="animation-lottie" className="lottie flex justify-center items-center lg:w-96 lg:h-96">
                    <Lottie options={defaultOptionsLottie} height={"100%"} width={"100%"} />
                </div>
            </Cover>

            <AboutMe id="about-me" theme={theme}>
                <Title text={'Sobre mim'} />
                <div className="content">
                    <div className="avatar-img">
                        <img src={Avatar} alt="Avatar" className="" />
                    </div>
                    <div className="about-me-description">
                        <p className="text-white text-xs md:text-base lg:text-2xl text-justify">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus tenetur <br />
                            consectetur, voluptate error minima expedita. Tenetur, quasi perspiciatis!
                            distinctio pariatur numquam officiis officia quaerat sunt. Lorem ipsum dolor sit
                            amet consectetur adipisicing elit. Ducimus tenetur consectetur, voluptate error
                            minima expedita. Tenetur, quasi perspiciatis! distinctio pariatur numquam officiis
                            officia quaerat sunt. <br />
                        </p>
                        <button>Download CV</button>
                    </div>
                </div>
            </AboutMe>
        </>
    );
}

export default Home;