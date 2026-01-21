import { create } from "zustand";
import type { Contract, ContractStatus } from "../models/contract";
import { canTransition } from "../utils/contractLifecycle";

interface ContractState {
  contracts: Contract[];
  addContract: (c: Contract) => void;
  updateStatus: (id: string, status: ContractStatus) => void;
}

export const useContractStore = create<ContractState>((set) => ({
  contracts: JSON.parse(localStorage.getItem("contracts") || "[]"),

  addContract: (c) =>
    set((state) => {
      const updated = [...state.contracts, c];
      localStorage.setItem("contracts", JSON.stringify(updated));
      return { contracts: updated };
    }),

  updateStatus: (id, newStatus) =>
    set((state) => {
      const updated = state.contracts.map((c) => {
        if (c.id === id && canTransition(c.status, newStatus)) {
          return { ...c, status: newStatus };
        }
        return c;
      });
      localStorage.setItem("contracts", JSON.stringify(updated));
      return { contracts: updated };
    }),
}));
