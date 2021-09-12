import React, { createContext, useContext, useState } from "react";

interface AllBanksProps {
  getAllBanks: AllBanksType[];
  selectedBank: AllBanksType;
  bankRegister: BankRegisterType[];
}

interface AllBanksType {
  ispb: string;
  name: string;
  code: number;
  fullName: string;
}

interface BankRegisterType {
  id: number;
  allDataBank: AllBanksType;
  data: { agency: string; account: string };
}

interface PropsBrankContext {
  bank: AllBanksProps;
  setBank: React.Dispatch<React.SetStateAction<AllBanksProps>>;
}

const DEFAULT_VALUE: PropsBrankContext = {
  bank: {
    getAllBanks: [],
    selectedBank: { ispb: "", name: "", code: 0, fullName: "" },
    bankRegister: [],
  },
  setBank: () => {},
};

const BankContext = createContext<PropsBrankContext>(DEFAULT_VALUE);

export const ConstructionsProvider: React.FC = ({ children }) => {
  const [bank, setBank] = useState(DEFAULT_VALUE.bank);

  return (
    <BankContext.Provider value={{ bank, setBank }}>
      {children}
    </BankContext.Provider>
  );
};

export function useAllBank() {
  const context = useContext(BankContext);

  return context;
}
