import { useState } from "react";

export const modalController = () => {
  const [showModal, setShowModal] = useState(false);
  const [isModalMessage, setIsModalMessage] = useState("");

  return {
    showModal,
    setShowModal,
    isModalMessage,
    setIsModalMessage,
  };
};
