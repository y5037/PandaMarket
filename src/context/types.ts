export interface ContextType {
  postLogin?: () => void;
  postSignup?: () => void;
  isEmail: string;
  setIsEmail: (value: string) => void;
  isName?: string;
  setIsName?: (value: string) => void;
  isPassword: string;
  setIsPassword: (value: string) => void;
  isRePassword?: string;
  setIsRePassword?: (value: string) => void;
  showModal: boolean;
  setShowModal: (value: boolean) => void;
  isModalMessage: string;
  setIsModalMessage: (value: string) => void;
  isSignup?: boolean;
  setIsSignup?: (value: boolean) => void;
  isLoader: boolean;
}
