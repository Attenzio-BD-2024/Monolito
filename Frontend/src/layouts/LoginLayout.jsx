import { Flex } from "antd"
import image from "../assets/login-wallpaper.webp"

const LoginLayout = ({children}) => {
    return (
        <Flex 
            className="min-h-screen"
            >
            <div 
                className="w-9/12"
                style={{
                        backgroundImage: `url(${image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}>
            </div>
            <div 
                className="w-3/12"
                >
                {children}
            </div>
    </Flex>
    )
}

export default LoginLayout