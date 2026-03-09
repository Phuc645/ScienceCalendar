# Cơ sở dữ liệu (Firebase Firestore - NoSQL)

Dữ liệu sẽ được lưu trữ trên Firebase Firestore, một cơ sở dữ liệu NoSQL. Cấu trúc sẽ được tổ chức thành các "collections" (bộ sưu tập) và "documents" (tài liệu).

## Collection `users`

Lưu trữ thông tin về người dùng. Mỗi document trong collection này đại diện cho một người dùng.

- **Document ID**: `uid` (ID người dùng từ Firebase Authentication).
- **Fields**:
  - `username`: (string) Tên người dùng.
  - `email`: (string) Email đăng ký.
  - `avatarURL`: (string) URL ảnh đại diện.
  - `savedFacts`: (array) Mảng chứa các `factID` mà người dùng đã lưu.

## Collection `facts`

Lưu trữ thông tin về các "fact" khoa học. Mỗi document là một fact.

- **Document ID**: `factID` (ID duy nhất cho mỗi fact).
- **Fields**:
  - `title`: (string) Tiêu đề của fact.
  - `content`: (string) Nội dung chi tiết của fact.
  - `categoryID`: (string) ID của danh mục (tham chiếu đến collection `categories`).

## Collection `categories`

Lưu trữ các danh mục của fact.

- **Document ID**: `categoryID` (ví dụ: `vat-ly`, `hoa-hoc`).
- **Fields**:
  - `name`: (string) Tên đầy đủ của danh mục (ví dụ: "Vật Lý").
