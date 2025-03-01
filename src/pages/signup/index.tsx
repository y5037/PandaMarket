import Head from "next/head";
import SignupForm from "../../components/signup/SignupForm";
import { SignupProvider } from "@/src/context/SignupProvider";

function RegistrationPage() {
  return (
    <>
      <Head>
        <title>회원가입 - 판다마켓</title>
      </Head>
      <SignupProvider>
        <SignupForm />
      </SignupProvider>
    </>
  );
}

export default RegistrationPage;
