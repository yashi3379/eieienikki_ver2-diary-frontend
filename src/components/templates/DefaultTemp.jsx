import React, { useContext } from "react";
import { Header } from "../organisms/layout/Header";
import { AuthProvider, AuthContext } from "../../providers/AuthProvider";
import { Navigate } from "react-router-dom";


const Content = (props) => {
    console.log(props);
    const { children, isPublic} = props;
    const { user } = useContext(AuthContext);
    

    console.log(user);
    console.log(isPublic);

    if (!isPublic && !user) {
        //loginにNavigateした時にisPublicが認識されていない
        return <Navigate to="/login" />;

    }
        return (
            <>
                <Header />
                {children}
            </>
        )
    }


    export const DefaultTemp = (props) => {
        const{children,isPublic} = props;

        return (
            <>
                <AuthProvider >
                    <Content isPublic={isPublic}>
                        {children}
                    </Content>
                </AuthProvider>
            </>
        );
    };