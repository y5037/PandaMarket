import Head from "next/head";
import LoginForm from "@/src/components/login/LoginForm";
import { LoginProvider } from "@/src/context/LoginProvider";
import ErrorPage from "../_error";
import { useAuth } from "@/src/hooks/useAuth";

function LoginPage() {
  const { accessToken } = useAuth();

  if (accessToken) return <ErrorPage />;

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
