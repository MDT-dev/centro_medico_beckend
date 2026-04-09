import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";


interface JwtPayload {
  sub: string
  role: string
  companyId?: string
  companySlug?: string
}

export interface RequestWithUser extends Request {
  user: AuthUser;
}

export interface AuthUser {
  id: string;
  role: string;
}

export interface AuthCompany {
  id?: string;
  slug?: string;
}

export interface RequestWithUser extends Request {
  user: AuthUser;
  company?: AuthCompany;
}


interface RequestWithCookies extends Request {
  cookies: {
    auth_token?: string;
    [key: string]: any;
  };
}

export function ensuredAuthenticated() {
  return (
    req: RequestWithCookies & Partial<RequestWithUser>,
    res: Response,
    next: NextFunction
  ) => {
    const token = req.cookies?.auth_token;

    if (!token) {
      return res.status(401).json({ error: "Token não fornecido" });
    }

    try {
      const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET_KEY!
      ) as JwtPayload;

      req.user = {
        id: decoded.sub, // ✅ AQUI ESTÁ A CORREÇÃO
        role: decoded.role,
      };

      // opcional e recomendado
      req.company = {
        id: decoded.companyId,
        slug: decoded.companySlug,
      };

      return next();
    } catch {
      return res.status(401).json({ error: "Token inválido ou expirado" });
    }
  };
}

