import { createContext, useContext, useState, type ReactNode } from 'react';
import { ApplyModal } from '@/components/ApplyModal';

type ApplyContextType = {
  openApply: (programmeName?: string) => void;
};

const ApplyContext = createContext<ApplyContextType>({
  openApply: () => {},
});

export function ApplyProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [programmeName, setProgrammeName] = useState<string | undefined>();

  // Defensive: only accept a STRING. If someone passes an event, ignore it.
  const openApply = (name?: string) => {
    const safeName = typeof name === 'string' ? name : undefined;
    setProgrammeName(safeName);
    setIsOpen(true);
  };

  return (
    <ApplyContext.Provider value={{ openApply }}>
      {children}
      <ApplyModal
        open={isOpen}
        onClose={() => {
          setIsOpen(false);
          setProgrammeName(undefined);
        }}
        programmeName={programmeName}
      />
    </ApplyContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useApply() {
  return useContext(ApplyContext);
}