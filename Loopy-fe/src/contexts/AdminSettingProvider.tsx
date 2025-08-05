import { createContext, useContext } from "react";
import { useFunnel } from "@use-funnel/browser";
import type { UseFunnelOptions } from "@use-funnel/browser";
import type { AdminSettingSteps } from "../types/adminSteps"; 

const isEmpty = (data: unknown): data is {} =>
  typeof data === "object" && data !== null;

const funnelOptions: UseFunnelOptions<AdminSettingSteps> = {
  id: "setting",
  initial: {
    step: "setting",
    context: {},
  },
  steps: {
    setting: { guard: isEmpty },
    editProfile: { guard: isEmpty },
    manageAccount: { guard: isEmpty },
  },
};

const FunnelContext = createContext<ReturnType<typeof useFunnel<AdminSettingSteps>> | null>(null);

export const AdminSettingFunnelProvider = ({ children }: { children: React.ReactNode }) => {
  const funnel = useFunnel(funnelOptions);
  return (
    <FunnelContext.Provider value={funnel}>
      {children}
    </FunnelContext.Provider>
  );
};

export const useAdminSettingFunnel = () => {
  const ctx = useContext(FunnelContext);
  if (!ctx) throw new Error("useAdminSettingFunnel은 AdminSettingFunnelProvider 내부에서 사용해야 합니다.");
  return ctx;
};
