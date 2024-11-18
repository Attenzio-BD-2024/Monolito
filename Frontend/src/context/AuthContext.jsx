import { ConfigProvider } from 'antd';
import React, { createContext, useContext, useState } from 'react';

const LayoutContext = createContext();

export const LayoutProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <LayoutContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: '#FF7700',
                        colorLink: '#FF7700',
                    }
                }}>
                {children}
            </ConfigProvider>
        </LayoutContext.Provider>
    );
};

export const useLayout = () => useContext(LayoutContext);