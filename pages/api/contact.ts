import type { NextApiRequest, NextApiResponse } from 'next'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

type ContactFormData = {
  name: string
  email: string
  subject: string
  message: string
}

type ResponseData = {
  message: string
  error?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const { name, email, subject, message } = req.body as ContactFormData

    // バリデーション
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: 'すべてのフィールドを入力してください' })
    }

    // メール送信
    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Resendのテストドメイン
      to: [process.env.CONTACT_EMAIL || 'your-email@example.com'], // 受信先メールアドレス
      replyTo: email, // 送信者のメールアドレスを返信先に設定
      subject: `【お問い合わせ】${subject}`,
      html: `
        <h2>新しいお問い合わせがあります</h2>
        <p><strong>名前:</strong> ${name}</p>
        <p><strong>メールアドレス:</strong> ${email}</p>
        <p><strong>件名:</strong> ${subject}</p>
        <p><strong>メッセージ:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    })

    return res.status(200).json({ message: 'メールを送信しました' })
  } catch (error) {
    console.error('メール送信エラー:', error)
    return res.status(500).json({
      message: 'メールの送信に失敗しました',
      error: error instanceof Error ? error.message : '不明なエラー',
    })
  }
}
