# Hướng Dẫn Tạo Bài Viết Blog

## Bước 1: Tạo file mới

Tạo file mới trong thư mục:
```
src/content/blog/
```

**Đặt tên file:** Sử dụng tiêu đề bài viết, viết thường, thay dấu cách bằng dấu gạch ngang `-`, không dấu.

Ví dụ: `gia-sat-thep-tang-manh-thang-1-2026.md`

---

## Bước 2: Copy template này vào đầu file

```markdown
---
title: "Tiêu đề bài viết ở đây"
description: "Mô tả ngắn 1-2 câu về nội dung bài viết (hiển thị trên Google)"
pubDate: 2026-01-26
author: "vSmartSell Team"
image: "https://link-hinh-anh-dai-dien.jpg"
category: "tin-tuc-thi-truong"
categoryLabel: "Tin tức thị trường"
readingTime: "5 phút"
---

Nội dung bài viết bắt đầu từ đây...
```

---

## Bước 3: Viết nội dung

### Cấu trúc đề xuất:

```markdown
Đoạn mở đầu giới thiệu vấn đề (2-3 câu)

## Tiêu đề mục 1

Nội dung mục 1...

## Tiêu đề mục 2

Nội dung mục 2...

### Tiêu đề phụ (nếu cần)

Nội dung chi tiết...

## Kết luận

Tóm tắt và kêu gọi hành động.
```

### Định dạng văn bản:

| Muốn làm | Viết như này |
|----------|--------------|
| **In đậm** | `**chữ in đậm**` |
| *In nghiêng* | `*chữ in nghiêng*` |
| Tiêu đề lớn | `## Tiêu đề` |
| Tiêu đề nhỏ | `### Tiêu đề phụ` |
| Danh sách | `- Mục 1` |
| Link | `[văn bản](https://url)` |

---

## Bước 4: Thêm hình ảnh

Upload hình lên hosting (Imgur, Google Drive public, hoặc thư mục `/public/images/`)

Chèn vào bài viết:
```markdown
![Mô tả hình](https://link-hinh-anh.jpg)
```

---

## Ví dụ bài viết hoàn chỉnh

```markdown
---
title: "Giá Sắt Thép Tăng 10% Trong Tháng 1/2026 - Nguyên Nhân Và Dự Báo"
description: "Phân tích nguyên nhân giá sắt thép tăng mạnh đầu năm 2026 và dự báo xu hướng thị trường trong quý 1."
pubDate: 2026-01-26
author: "vSmartSell Team"
image: "https://example.com/gia-sat-thep.jpg"
category: "tin-tuc-thi-truong"
categoryLabel: "Tin tức thị trường"
readingTime: "4 phút"
---

Thị trường sắt thép Việt Nam đầu năm 2026 chứng kiến đợt tăng giá mạnh nhất trong 2 năm qua. Bài viết phân tích nguyên nhân và dự báo xu hướng sắp tới.

## Tình Hình Giá Sắt Thép Hiện Tại

Theo số liệu từ Hiệp hội Thép Việt Nam, giá thép xây dựng đã tăng **10-12%** so với tháng trước.

| Loại thép | Giá tháng 12/2025 | Giá tháng 1/2026 | Tăng |
|-----------|-------------------|------------------|------|
| Thép cuộn | 14.500đ/kg | 16.000đ/kg | +10% |
| Thép thanh | 15.000đ/kg | 16.800đ/kg | +12% |

## Nguyên Nhân Tăng Giá

### 1. Nhu cầu xây dựng tăng cao

Các dự án hạ tầng lớn khởi công đầu năm...

### 2. Chi phí nguyên liệu tăng

Giá quặng sắt thế giới tăng 15%...

## Dự Báo Quý 1/2026

Các chuyên gia nhận định giá sẽ tiếp tục tăng nhẹ trong tháng 2...

## Lời Khuyên Cho Chủ Cửa Hàng VLXD

- Cập nhật giá bán kịp thời để bảo toàn lợi nhuận
- Sử dụng **phần mềm vSmartSell** để theo dõi giá nhập và điều chỉnh giá bán tự động
- Thông báo cho khách hàng về xu hướng giá

---

*Cần hỗ trợ quản lý giá cả hiệu quả? [Dùng thử vSmartSell miễn phí 15 ngày](https://vsmartsell.com)*
```

---

## Các chuyên mục có sẵn

| Category ID | Tên hiển thị | Dùng cho |
|-------------|--------------|----------|
| `tin-tuc-thi-truong` | Tin tức thị trường | Tin giá cả, xu hướng ngành |
| `tin-tuc-vsmartsell` | Tin tức vSmartSell | Cập nhật phần mềm, khuyến mãi |
| `meo-hay` | Mẹo hay | Hướng dẫn, tips kinh doanh |
| `kien-thuc-kinh-doanh` | Kiến thức kinh doanh | Bài viết chuyên sâu |

---

## Lưu ý quan trọng

1. **Ngày tháng:** Viết đúng format `YYYY-MM-DD` (ví dụ: `2026-01-26`)
2. **Tên file:** Không dùng dấu tiếng Việt, chỉ dùng a-z, 0-9, và `-`
3. **Hình ảnh:** Nên có hình đại diện cho mỗi bài viết
4. **Độ dài:** Tối thiểu 300 từ để tốt cho SEO
