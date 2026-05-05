'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function getBookings() {
  return await prisma.bookingInquiry.findMany({
    orderBy: { createdAt: 'desc' }
  });
}

export async function addBooking(data: {
  fullName: string;
  email: string;
  phone: string;
  isWhatsApp: boolean;
  country: string;
  arrivalDate: string;
  adults: number;
  children: number;
  extraInfo?: string;
  sourcePage: string;
}) {
  const newBooking = await prisma.bookingInquiry.create({
    data: {
      ...data,
      status: 'new'
    }
  });
  revalidatePath('/admin');
  return newBooking;
}

export async function updateBookingStatus(id: string, status: string) {
  await prisma.bookingInquiry.update({
    where: { id },
    data: { status }
  });
  revalidatePath('/admin');
}

export async function deleteBooking(id: string) {
  await prisma.bookingInquiry.delete({
    where: { id }
  });
  revalidatePath('/admin');
}
