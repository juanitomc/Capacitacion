import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonCard,
  IonCardHeader,
  IonTitle,
} from "@ionic/react";
import "./Form.css";
import Swal from "sweetalert2";

type Inputs = {
  nombre: string;
  apellido: string;
  edad: Number;
  descripcion: string;
};
const Form: React.FC = () => {
  const { register, handleSubmit, watch, errors } = useForm();

  const sendData: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    let parsedEdad = data.edad.toString();
    if (
      data.nombre === "" ||
      data.apellido === "" ||
      parsedEdad === "" ||
      data.descripcion === ""
    ) {
      Swal.fire({
        title: "Ocurrio un error",
        text: "verifique que los datos esten completos",
        icon: "error",
      });
    } else {
      Swal.fire({
        title: "Datos guardados",
        icon: "success",
      });
    }
  };

  return (
    <div className="anchoCompleto ion-margin-vertical ion-margin-horizontal ">
      <form
        className="center ion-margin-vertical ion-margin-horizontal "
        onSubmit={handleSubmit(sendData)}
      >
        <IonCard>
          <IonCardHeader>
            <IonLabel position="floating" text-align>
              Nombre
            </IonLabel>
          </IonCardHeader>
          <IonInput
            name="nombre"
            type="text"
            placeholder="Ingrese el nombre"
            ref={register}
            minlength={1}
          ></IonInput>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <IonLabel position="floating" text-align>
              Apellido
            </IonLabel>
          </IonCardHeader>
          <IonInput
            name="apellido"
            type="text"
            placeholder="Ingrese el apellido"
            ref={register}
          ></IonInput>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <IonLabel position="floating" text-align>
              Edad
            </IonLabel>
          </IonCardHeader>
          <IonInput
            name="edad"
            type="number"
            placeholder="Ingrese una edad"
            min="1"
            max="180"
            ref={register}
          ></IonInput>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <IonLabel position="floating" text-align>
              Descripcion
            </IonLabel>
          </IonCardHeader>
          <IonInput
            name="descripcion"
            type="text"
            placeholder="Descripcion"
            clearInput
            minlength={1}
            ref={register}
          ></IonInput>
        </IonCard>
        <IonButton expand="block" type="submit">
          Enviar datos
        </IonButton>
      </form>
    </div>
  );
};

export default Form;
