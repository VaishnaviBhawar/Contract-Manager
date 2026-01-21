export enum ContractStatus {
  CREATED = "CREATED",
  APPROVED = "APPROVED",
  SENT = "SENT",
  SIGNED = "SIGNED",
  LOCKED = "LOCKED",
  REVOKED = "REVOKED",
}

export interface ContractFieldValue {
  fieldId: string;
  value: string | boolean;
}

export interface Contract {
  id: string;
  name: string;
  blueprintId: string;
  blueprintName: string;
  status: ContractStatus;
  fields: ContractFieldValue[];
  createdAt: string;
}
