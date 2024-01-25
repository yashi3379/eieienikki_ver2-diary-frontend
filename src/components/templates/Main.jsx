import React from "react";
import { Header } from "../organisms/layout/Header";

export const Main = (props) => {
    
    const { children } = props;
    
    // useEffect(() => {
    //     if (!isLoggedIn || user === null) {
    //         return navigate('/login');
    //     }// eslint-disable-next-line
    // }, [isLoggedIn]);
    return (
        <>
        <Header />
        {children}
        </>
    );
    }   