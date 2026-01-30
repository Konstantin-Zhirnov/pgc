export const runtime = 'nodejs'

import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  require('dotenv').config()

  const body = await req.json()

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD,
    },
  })

  try {
    await transporter.sendMail({
      from: 'kostya.zhirnov@gmail.com',
      to: 'info@pgcdrywall.com',
      subject: 'Message from website:',
      html: `
  <div style="
    font-family: Arial, Helvetica, sans-serif;
    background-color: #13151a;
    padding: 24px;
  ">
    <div style="
      max-width: 600px;
      margin: 0 auto;
      background-color: #1a1d24;
      border-radius: 10px;
      padding: 24px;
      box-shadow: 0 8px 24px rgba(0,0,0,0.4);
    ">
      <h2 style="
        margin: 0 0 12px;
        color: #ffb800;
        font-size: 20px;
      ">
        Message from website
      </h2>

      <p style="
        margin: 0 0 24px;
        color: #c5c8dc;
        font-size: 14px;
        opacity: 0.85;
      ">
        pgcdrywall.com
      </p>

      <table style="
        width: 100%;
        border-collapse: collapse;
        font-size: 14px;
        color: #c5c8dc;
      ">
        <tr>
          <td style="padding: 8px 0; font-weight: 600; width: 90px;">
            Name:
          </td>
          <td style="padding: 8px 0;">
            ${body.name}
          </td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: 600;">
            Phone:
          </td>
          <td style="padding: 8px 0;">
            ${body.phone}
          </td>
        </tr>
      </table>

      <div style="
        margin-top: 24px;
        padding: 16px;
        background-color: #13151a;
        border-left: 4px solid #ffb800;
        border-radius: 6px;
      ">
        <p style="
          margin: 0 0 8px;
          font-weight: 600;
          color: #ffb800;
        ">
          Message:
        </p>
        <p style="
          margin: 0;
          color: #c5c8dc;
          white-space: pre-line;
          line-height: 1.6;
        ">
          ${body.message}
        </p>
      </div>
    </div>
  </div>
`,
    })
  } catch (error) {
    // @ts-ignore
    return NextResponse.json({ error: error.message || error.toString() })
  }
  return NextResponse.json({ message: 'Success!' })
}
