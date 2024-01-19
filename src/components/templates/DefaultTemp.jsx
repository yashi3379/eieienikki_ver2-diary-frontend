import { Header } from "../organisms/layout/Header";
import { Footer } from "../organisms/layout/Footer";

export const DefaultTemp = (props) => {
    const { children } = props;
    return (
        <>
        <Header />
        {children}
        <Footer />
        </>
    );
    };