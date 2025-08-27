import { ValuesItem } from "@/src/components/boards/shared/types";
import { ChangeEvent } from "react";

export const useBoardFormState = (
  setValues: React.Dispatch<React.SetStateAction<ValuesItem>>
) => {
  const handleChange = (name: string, value: string | number | string[]) => {
    setValues((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let { name, value }: { name: string; value: string | number | string[] } =
      e.target;
    handleChange(name, value);
  };

  return {
    handleInputChange,
  };
};
