import { ConfigProvider } from 'antd';
import React, { createContext, useContext, useState } from 'react';

const LayoutContext = createContext();

export const LayoutProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(true);

    return (
        <LayoutContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: '#FF7700',
                        colorLink: '#FF7700',
                    },
                    components: {
                        Layout: {
                            bodyBg: '#FFFFFF',
                            siderBg: "#D9D9D9",
                        }
                    }
                }}>
                {children}
            </ConfigProvider>
        </LayoutContext.Provider>
    );
};

export const useLayout = () => useContext(LayoutContext);