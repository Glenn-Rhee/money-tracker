import { ResponseError } from "@/error/Response-Error";
import AuthService from "@/service/Auth-service";
import { CreateUser, ResponsePayload } from "@/types";
import { AuthValidation } from "@/Validation/auth-validation";
import { Validation } from "@/Validation/Validation";
import { NextRequest, NextResponse } from "next/server";
import { ZodError } from "zod";

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const reqBody = (await req.json()) as CreateUser;
    const { confirmPassword, ...data } = Validation.validate(
      AuthValidation.SIGNUP,
      reqBody
    );

    if (data.password !== confirmPassword) {
      throw new ResponseError(400, "Password doesn't match!");
    }

    const response = await AuthService.CreateUser(data);
    return NextResponse.json<ResponsePayload>(response);
  } catch (error) {
    if (error instanceof ResponseError) {
      return NextResponse.json<ResponsePayload>({
        status: "failed",
        statusCode: error.status,
        message: error.message,
      });
    }

    if (error instanceof ZodError) {
      return NextResponse.json<ResponsePayload>({
        status: "failed",
        statusCode: 400,
        message: error.issues[0].message,
      });
    }

    console.log("Error at POST /api/auth/signup: ", error);
    return NextResponse.json<ResponsePayload>({
      status: "failed",
      statusCode: 500,
      message: "An error occured!",
    });
  }
}
