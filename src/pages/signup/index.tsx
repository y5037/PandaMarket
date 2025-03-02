import Head from "next/head";
import SignupForm from "../../components/signup/SignupForm";
import { SignupProvider } from "@/src/context/SignupProvider";
import ErrorPage from "../_error";
import { useAuth } from "@/src/hooks/useAuth";

function RegistrationPage() {
  const { accessToken } = useAuth();

  if (accessToken) return <ErrorPage />;

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
