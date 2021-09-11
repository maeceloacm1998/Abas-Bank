import React, { createContext, useContext, useState } from "react";

interface AllBanksType {
  ispb: string;
  name: string;
  code: number;
  fullName: string;
}

interface PropsBrankContext {
  allBanks: AllBanksType;
}

const DEFAULT_VALUE = {
  allBanks: {
    ispb: "",
    name: "",
    code: 0,
    fullName: "",
  },
};

const BankContext = createContext<PropsBrankContext>(DEFAULT_VALUE);

export const ConstructionsProvider: React.FC = ({ children }) => {
  const [data, setData] = useState(DEFAULT_VALUE.allBanks);

  return (
    <BankContext.Provider
      value={{
        allBanks: data,
      }}
    >
      {children}
    </BankContext.Provider>
  );
};

export function useAllBank() {
  const context = useContext(BankContext);

  return context;
}
