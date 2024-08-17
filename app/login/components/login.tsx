import React from "react";
import {
   GoogleOAuthProvider,
   GoogleLogin,
   CredentialResponse,
} from "@react-oauth/google";
import { useRouter } from "next/navigation";

const CLIENT_ID =
   process.env.REACT_APP_CLIENT_ID ||
   "220062495388-o5k307sfi9rmh399aj23b2ke1pr6veuc.apps.googleusercontent.com";

const LoginAuth = () => {
   const route = useRouter();

   const handleLoginSuccess = (credentialResponse: CredentialResponse) => {
      const googleToken = credentialResponse.credential;

      console.log("Token recebido com sucesso!");

      fetch("https://climate-alert-hub.onrender.com/auth/sign-in", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({ token: googleToken }),
      })
         .then((response) => {
            if (!response.ok) {
               throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
         })
         .then((data) => {
            console.log("Resposta do servidor recebida com sucesso");
            if (!data.token) {
               throw new Error("Token JWT inválido");
            }

            if (!data.user) {
               throw new Error("Usuário inválido");
            }

            localStorage.setItem("jwt", data.token);
            localStorage.setItem("user", JSON.stringify(data.user));

            route.push("/dashboard");
         })
         .catch((error) => {
            console.error(
               "Erro na requisição ou ao armazenar o token JWT:",
               error,
            );
         });
   };

   if (!CLIENT_ID) {
      console.log("O ID do cliente do Google não foi configurado.");
   }

   return (
      <div className="z-0">
         <GoogleOAuthProvider clientId={CLIENT_ID}>
            <GoogleLogin
               onSuccess={handleLoginSuccess}
               locale="en"
               width={300}
               type="standard"
            />
         </GoogleOAuthProvider>
      </div>
   );
};

export default LoginAuth;
