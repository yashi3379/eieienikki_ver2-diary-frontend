import React from "react";
import { Header } from "../organisms/layout/Header";

export const Main = (props) => {
    
    const { children } = props;
    
    return (
        <>
        <Header />
        {children}
        </>
    );
    }   