import Head from "next/head";
import LoginForm from "@/src/components/login/LoginForm";
import { LoginProvider } from "@/src/context/LoginProvider";

function LoginPage() {
  return (
    <>
      <Head>
        <title>로그인 - 판다마켓</title>
      </Head>
      <LoginProvider>
        <LoginForm />
      </LoginProvider>
    </>
  );
}

export default LoginPage;
