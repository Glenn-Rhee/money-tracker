import { ResponseError } from "@/error/Response-Error";
import { ResponsePayload } from "@/types";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { ZodError } from "zod";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function DELETE(_req: NextRequest): Promise<NextResponse> {
  try {
    const cookieStore = await cookies();
    cookieStore.delete("token");
    return NextResponse.json<ResponsePayload>({
      status: "success",
      statusCode: 201,
      message: "Successfully logout!",
    });
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

    console.log("Error at POST /api/auth/login: ", error);
    return NextResponse.json<ResponsePayload>({
      status: "failed",
      statusCode: 500,
      message: "An error occured!",
    });
  }
}
