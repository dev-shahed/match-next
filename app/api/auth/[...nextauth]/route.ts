import { handlers } from '../../../auth';

export const GET =
  handlers?.GET ||
  (() => {
    throw new Error("GET handler is not defined");
  });
export const POST =
  handlers?.POST ||
  (() => {
    throw new Error("POST handler is not defined");
  });
