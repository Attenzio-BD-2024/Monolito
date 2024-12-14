import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Router } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';

export default function App() {
    return (
    <>
        {/* SplashScreen component is not used directly, so we can remove this line */}
        <StatusBar style="auto" />
    </>
);
}