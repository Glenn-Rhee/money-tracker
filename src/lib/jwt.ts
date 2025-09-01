import jwt from "jsonwebtoken";

interface Payload extends jwt.JwtPayload {
  email: string;
  password: string;
}

export default class JWT {
  static signIn(data: { email: string; password: string }) {
    return jwt.sign(data, process.env.PRIVATE_KEY!, {
      expiresIn: "1y",
      algorithm: "HS384",
    });
  }

  static verify(token: string) {
    try {
      const decoded = jwt.verify(token, process.env.PRIVATE_KEY!) as Payload;
      return decoded;
    } catch (error) {
      console.log("Failed while verify token: ", error);
      return null;
    }
  }

  static checkExp(exp: number) {
    const expiredDate = new Date(exp * 1000);
    const dateNow = new Date();

    return expiredDate > dateNow
  }
}
