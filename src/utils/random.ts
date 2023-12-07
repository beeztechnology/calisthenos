import { randomBytes } from "crypto";

export const randomId = () => {
  return randomBytes(20).toString('hex');
}