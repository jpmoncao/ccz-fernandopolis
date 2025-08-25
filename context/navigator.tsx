import { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

interface NavigatorContextType {
  pageTitle: string;
  setPageTitle: Dispatch<SetStateAction<string>>;
}

export const NavigatorContext = createContext<NavigatorContextType | undefined>(undefined);

// Define o tipo das props do provider
interface NavigatorProviderProps {
  children: ReactNode;
}

export const NavigatorProvider = ({ children }: NavigatorProviderProps) => {
  const [pageTitle, setPageTitle] = useState<string>('');

  return (
    <NavigatorContext.Provider value={{ pageTitle, setPageTitle }}>
      {children}
    </NavigatorContext.Provider>
  );
};
