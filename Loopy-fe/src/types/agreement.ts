export type AgreementKey = "terms" | "privacy" | "location" | "marketing";

export type AgreementState = {
  terms: boolean;
  privacy: boolean;
  location: boolean;
  marketing: boolean;
};
