import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const { phone, source } = data;

    if (!phone) {
      return new Response(
        JSON.stringify({ success: false, message: 'Vui lòng nhập số điện thoại' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Determine source label in Vietnamese
    const sourceLabels: Record<string, string> = {
      'homepage': 'Trang chủ',
      'pricing': 'Trang bảng giá',
      'contact': 'Trang liên hệ',
      'cong-tac-vien': 'Trang cộng tác viên',
      'gioi-thieu-khach-hang': 'Trang giới thiệu khách hàng',
      'hop-tac': 'Trang hợp tác',
    };

    const sourceLabel = sourceLabels[source] || source || 'Không xác định';

    // Send email notification
    await resend.emails.send({
      from: 'vSmartSell <noreply@vsmartsell.com>',
      to: 'khoanguyen@futurify.vn',
      subject: `[vSmartSell] Khách hàng mới đăng ký tư vấn`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">Thông báo khách hàng mới</h2>
          <p>Xin chào,</p>
          <p>Có một khách hàng mới vừa đăng ký nhận tư vấn trên website vSmartSell.</p>

          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0 0 10px 0;"><strong>Số điện thoại:</strong> ${phone}</p>
            <p style="margin: 0;"><strong>Nguồn đăng ký:</strong> ${sourceLabel}</p>
          </div>

          <p>Vui lòng liên hệ khách hàng trong thời gian sớm nhất.</p>

          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;" />
          <p style="color: #6b7280; font-size: 12px;">
            Email này được gửi tự động từ hệ thống vSmartSell.
          </p>
        </div>
      `,
    });

    return new Response(
      JSON.stringify({ success: true, message: 'Cảm ơn bạn! Chúng tôi sẽ liên hệ trong thời gian sớm nhất.' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(
      JSON.stringify({ success: false, message: 'Có lỗi xảy ra. Vui lòng thử lại sau.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
