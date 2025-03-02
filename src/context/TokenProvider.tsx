import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type Token = {
  accessToken: string | null;
};

const TokenContext = createContext<Token>({
  accessToken: null,
});

export function TokenProvider({ children }: { children: ReactNode }) {
  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    const accessToken =
      typeof window !== "undefined"
        ? sessionStorage.getItem("accessToken")
        : null;

    setAccessToken(accessToken);
  }, []);

  return (
    <TokenContext.Provider
      value={{
        accessToken,
      }}
    >
      {children}
    </TokenContext.Provider>
  );
}

export function useTokenProps() {
  const context = useContext(TokenContext);

  return context;
}
