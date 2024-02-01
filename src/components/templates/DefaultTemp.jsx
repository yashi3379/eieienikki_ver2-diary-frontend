import React, { useContext } from "react";
import { Header } from "../organisms/layout/Header";
import { Footer } from "../organisms/layout/Footer";
import { AuthProvider, AuthContext } from "../../providers/AuthProvider";
import { Navigate } from "react-router-dom";

const Content = (props) => {
    console.log(props);
    const { children, isPublic } = props;
    const { user } = useContext(AuthContext);
    console.log(user);
    console.log(isPublic);

    if (!isPublic && !user) {
        return <Navigate to="/login" />
    }

    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}


export const DefaultTemp = (props) => {
    console.log(props);
    const { children } = props;

    return (
        <>
            <AuthProvider>
                <Content>{children}</Content>
            </AuthProvider>
        </>
    );
};