import { prisma } from "../lib/prisma";

type CreateDoctorProfileInput = {
  userId: string;
  crm: string;
  specialization: string;
  bio?: string;
};


type CreatePatientProfileInput = {
  userId: string;
  birthDate?: Date;
  gender?: string;
  address?: string;
  bloodType?: string;
  allergies?: string;
};

export class CreateDoctorProfileService {
  async execute({ userId, crm, specialization, bio }: CreateDoctorProfileInput) {
    
    // Verifica se user existe
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: { doctorProfile: true },
    });

    if (!user) throw new Error("User not found");

    // Valida role
    if (user.role !== "MEDICO") {
      throw new Error("User is not a doctor");
    }

    // Já tem profile?
    if (user.doctorProfile) {
      throw new Error("Doctor profile already exists");
    }

    // CRM único
    const existingCRM = await prisma.doctorProfile.findUnique({
      where: { crm },
    });

    if (existingCRM) {
      throw new Error("CRM already in use");
    }

    const profile = await prisma.doctorProfile.create({
      data: {
        userId,
        crm,
        specialization,
        ...(bio ? { bio } : {}),
      },
    });

    return profile;
  }
}



export class CreatePatientProfileService {
  async execute(data: CreatePatientProfileInput) {
    const user = await prisma.user.findUnique({
      where: { id: data.userId },
      include: { patientProfile: true },
    });

    if (!user) throw new Error("User not found");

    if (user.role !== "PACIENTE") {
      throw new Error("User is not a patient");
    }

    if (user.patientProfile) {
      throw new Error("Patient profile already exists");
    }

    return prisma.patientProfile.create({
      data: {
        ...data,
      },
    });
  }
}