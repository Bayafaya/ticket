
export type RegistrationParams = {
    type: "reset" | "new";
} & PasswordParams;

export interface PasswordParams {
    contact: string | number;
}
