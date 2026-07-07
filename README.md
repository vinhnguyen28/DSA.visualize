# DSA.visualize

Website trực quan hóa **Cấu trúc dữ liệu & Giải thuật (Data Structures & Algorithms)** — giúp người học "nhìn thấy" cách một đoạn code C++ chạy trong bộ nhớ (Stack/Heap), theo từng bước, thay vì chỉ đọc lý thuyết suông.

Lấy cảm hứng theo hướng của VisuAlgo, nhưng tập trung vào việc gắn liền **code thật** với **hình ảnh bộ nhớ** và **giải thích từng dòng**.

## Demo tính năng

Mỗi bài học hiển thị đồng thời 3 khung:

- **Code** — đoạn C++ của bài học, dòng đang thực thi được highlight.
- **Trực quan hóa bộ nhớ** — vẽ Stack/Heap, con trỏ, node, mũi tên nối giữa chúng, cập nhật theo từng bước.
- **Giải thích** — mô tả bằng tiếng Việt ý nghĩa của bước đang chạy.

Điều hướng bằng nút Next / Prev / Play-Pause / Reset hoặc phím mũi tên.

## Trạng thái các module

| Module                               | Trạng thái      |
| ------------------------------------ | --------------- |
| Linked List (danh sách liên kết đơn) | Hoàn thiện      |
| Pointer (con trỏ)                    | Hoàn thiện      |
| Doubly Linked List                   | Đang phát triển |
| Tree                                 | Đang phát triển |
| Sorting                              | Đang phát triển |
| Graph                                | Đang phát triển |

## Công nghệ sử dụng

- HTML / CSS / JavaScript thuần — không framework, không build tool.
- [highlight.js](https://highlightjs.org/) để tô màu cú pháp code.
- Font Awesome cho icon.

## Cấu trúc thư mục

```
DSA.visualize/
├── index.html            # Trang chủ
├── pages/                # Trang riêng cho từng bài học (linkedlist.html, pointer.html, ...)
├── css/
│   └── modules/          # CSS riêng theo từng bài học
├── js/
│   ├── core/             # Lõi dùng chung
│   │   ├── controller.js     # Điều khiển Next/Prev/Play/Reset
│   │   ├── BaseRenderer.js   # Class render dùng chung cho mọi module
│   │   └── arrows.js         # Vẽ mũi tên nối node/con trỏ
│   └── modules/           # Mỗi cấu trúc dữ liệu một thư mục riêng
│       └── <ten-module>/
│           ├── <ten>-data.js      # Dữ liệu các bước mô phỏng
│           └── <ten>-render.js    # Cách vẽ ra giao diện
└── assets/                # Ảnh, icon
```

## Chạy thử

Vì là static site thuần, chỉ cần mở trực tiếp `index.html` bằng trình duyệt, hoặc chạy một local server đơn giản:

```bash
# Ví dụ dùng Python
python3 -m http.server 8000
```

Sau đó truy cập `http://localhost:8000`.

## Roadmap

- [ ] Hoàn thiện các module còn dang dở: Doubly Linked List, Tree, Sorting, Graph.
- [ ] Tích hợp ANTLR4 để tự động sinh dữ liệu mô phỏng (`*-data.js`) từ code C++ nguồn, thay vì viết tay từng bước.
- [ ] Hoàn thiện hệ thống đăng nhập/đăng ký (hiện chỉ có giao diện, chưa có backend).

## Đóng góp

Mọi ý kiến đóng góp, báo lỗi hoặc pull request đều được hoan nghênh.

## License
