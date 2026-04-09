// permissions.ts
import { Request, Response, NextFunction } from "express";

// 🔐 Middleware para restringir por role
export function is(requiredRoles: string[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    const user = (req as any).user;
    

    if (!user) return res.status(401).json({ error: "Não autenticado" });
    if (!requiredRoles.includes(user.role)) {
      return res.status(403).json({ error: "Acesso negado: role insuficiente" });
    }

    return next();
  };
}
