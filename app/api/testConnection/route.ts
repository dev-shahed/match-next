// import { NextResponse } from 'next/server';
// import { prisma } from '@/lib/prisma';

// export async function GET() {
//   try {
//     // Attempt to connect to the database
//     await prisma.$connect();
//     console.log('Database connection successful!');
//     return NextResponse.json({ message: 'Database connection successful!' });
//   } catch (error: unknown) {
//     console.error('Error connecting to the database:', error);

//     // Ensure error message is safely retrieved
//     const errorMessage =
//       (error as Error)?.message || 'An unknown error occurred while connecting to the database';

//     return NextResponse.json(
//       { message: 'Failed to connect to the database', error: errorMessage },
//       { status: 500 }
//     );
//   } finally {
//     // Disconnecting for testing purposes
//     await prisma.$disconnect();
//   }
// }

//    "test-connection": "ts-node app/api/testConnection/route.ts",
