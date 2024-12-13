import { LoginForm } from '../components/LoginForm'
import logo from '../assets/transparent_logo.png'
import { Flex, Image } from 'antd'

const Login = () => {
    return (
        <Flex
            style={{
                height: '100vh', // Asegura que el contenedor ocupe toda la pantalla
                flexDirection: 'column', // Dirección vertical
                alignItems: 'center',
                justifyContent: 'space-evenly',
                padding: '24px'
            }}
        >
            <Image
                src={logo}
                alt="Logo"
                preview={false}
                style={{
                    maxWidth: '400px',
                    padding: '0 36px'
                }}
            />
            <LoginForm />
        </Flex>
    );
};

export default Login