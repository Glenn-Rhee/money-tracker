import z from "zod";

export class AuthValidation {
  static readonly LOGIN = z.object({
    email: z.email({ error: "Please fill email properly!" }),
    password: z
      .string({ error: "Please fill password properly" })
      .min(8, { error: "Minimum length of password is 8" }),
  });

  static readonly SIGNUP = z.object({
    fullName: z
      .string({ error: "Please fill fullname properly!" })
      .min(1, { error: "Minimum length of full name is 1" }),
    email: z.email({ error: "Please fill email properly!" }),
    mobileNumber: z
      .string()
      .regex(/^08[0-9]{8,11}$/, "Mobile Number is invalid!"),
    dateOfBirth: z.date({ error: "Invalid date!" }),
    password: z
      .string({ error: "Please fill password properly" })
      .min(8, { error: "Minimum length of password is 8" }),
    confirmPassword: z
      .string({ error: "Please fill password properly" })
      .min(8, { error: "Minimum length of password is 8" }),
  });
}
