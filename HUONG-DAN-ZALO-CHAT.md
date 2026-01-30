# Hướng dẫn tích hợp Zalo Chat Widget vào website vSmartSell

## Yêu cầu

- Cần có **Zalo Official Account (OA)** - tạo tại: https://oa.zalo.me/
- Lấy **OAID** (Official Account ID) từ trang quản lý OA

## Cách lấy OAID

1. Truy cập https://oa.zalo.me/manage/oa
2. Tạo OA mới hoặc chọn OA hiện có
3. Vào **Cài đặt** > sao chép OAID

## Cách tạo Widget Chat

1. Truy cập https://developers.zalo.me/docs/social/zalo-chat-widget
2. Nhập OAID
3. Tùy chỉnh:
   - Bật/tắt cửa sổ chat mini
   - Lời chào mặc định
   - Vị trí hiển thị (góc trái/phải)
   - Màu sắc nút Zalo
4. Nhấn **Lấy mã** để tạo code snippet

## Cách tích hợp vào website Astro

Thêm đoạn code sau vào file `src/layouts/BaseLayout.astro`, trước thẻ đóng `</body>`:

```html
<!-- Zalo Chat Widget -->
<div class="zalo-chat-widget"
  data-oaid="YOUR_OAID_HERE"
  data-welcome-message="Xin chào! Cảm ơn bạn đã quan tâm đến vSmartSell. Chúng tôi có thể giúp gì cho bạn?"
  data-autopopup="0"
  data-width="350"
  data-height="420">
</div>
<script src="https://sp.zalo.me/plugins/sdk.js"></script>
```

Thay `YOUR_OAID_HERE` bằng OAID thực tế.

## Tùy chỉnh

| Thuộc tính | Mô tả | Giá trị |
|---|---|---|
| `data-oaid` | ID của Zalo Official Account | Bắt buộc |
| `data-welcome-message` | Tin nhắn chào mừng | Tùy chỉnh |
| `data-autopopup` | Tự động mở popup | `0` (tắt) / `1` (bật) |
| `data-width` | Chiều rộng cửa sổ chat | Số pixel (VD: 350) |
| `data-height` | Chiều cao cửa sổ chat | Số pixel (VD: 420) |

## Tham khảo

- Tài liệu chính thức: https://developers.zalo.me/docs/social/zalo-chat-widget
- Hướng dẫn chi tiết: https://cnv.vn/nhung-zalo-chat-vao-website/
- Quản lý OA: https://oa.zalo.me/
