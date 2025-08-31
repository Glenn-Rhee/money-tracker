import z from "zod";

export class AuthValidation {
  static readonly LOGIN = z.object({
    email: z.email({ error: "Please fill email properly!" }),
    password: z
      .string({ error: "Please fill password properly" })
      .min(8, { error: "Minimum length of password is 8" }),
  });
}
