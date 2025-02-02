import { BrowserRouter, Route, Routes } from "react-router-dom";
import {HomeScreen} from "../Pages/Home/Home";
import { Footer } from "../Components/Footer/Footer";
import { Header } from "../Components/Header/Header";
import { ErrorScreen } from "../Pages/Error/ErrorScreen";
import { LoginScreen } from "../Pages/Login/LoginScreen";
import { CadastroScreen } from "../Pages/Cadastro/CadastroScreen";
import { Imoveis } from "../Pages/imobi/Imobi";


export function RouterApp() {
  return (
   <BrowserRouter>
     <Header />
   <Routes>
    <Route path="/" element={<HomeScreen/>}/>
    <Route path="*" element={<ErrorScreen/>}/>
    <Route path="/Imovel" element={<Imoveis/>}/>
    <Route path="/Login" element={<LoginScreen/>}/>
    <Route path="/Cadastro" element={<CadastroScreen/>}/>
   </Routes>
   <Footer />
   </BrowserRouter>
  );
}