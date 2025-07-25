import { JwtUser } from '../auth/guards/roles.guard';

declare module 'express-serve-static-core' {
  interface Request {
    user?: JwtUser;
  }
}
