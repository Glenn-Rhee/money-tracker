import { ResponseError } from "@/error/Response-Error";
import JWT from "@/lib/jwt";
import { supabase } from "@/lib/supabaseClient";
import { UsersModel } from "@/model/users-model";
import { CreateUser, LoginUser, ResponsePayload } from "@/types";
import bcrypt from "bcrypt";
import { cookies } from "next/headers";
import { v4 as uuidv4 } from "uuid";

export default class AuthService {
  static async CreateUser(
    data: Omit<CreateUser, "confirmPassword">
  ): Promise<ResponsePayload> {
    const cookieStore = await cookies();
    const { data: dataSupabase, error } = await supabase
      .from("users")
      .select("*")
      .eq("email", data.email);

    if (!dataSupabase && error) {
      throw new ResponseError(500, "An error while sign up!");
    }

    if (dataSupabase.length > 0) {
      throw new ResponseError(409, "Email is already registered!");
    }

    const encryptPass = await bcrypt.hash(data.password, 10);

    const createdUser = await supabase.from("users").insert<UsersModel>([
      {
        id: uuidv4(),
        fullname: data.fullName,
        dateofbirth: data.dateOfBirth,
        email: data.email,
        mobilenumber: data.mobileNumber,
        password: encryptPass,
      },
    ]);

    if (createdUser.error) {
      throw new ResponseError(500, "An error while sign up!");
    }

    const token = JWT.signIn({
      email: data.email,
      password: encryptPass,
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
    const { data: dataSupabase, error } = await supabase
      .from("users")
      .select("*")
      .eq("email", data.email);
    console.log(dataSupabase);
    if (!dataSupabase && error) {
      throw new ResponseError(500, "An error while login!");
    }

    if (dataSupabase.length === 0) {
      throw new ResponseError(404, "Email is not found!");
    }
    const user = dataSupabase[0] as UsersModel;
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
