import { ResponseError } from "@/error/Response-Error";
import JWT from "@/lib/jwt";
import { prisma } from "@/lib/prisma";
import { CreateUser, LoginUser, ResponsePayload } from "@/types";
import bcrypt from "bcrypt";
import { cookies } from "next/headers";
import { v4 as uuidv4 } from "uuid";

export default class AuthService {
  static async CreateUser(
    data: Omit<CreateUser, "confirmPassword">
  ): Promise<ResponsePayload> {
    const cookieStore = await cookies();
    let user = await prisma.user.findFirst({ where: { email: data.email } });
    if (user) {
      throw new ResponseError(409, "Email is registered!");
    }

    user = await prisma.user.findFirst({
      where: { mobileNumber: data.mobileNumber },
    });

    if (user) {
      throw new ResponseError(409, "Mobile phone is registered!");
    }

    const encryptPass = await bcrypt.hash(data.password, 10);

    const createdUser = await prisma.user.create({
      data: {
        id: uuidv4(),
        fullName: data.fullName,
        email: data.email,
        mobileNumber: data.mobileNumber,
        dateOfBirth: data.dateOfBirth,
        password: encryptPass,
      },
    });

    const token = JWT.signIn({
      email: createdUser.email,
      password: createdUser.password,
    });

    cookieStore.set("token", token);

    return {
      status: "success",
      statusCode: 201,
      message: "Successfully created one user",
    };
  }

  static async login(data: LoginUser): Promise<ResponsePayload> {
    const cookieStore = await cookies();
    const user = await prisma.user.findFirst({ where: { email: data.email } });
    if (!user) {
      throw new ResponseError(404, "Email not found!");
    }

    const isPasswordMatch = await bcrypt.compare(data.password, user.password);
    if (!isPasswordMatch) {
      throw new ResponseError(401, "Wrong Password!");
    }

    const token = JWT.signIn({
      email: user.email,
      password: user.password,
    });

    cookieStore.set("token", token);

    return {
      status: "success",
      statusCode: 200,
      message: "Login Successfully!",
    };
  }
}
