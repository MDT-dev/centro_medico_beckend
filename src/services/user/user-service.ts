import { compare, hash } from "bcryptjs";
import { prisma } from "../../lib/prisma";


type UpdateUserInput = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  role?: "ADMIN" | "GERENTE" | "MEDICO" | "RECEPCIONISTA" | "PACIENTE";
  isActive?: boolean;
};

export interface UserRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone?: string;
  role?: "ADMIN" | "GERENTE" | "MEDICO" | "RECEPCIONISTA" | "PACIENTE";
}


export class ChangePasswordService {
  async execute(userId: string, currentPassword: string, newPassword: string) {
    console.log("UserId recebido:", userId); // <--- veja o valor
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { id: true, password: true }, // pega o password explicitamente
    });

    console.log("User encontrado:", user); // <--- null? id errado
    if (!user) throw new Error("User not found");

    const match = await compare(currentPassword, user.password);
    if (!match) throw new Error("Incorrect current password");

    const newHash = await hash(newPassword, 8);

    return prisma.user.update({
      where: { id: userId },
      data: { password: newHash },
    });
  }
}

export class CheckEmailService {
  static async execute(email: string) {
    if (!email) {
      throw new Error("email é obrigatório");
    }

    const user = await prisma.user.findUnique({
      where: { email: email },
    });

    return {
      available: !user,
      message: user ? "email já está em uso" : "email disponível",
    };
  }
}

export class CreateUserService {
  async execute({
    firstName,
    lastName,
    password,
    email,
    phone,
    role,
  }: UserRequest) {
    // Verifica se já existe username ou email
    const existUser = await prisma.user.findFirst({
      where: {
        OR: [{ firstName, lastName }, { email }],
      },
    });

    if (existUser) {
      throw new Error("User already exists");
    }

    // Cria senha criptografada
    const passwordHash = await hash(password, 8);

    // Cria usuário com dados dinâmicos
    const user = await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        password: passwordHash,
        role: role ?? "MEDICO", // valor padrão
        isActive: true,
        ...(phone ? { phone } : {}),
      },
    });

    return user;
  }
}

export class GetAllUsersService {
  async execute() {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        phone: true,
        role: true,
        isActive: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!users) throw new Error("Users not found");

    return users;
  }
}

export class GetUserService {
  async execute(userId: string) {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        phone: true,
        role: true,
        isActive: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!user) throw new Error("User not found");

    return user;
  }
}

export class UpdateUserService {
  async execute(userId: string, data: UpdateUserInput) {
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) throw new Error("User not found");

    return prisma.user.update({
      where: { id: userId },
      data: {
        ...data,
      },
    });
  }
}
