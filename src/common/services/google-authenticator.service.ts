// import { Injectable } from "@nestjs/common";
// import * as speakeasy from "speakeasy";
// import * as qrcode from "qrcode";
// import { CustomError } from "../helpers/exceptions";

// @Injectable()
// export class GoogleAuthenticatorService {
//   /**
//    * Create random string
//    * @param {number} length
//    * @param {string|null} type
//    * @return {string}
//    */
//   async generateSecret() {
//     try {
//       const secret = await speakeasy.generateSecret({
//         name: "NumberDekhoDevelopment",
//         length: 20,
//       });
//       console.log("secret: ", secret);

//       const otpauthUrl = secret.otpauth_url; // This URL is provided by `speakeasy.generateSecret()`
//       return qrcode.toDataURL(otpauthUrl);
//     } catch (error) {
//       // If any error occurs, throw a custom "Unknown Error" with the error message and status
//       throw CustomError.UnknownError(error?.message, error?.status);
//     }
//   }

//   async verifyToken(verificationCode: string) {
//     try {
//       const verifyToken = speakeasy.totp.verify({
//         secret: process.env.GOOGLE_AUTHENTICATOR_SECRET,
//         encoding: "base32",
//         token: verificationCode,
//       });
//       return verifyToken;
//     } catch (error) {
//       // If any error occurs, throw a custom "Unknown Error" with the error message and status
//       throw CustomError.UnknownError(error?.message, error?.status);
//     }
//   }
// }
