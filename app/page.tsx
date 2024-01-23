import Header from "./Components/Header";
import Navbar from "./Components/Nav";
import ContentHeader from "./Components/ContentHeader";
import "./globals.css";
import SqlForceDescription from "./page/sqlForceDescription";
import Footer from "./page/fotter";
import Product from "./page/Product";
import Form from "../app/page/Form";
import Services from "./page/Services";
import Technologies from "./Components/Tecnologias";
import About from "./page/About";
export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-2">
        <div className="p-2 m-0 "   id="Home1">
          <Header />
          <Navbar />
          <ContentHeader />
  
          <SqlForceDescription />
          <About />
          <Product />
          <Services />
          <Technologies />
          <Form />
          <Footer />
          
        </div>
      </main>
    </>
  );
}
