import React from "react";

import { ConstructionsProvider } from "./Bank";

export const BankProvider: React.FC = ({ children }) => {
  return <ConstructionsProvider>{children}</ConstructionsProvider>;
};

export default { BankProvider };
