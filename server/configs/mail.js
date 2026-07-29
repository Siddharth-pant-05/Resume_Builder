import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const transporter = {
  sendMail: async ({ from, to, subject, html, text }) => {
    const { data, error } = await resend.emails.send({
      from: from || 'onboarding@resend.dev', // swap to your verified domain later
      to,
      subject,
      html,
      text,
    })

    if (error) {
      throw new Error(error.message || 'Failed to send email')
    }

    return data
  },
}

export default transporter