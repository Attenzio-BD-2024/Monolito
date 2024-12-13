import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faCircleInfo, faGear, faHouse, faList, faRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons'

import { Button, Layout, Menu } from 'antd';

import { library } from '@fortawesome/fontawesome-svg-core';
import logo from '../assets/transparent_logo.png'

const { Content, Sider } = Layout;

const siderStyle = {
    overflow: 'auto',
    height: '100vh',
    position: 'fixed',
    top: 0,
    bottom: 0,
};

function getItem(label, key, icon, children) {
    return { key, icon, children, label }
}

library.add(faHouse, faUser, faList, faBell, faGear, faCircleInfo, faRightFromBracket)

const items = [
    getItem('Home', '1', <FontAwesomeIcon icon={faHouse} className='m-0' />),
    getItem('Perfil', '2', <FontAwesomeIcon icon={faUser} />),
    getItem('Cursos', '3', <FontAwesomeIcon icon={faList} />),
    getItem('Notificaciones', '4', <FontAwesomeIcon icon={faBell} />),
    getItem('Configuracion', '5', <FontAwesomeIcon icon={faGear} />),
    getItem('Info', '6', <FontAwesomeIcon icon={faCircleInfo} />),
    getItem('Cerrar Sesión', '7', <FontAwesomeIcon icon={faRightFromBracket} />)
];

const MainLayout = ({ children }) => {
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