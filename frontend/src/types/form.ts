export interface IFormCarryResponse {
  code: number;
  message: string;
  redirected: boolean;
  status: string;
  title: string;
}

export interface FormProps {
  id: string;
  confirmation?: string;
}
