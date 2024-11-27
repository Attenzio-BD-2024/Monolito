import React from 'react';
import { NativeRouter, Route, Routes } from 'react-router-native';
import Bienvenida from './Bienvenida';
import Login from './login';

export default function App() {
    return (
        <NativeRouter>
            <Routes>
                <Route path= "/" element={<Bienvenida />} />
                <Route path= "/login" element={<Login />} />
            </Routes>
        </NativeRouter>
    );
}