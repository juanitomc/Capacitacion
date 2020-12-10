import React from "react";
import "./Header.css";

import {
  IonHeader,
  IonContent,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
} from "@ionic/react";

import Logo from "../../assets/Logo_Proguide.png";

const Header: React.FC = () => {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <img src={Logo} />
          <IonTitle>Ejercicio numero 1</IonTitle>
        </IonToolbar>
      </IonHeader>
    </>
  );
};

export default Header;
