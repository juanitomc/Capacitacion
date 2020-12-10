import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import "./Home.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Form from "../components/Form/Form";

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <Form />
      <Footer />
    </div>
  );
};

export default Home;
