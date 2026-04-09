import { prisma } from "../src/lib/prisma";
import bcrypt from "bcryptjs";



async function main() {
   const password = await bcrypt.hash("123456", 10);
  console.log("🌱 Seeding database...")

  // ===========================
  // ADMIN
  // ===========================
  const admin = await prisma.user.create({
    data: {
      email: "admin@clinica.com",
      password: password,
      firstName: "Admin",
      lastName: "Sistema",
      role: "ADMIN",
    },
  })

  // ===========================
  // DOCTOR
  // ===========================
  const doctor = await prisma.user.create({
    data: {
      email: "doctor@clinica.com",
      password: password,
      firstName: "João",
      lastName: "Médico",
      role: "MEDICO",
      doctorProfile: {
        create: {
          crm: "CRM12345",
          specialization: "Clínico Geral",
          bio: "Médico experiente",
        },
      },
    },
  })

  // ===========================
  // PATIENT
  // ===========================
  const patient = await prisma.user.create({
    data: {
      email: "patient@clinica.com",
      password: password,
      firstName: "Maria",
      lastName: "Paciente",
      role: "PACIENTE",
      patientProfile: {
        create: {
          gender: "Feminino",
          bloodType: "O+",
          allergies: "Nenhuma",
        },
      },
    },
  })

  // ===========================
  // APPOINTMENT
  // ===========================
  const appointment = await prisma.appointment.create({
    data: {
      patientId: patient.id,
      doctorId: doctor.id,
      startTime: new Date(),
      endTime: new Date(new Date().getTime() + 30 * 60000),
      status: "CONFIRMED",
      notes: "Consulta de rotina",
    },
  })

  // ===========================
  // PATIENT RECORD
  // ===========================
  await prisma.patientRecord.create({
    data: {
      patientId: patient.id,
      appointmentId: appointment.id,
      diagnosis: "Gripe leve",
      notes: "Repouso e hidratação",
      temperature: 37.5,
      weight: 65,
      height: 1.7,
    },
  })

  // ===========================
  // PRESCRIPTION
  // ===========================
  await prisma.prescription.create({
    data: {
      patientId: patient.id,
      doctorId: doctor.id,
      appointmentId: appointment.id,
      medications: [
        { name: "Paracetamol", dose: "500mg" },
      ],
      notes: "Tomar 2x ao dia",
    },
  })

  // ===========================
  // INVOICE + PAYMENT
  // ===========================
  const invoice = await prisma.invoice.create({
    data: {
      invoiceNumber: "INV-001",
      patientId: patient.id,
      appointmentId: appointment.id,
      amount: 15000,
      dueDate: new Date(),
    },
  })

  await prisma.payment.create({
    data: {
      invoiceId: invoice.id,
      amount: 15000,
      method: "CASH",
    },
  })

  console.log("✅ Seed concluído")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })