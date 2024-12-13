import React from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faCircleInfo, faGear, faHouse, faList, faRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';
import logo from '../assets/transparent_logo.png'
import { Button, Layout, Menu } from 'antd';
import { useLayout } from '../context/AuthContext';
const { Content, Sider } = Layout;

function getItem(label, key, icon, children) {
    return { key, icon, children, label }
}

const siderStyle = {
    overflow: 'auto',
    height: '100vh',
    position: 'fixed',
    top: 0,
    bottom: 0,
};

library.add(faHouse, faUser, faList, faBell, faGear, faCircleInfo, faRightFromBracket)

const MainLayout = ({ children }) => {
    const { logoutUser } = useLayout()

    const items = [
        getItem(<Link to="/">Home</Link>, '1', <FontAwesomeIcon icon={faHouse} className='m-0' />),
        getItem(<Link to="/profile">Perfil</Link>, '2', <FontAwesomeIcon icon={faUser} />),
        getItem(<Link to="/courses">Cursos</Link>, '3', <FontAwesomeIcon icon={faList} />),
        getItem('Notificaciones', '4', <FontAwesomeIcon icon={faBell} />),
        getItem('Configuracion', '5', <FontAwesomeIcon icon={faGear} />),
        getItem('Info', '6', <FontAwesomeIcon icon={faCircleInfo} />),
    ]

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider
                collapsed
                style={siderStyle}
            >
                <img
                    src={logo}
                    alt='logo'
                    className='p-4' />
                <Menu
                    className="bg-[transparent]"
                    items={items} />
                <div className='w-[80px] p-2'>
                    <Button
                        block
                        type='primary'
                        className='bg-[#333333] text-white'
                        onClick={logoutUser}
                        >
                        <FontAwesomeIcon icon={faRightFromBracket} />
                    </Button>
                </div>
            </Sider>
            <Layout className='ms-[80px]'>
                <Content className='px-8 py-8' >
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
};

export default MainLayout;