import { ContractStatus } from "../models/contract";

export const CONTRACT_TRANSITIONS: Record<
  ContractStatus,
  ContractStatus[]
> = {
  CREATED: ["APPROVED", "REVOKED"],
  APPROVED: ["SENT", "REVOKED"],
  SENT: ["SIGNED", "REVOKED"],
  SIGNED: ["LOCKED"],
  LOCKED: [],
  REVOKED: [],
};

export const canTransition = (
  from: ContractStatus,
  to: ContractStatus
) => CONTRACT_TRANSITIONS[from].includes(to);
