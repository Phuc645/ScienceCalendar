# Cơ sở dữ liệu (Firebase Firestore - NoSQL)

## Collection `facts`

Lưu trữ thông tin về các "fact" khoa học. Mỗi document là một fact.

- **Document ID**: `factID` (ID duy nhất cho mỗi fact).
- **Fields**:
  - `title`: (string) Tiêu đề của fact.
  - `content`: (string) Nội dung chi tiết của fact.
  - `categoryID`: (string) ID của danh mục (tham chiếu đến collection `categories`).

