import { prisma } from "@/lib/prisma";


async function testConnection() {
  try {
    // Attempt to connect to the database
    await prisma.$connect();
    console.log('Database connection successful!');
  } catch (error) {
    console.error('Error connecting to the database:', error);
  } finally {
    // Disconnect after the test
    await prisma.$disconnect();
  }
}

testConnection();
