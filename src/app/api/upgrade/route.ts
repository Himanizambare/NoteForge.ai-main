// import { NextApiRequest, NextApiResponse } from "next";

// // src/app/api/upgrade/route.ts

// export async function POST(request: Request) {
//   const body = await request.json();
//   const { email } = body;

//   if (!email) {
//     return new Response(JSON.stringify({ message: "Missing email" }), {
//       status: 400,
//     });
//   }

//   // Replace with your UPI ID and metadata
//   const upiId = "himanizambare3@okicici";
//   const name = "NoteForge.ai";
//   const amount = "9.99";
//   const note = "Upgrade to Premium";

//   const upiUrl = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(name)}&am=${amount}&cu=INR&tn=${encodeURIComponent(note)}`;

//   return new Response(
//     JSON.stringify({ message: "success", upiLink: upiUrl }),
//     { status: 200, headers: { "Content-Type": "application/json" } }
//   );
// }
