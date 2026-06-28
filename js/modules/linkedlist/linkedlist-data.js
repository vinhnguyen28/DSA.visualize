// File: js/linkedlist/singly-linked-list-data.js

// =======================================
// SINGLY LINKED LIST DATA LOGIC
// =======================================

// Chứa toàn bộ dữ liệu mô phỏng, code, text giải thích cho Danh sách liên kết đơn.
const listLessons = {
  createNode: {
    codeLines: [
      "struct Node",
      "{",
      " int data;",
      " Node* next;",
      "",
      " Node(int val)",
      " {",
      "  data = val;",
      "  next = nullptr;",
      " }",
      "};",
      "",
      "int main()",
      "{",
      " Node* newNode = nullptr;",
      "",
      " newNode = new Node(5);",
      "",
      " return 0;",
      "}",
    ],

    steps: [
      {
        activeCodeLine: 12,
        explanation:
          "Chương trình bắt đầu thực thi. Hàm main() được đưa vào Call Stack. Tại thời điểm này vùng nhớ Stack và Heap đều chưa có dữ liệu nào liên quan đến chương trình.",
        memoryState: {
          pointers: [],
          nodes: [],
        },
      },

      {
        activeCodeLine: 14,
        explanation:
          "Khai báo biến con trỏ newNode trên vùng nhớ Stack. Vì được gán bằng nullptr nên hiện tại con trỏ chưa trỏ tới bất kỳ vùng nhớ nào trên Heap.",
        memoryState: {
          pointers: [
            {
              name: "newNode",
              value: "NULL",
              address: "0x200",
              pointsTo: "",
              isUpdated: true,
              row: 1,
              col: 1,
            },
          ],
          nodes: [],
        },
      },

      {
        activeCodeLine: 16,
        explanation:
          "Chương trình bắt đầu thực hiện biểu thức 'new Node(5)'. Toán tử new yêu cầu hệ điều hành cấp phát một vùng nhớ trên Heap đủ lớn để chứa một đối tượng Node.",
        memoryState: {
          pointers: [
            {
              name: "newNode",
              value: "NULL",
              address: "0x200",
              pointsTo: "",
              isUpdated: false,
              row: 1,
              col: 1,
            },
          ],
          nodes: [],
        },
      },

      {
        activeCodeLine: 16,
        explanation:
          "Hệ điều hành cấp phát thành công một vùng nhớ trên Heap. Đối tượng Node đã tồn tại nhưng chưa được khởi tạo nên các thành viên vẫn chứa giá trị rác.",
        memoryState: {
          pointers: [
            {
              name: "newNode",
              value: "NULL",
              address: "0x200",
              pointsTo: "",
              row: 1,
              col: 1,
            },
          ],
          nodes: [
            {
              id: "node1",
              data: "???",
              nextValue: "???",
              address: "0x500",
              pointsTo: "",
              isUpdated: true,
              row: 1,
              col: 1,
            },
          ],
        },
      },

      {
        activeCodeLine: 5,
        explanation:
          "Sau khi cấp phát bộ nhớ, chương trình tự động gọi Constructor của Node để khởi tạo đối tượng vừa được tạo. Tham số val nhận giá trị là 5.",
        memoryState: {
          pointers: [
            {
              name: "newNode",
              value: "NULL",
              address: "0x200",
              pointsTo: "",
              row: 1,
              col: 1,
            },
          ],
          nodes: [
            {
              id: "node1",
              data: "???",
              nextValue: "???",
              address: "0x500",
              pointsTo: "",
              isUpdated: false,
              row: 1,
              col: 1,
            },
          ],
        },
      },

      //======================================================
      // STEP 6 - Constructor: data = val;
      // Highlight: " data = val;"
      //======================================================
      {
        activeCodeLine: 7,
        explanation:
          "Constructor bắt đầu khởi tạo đối tượng. Giá trị của tham số val (5) được sao chép vào thành viên data của Node trên Heap.",
        memoryState: {
          pointers: [
            {
              name: "newNode",
              value: "NULL",
              address: "0x200",
              pointsTo: "",
              isUpdated: false,
              row: 1,
              col: 1,
            },
          ],
          nodes: [
            {
              id: "node1",
              data: "5",
              nextValue: "???",
              address: "0x500",
              pointsTo: "",
              isUpdated: true,
              row: 1,
              col: 1,
            },
          ],
        },
      },

      //======================================================
      // STEP 7 - Constructor: next = nullptr;
      // Highlight: " next = nullptr;"
      //======================================================
      {
        activeCodeLine: 8,
        explanation:
          "Thành viên next được khởi tạo bằng nullptr. Điều này đảm bảo Node mới chưa liên kết với bất kỳ Node nào và không chứa địa chỉ rác.",
        memoryState: {
          pointers: [
            {
              name: "newNode",
              value: "NULL",
              address: "0x200",
              pointsTo: "",
              isUpdated: false,
              row: 1,
              col: 1,
            },
          ],
          nodes: [
            {
              id: "node1",
              data: "5",
              nextValue: "NULL",
              address: "0x500",
              pointsTo: "",
              isUpdated: true,
              row: 1,
              col: 1,
            },
          ],
        },
      },

      //======================================================
      // STEP 8 - Constructor kết thúc
      // Quay trở lại biểu thức:
      // newNode = new Node(5);
      //======================================================
      {
        activeCodeLine: 16,
        explanation:
          "Constructor đã hoàn thành việc khởi tạo đối tượng. Toán tử new chuẩn bị trả về địa chỉ của Node vừa tạo cho biểu thức new Node(5).",
        memoryState: {
          pointers: [
            {
              name: "newNode",
              value: "NULL",
              address: "0x200",
              pointsTo: "",
              isUpdated: false,
              row: 1,
              col: 1,
            },
          ],
          nodes: [
            {
              id: "node1",
              data: "5",
              nextValue: "NULL",
              address: "0x500",
              pointsTo: "",
              isUpdated: false,
              row: 1,
              col: 1,
            },
          ],
        },
      },

      //======================================================
      // STEP 9 - Toán tử new trả về địa chỉ
      // Highlight: newNode = new Node(5);
      //======================================================
      {
        activeCodeLine: 16,
        explanation:
          "Toán tử new trả về địa chỉ của vùng nhớ vừa cấp phát (0x500). Giá trị này đang chuẩn bị được gán cho biến con trỏ newNode trên Stack.",
        memoryState: {
          pointers: [
            {
              name: "newNode",
              value: "0x500",
              address: "0x200",
              pointsTo: "",
              isUpdated: true,
              row: 1,
              col: 1,
            },
          ],
          nodes: [
            {
              id: "node1",
              data: "5",
              nextValue: "NULL",
              address: "0x500",
              pointsTo: "",
              isUpdated: false,
              row: 1,
              col: 1,
            },
          ],
        },
      },

      //======================================================
      // STEP 10 - Con trỏ newNode bắt đầu trỏ tới Node
      // Renderer vẽ mũi tên từ Stack -> Heap
      //======================================================
      {
        activeCodeLine: 16,
        explanation:
          "Sau khi nhận địa chỉ 0x500, con trỏ newNode chính thức trỏ tới Node trên Heap. Từ thời điểm này chương trình có thể truy cập đối tượng thông qua con trỏ newNode.",
        memoryState: {
          pointers: [
            {
              name: "newNode",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              isUpdated: true,
              row: 1,
              col: 1,
            },
          ],
          nodes: [
            {
              id: "node1",
              data: "5",
              nextValue: "NULL",
              address: "0x500",
              pointsTo: "",
              isUpdated: true,
              row: 1,
              col: 1,
            },
          ],
        },
      },

      //======================================================
      // STEP 11 - Kết quả của biểu thức new Node(5)
      // Highlight: "newNode = new Node(5);"
      //======================================================
      {
        activeCodeLine: 16,
        explanation:
          "Biểu thức 'new Node(5)' đã hoàn thành. Con trỏ newNode hiện đang lưu địa chỉ của Node trên Heap và có thể truy cập đối tượng thông qua địa chỉ này.",
        memoryState: {
          pointers: [
            {
              name: "newNode",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              isUpdated: false,
              row: 1,
              col: 1,
            },
          ],
          nodes: [
            {
              id: "node1",
              data: "5",
              nextValue: "NULL",
              address: "0x500",
              pointsTo: "",
              isUpdated: false,
              row: 1,
              col: 1,
            },
          ],
        },
      },

      //======================================================
      // STEP 12 - Highlight: "return 0;"
      // Chương trình chuẩn bị kết thúc
      //======================================================
      {
        activeCodeLine: 18,
        explanation:
          "Lệnh return 0 được thực hiện. Hàm main() chuẩn bị kết thúc và Stack Frame của hàm main sẽ được thu hồi.",
        memoryState: {
          pointers: [
            {
              name: "newNode",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              isUpdated: false,
              row: 1,
              col: 1,
            },
          ],
          nodes: [
            {
              id: "node1",
              data: "5",
              nextValue: "NULL",
              address: "0x500",
              pointsTo: "",
              isUpdated: false,
              row: 1,
              col: 1,
            },
          ],
        },
      },

      //======================================================
      // STEP 13 - Thu hồi vùng nhớ Stack
      // Biến newNode bị hủy
      //======================================================
      {
        activeCodeLine: 18,
        explanation:
          "Sau khi hàm main() kết thúc, toàn bộ biến cục bộ trên Stack được tự động thu hồi. Con trỏ newNode không còn tồn tại.",
        memoryState: {
          pointers: [],
          nodes: [
            {
              id: "node1",
              data: "5",
              nextValue: "NULL",
              address: "0x500",
              pointsTo: "",
              isUpdated: false,
              row: 1,
              col: 1,
            },
          ],
        },
      },

      //======================================================
      // STEP 14 - Memory Leak
      // Node trên Heap vẫn tồn tại
      //======================================================
      {
        activeCodeLine: 18,
        explanation:
          "Mặc dù con trỏ newNode đã bị hủy, Node trên Heap vẫn chưa được giải phóng vì chương trình không gọi delete. Không còn con trỏ nào giữ địa chỉ của Node này nên vùng nhớ trở thành Memory Leak.",
        memoryState: {
          pointers: [],
          nodes: [
            {
              id: "node1",
              data: "5",
              nextValue: "NULL",
              address: "0x500",
              pointsTo: "",
              isUpdated: true,
              row: 1,
              col: 1,
            },
          ],
        },
      },
    ],
  },

  //======================================================
  // LESSON 1.2 - LINK NODES
  // Mục tiêu:
  // 1. Tạo Node đầu tiên.
  // 2. Tạo Node thứ hai.
  // 3. Liên kết Node1 -> Node2.
  //======================================================
  linkNodes: {
    codeLines: [
      "struct Node",
      "{",
      " int data;",
      " Node* next;",
      "",
      " Node(int val)",
      " {",
      "  data = val;",
      "  next = nullptr;",
      " }",
      "};",
      "",
      "int main()",
      "{",
      " Node* head = new Node(5);",
      "",
      " head->next = new Node(10);",
      "",
      " return 0;",
      "}",
    ],

    steps: [
      //======================================================
      // STEP 1
      // EVENT : Program Start
      // CODE  : int main()
      //======================================================
      {
        activeCodeLine: 12,
        explanation:
          "Chương trình bắt đầu thực thi. Hàm main() được đưa vào Call Stack. Stack và Heap hiện đang trống.",
        memoryState: {
          pointers: [],
          nodes: [],
        },
      },

      //======================================================
      // STEP 2
      // EVENT : Create First Node
      // CODE  : Node* head = new Node(5);
      //======================================================
      {
        activeCodeLine: 14,
        explanation:
          "Thực hiện biểu thức new Node(5). Hệ điều hành cấp phát vùng nhớ trên Heap và khởi tạo Node đầu tiên.",
        memoryState: {
          pointers: [],
          nodes: [
            {
              id: "node1",
              data: "5",
              nextValue: "NULL",
              address: "0x500",
              pointsTo: "",
              isUpdated: true,
              row: 1,
              col: 1,
            },
          ],
        },
      },

      //======================================================
      // STEP 3
      // EVENT : Pointer Receives Address
      // CODE  : Node* head = new Node(5);
      //======================================================
      {
        activeCodeLine: 14,
        explanation:
          "Toán tử new trả về địa chỉ của Node vừa tạo. Con trỏ head trên Stack nhận địa chỉ 0x500.",
        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "",
              isUpdated: true,
              row: 1,
              col: 1,
            },
          ],
          nodes: [
            {
              id: "node1",
              data: "5",
              nextValue: "NULL",
              address: "0x500",
              pointsTo: "",
              isUpdated: false,
              row: 1,
              col: 1,
            },
          ],
        },
      },

      //======================================================
      // STEP 4
      // EVENT : Pointer Starts Pointing
      // CODE  : Node* head = new Node(5);
      //======================================================
      {
        activeCodeLine: 14,
        explanation:
          "Con trỏ head hiện đang lưu địa chỉ của Node đầu tiên và có thể truy cập đối tượng thông qua địa chỉ này.",
        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              isUpdated: true,
              row: 1,
              col: 1,
            },
          ],
          nodes: [
            {
              id: "node1",
              data: "5",
              nextValue: "NULL",
              address: "0x500",
              pointsTo: "",
              isUpdated: true,
              row: 1,
              col: 1,
            },
          ],
        },
      },

      //======================================================
      // STEP 5
      // EVENT : Start Creating Second Node
      // CODE  : head->next = new Node(10);
      //======================================================
      {
        activeCodeLine: 16,
        explanation:
          "Chương trình bắt đầu thực hiện biểu thức head->next = new Node(10). Toán tử new tiếp tục yêu cầu cấp phát một Node mới trên Heap.",
        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              isUpdated: false,
              row: 1,
              col: 1,
            },
          ],
          nodes: [
            {
              id: "node1",
              data: "5",
              nextValue: "NULL",
              address: "0x500",
              pointsTo: "",
              row: 1,
              col: 1,
            },
          ],
        },
      },

      //======================================================
      // STEP 6
      // EVENT : Second Node Allocated
      // CODE  : head->next = new Node(10);
      //======================================================
      {
        activeCodeLine: 16,
        explanation:
          "Hệ điều hành cấp phát thành công vùng nhớ trên Heap cho Node thứ hai. Sau khi Constructor hoàn thành, Node mới đã được khởi tạo với data = 10 và next = nullptr.",
        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              isUpdated: false,
              row: 1,
              col: 1,
            },
          ],
          nodes: [
            {
              id: "node1",
              data: "5",
              nextValue: "NULL",
              address: "0x500",
              pointsTo: "",
              isUpdated: false,
              row: 1,
              col: 1,
            },
            {
              id: "node2",
              data: "10",
              nextValue: "NULL",
              address: "0x520",
              pointsTo: "",
              isUpdated: true,
              row: 1,
              col: 3,
            },
          ],
        },
      },

      //======================================================
      // STEP 7
      // EVENT : new Returns Address
      // CODE  : head->next = new Node(10);
      //======================================================
      {
        activeCodeLine: 16,
        explanation:
          "Sau khi Node thứ hai được tạo xong, toán tử new trả về địa chỉ của Node này (0x520). Giá trị này chuẩn bị được ghi vào thành viên next của Node đầu tiên.",
        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              isUpdated: false,
              row: 1,
              col: 1,
            },
          ],
          nodes: [
            {
              id: "node1",
              data: "5",
              nextValue: "NULL",
              address: "0x500",
              pointsTo: "",
              isUpdated: false,
              row: 1,
              col: 1,
            },
            {
              id: "node2",
              data: "10",
              nextValue: "NULL",
              address: "0x520",
              pointsTo: "",
              isUpdated: false,
              row: 1,
              col: 3,
            },
          ],
        },
      },

      //======================================================
      // STEP 8
      // EVENT : next Receives Address
      // CODE  : head->next = new Node(10);
      //======================================================
      {
        activeCodeLine: 16,
        explanation:
          "Địa chỉ 0x520 được ghi vào thành viên next của Node đầu tiên. Lúc này next không còn là nullptr mà đang lưu địa chỉ của Node thứ hai.",
        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              isUpdated: false,
              row: 1,
              col: 1,
            },
          ],
          nodes: [
            {
              id: "node1",
              data: "5",
              nextValue: "0x520",
              address: "0x500",
              pointsTo: "",
              isUpdated: true,
              row: 1,
              col: 1,
            },
            {
              id: "node2",
              data: "10",
              nextValue: "NULL",
              address: "0x520",
              pointsTo: "",
              isUpdated: false,
              row: 1,
              col: 3,
            },
          ],
        },
      },

      //======================================================
      // STEP 9
      // EVENT : Link Established
      // CODE  : head->next = new Node(10);
      //======================================================
      {
        activeCodeLine: 16,
        explanation:
          "Renderer phát hiện thành viên next đang chứa địa chỉ của Node thứ hai nên vẽ mũi tên liên kết giữa hai Node. Đây chính là liên kết đầu tiên của Singly Linked List.",
        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              isUpdated: false,
              row: 1,
              col: 1,
            },
          ],
          nodes: [
            {
              id: "node1",
              data: "5",
              nextValue: "0x520",
              address: "0x500",
              pointsTo: "node2",
              isUpdated: true,
              row: 1,
              col: 1,
            },
            {
              id: "node2",
              data: "10",
              nextValue: "NULL",
              address: "0x520",
              pointsTo: "",
              isUpdated: true,
              row: 1,
              col: 3,
            },
          ],
        },
      },

      //======================================================
      // STEP 10
      // EVENT : Linked List Created
      // CODE  : head->next = new Node(10);
      //======================================================
      {
        activeCodeLine: 16,
        explanation:
          "Danh sách liên kết đơn đã được tạo thành công. Con trỏ head lưu địa chỉ của Node đầu tiên, còn Node đầu tiên lưu địa chỉ của Node thứ hai thông qua thành viên next.",
        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              isUpdated: true,
              row: 1,
              col: 1,
            },
          ],
          nodes: [
            {
              id: "node1",
              data: "5",
              nextValue: "0x520",
              address: "0x500",
              pointsTo: "node2",
              isUpdated: false,
              row: 1,
              col: 1,
            },
            {
              id: "node2",
              data: "10",
              nextValue: "NULL",
              address: "0x520",
              pointsTo: "",
              isUpdated: false,
              row: 1,
              col: 3,
            },
          ],
        },
      },

      //======================================================
      // STEP 11
      // EVENT : Return Statement
      // CODE  : return 0;
      //======================================================
      {
        activeCodeLine: 18,
        explanation:
          "Chương trình thực hiện lệnh return 0. Hàm main() chuẩn bị kết thúc và Stack Frame sẽ được thu hồi.",
        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              isUpdated: false,
              row: 1,
              col: 1,
            },
          ],
          nodes: [
            {
              id: "node1",
              data: "5",
              nextValue: "0x520",
              address: "0x500",
              pointsTo: "node2",
              isUpdated: false,
              row: 1,
              col: 1,
            },
            {
              id: "node2",
              data: "10",
              nextValue: "NULL",
              address: "0x520",
              pointsTo: "",
              isUpdated: false,
              row: 1,
              col: 3,
            },
          ],
        },
      },

      //======================================================
      // STEP 12
      // EVENT : Stack Released
      // CODE  : End of main()
      //======================================================
      {
        activeCodeLine: 18,
        explanation:
          "Khi hàm main() kết thúc, biến head trên Stack được tự động thu hồi. Tuy nhiên hai Node trên Heap vẫn còn tồn tại.",
        memoryState: {
          pointers: [],
          nodes: [
            {
              id: "node1",
              data: "5",
              nextValue: "0x520",
              address: "0x500",
              pointsTo: "node2",
              isUpdated: false,
              row: 1,
              col: 1,
            },
            {
              id: "node2",
              data: "10",
              nextValue: "NULL",
              address: "0x520",
              pointsTo: "",
              isUpdated: false,
              row: 1,
              col: 3,
            },
          ],
        },
      },

      //======================================================
      // STEP 13
      // EVENT : Lesson Summary
      // CODE  : Program Finished
      //======================================================
      {
        activeCodeLine: 18,
        explanation:
          "Qua bài học này, chúng ta đã biết cách liên kết hai Node bằng con trỏ next. Đây chính là nền tảng để xây dựng một Singly Linked List. Việc giải phóng bộ nhớ bằng delete sẽ được tìm hiểu ở bài học sau.",
        memoryState: {
          pointers: [],
          nodes: [
            {
              id: "node1",
              data: "5",
              nextValue: "0x520",
              address: "0x500",
              pointsTo: "node2",
              isUpdated: true,
              row: 1,
              col: 1,
            },
            {
              id: "node2",
              data: "10",
              nextValue: "NULL",
              address: "0x520",
              pointsTo: "",
              isUpdated: true,
              row: 1,
              col: 3,
            },
          ],
        },
      },
    ],
  },

  //======================================================
  // LESSON 1.3 - CREATE LIST
  //
  // Mục tiêu:
  // 1. Giữ nguyên head trong suốt quá trình.
  // 2. Dùng vòng lặp để tạo nhiều Node.
  // 3. Quan sát danh sách lớn dần sau mỗi lần lặp.
  //======================================================
  createList: {
    codeLines: [
      "struct Node",
      "{",
      " int data;",
      " Node* next;",
      "",
      " Node(int val)",
      " {",
      "  data = val;",
      "  next = nullptr;",
      " }",
      "};",
      "",
      "int main()",
      "{",
      " Node* head = new Node(1);",
      " Node* current = head;",
      "",
      " for(int i = 2; i <= 5; i++)",
      " {",
      "  current->next = new Node(i);",
      "  current = current->next;",
      " }",
      "",
      " return 0;",
      "}",
    ],

    steps: [
      //======================================================
      // STEP 1
      // EVENT : Program Start
      // CODE  : int main()
      //======================================================
      {
        activeCodeLine: 12,
        explanation:
          "Chương trình bắt đầu thực thi. Hàm main() được đưa vào Call Stack. Stack và Heap hiện chưa có dữ liệu.",
        memoryState: {
          pointers: [],
          nodes: [],
        },
      },

      //======================================================
      // STEP 2
      // EVENT : Create Head Node
      // CODE  : Node* head = new Node(1);
      // NOTE  : Chỉ hiển thị head trên Stack.
      //======================================================
      {
        activeCodeLine: 14,
        explanation:
          "Node đầu tiên được tạo thành công. Con trỏ head lưu địa chỉ của Node đầu tiên và sẽ luôn giữ vai trò là điểm bắt đầu của danh sách.",
        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              isUpdated: true,
              row: 1,
              col: 1,
            },
          ],

          nodes: [
            {
              id: "node1",
              data: "1",
              nextValue: "NULL",
              address: "0x500",
              pointsTo: "",
              isUpdated: true,
              row: 1,
              col: 1,
            },
          ],
        },
      },

      //======================================================
      // STEP 3
      // EVENT : Start For Loop
      // CODE  : for(int i = 2; i <= 5; i++)
      // NOTE  : current tồn tại trong code nhưng không render.
      //======================================================
      {
        activeCodeLine: 17,
        explanation:
          "Vòng lặp bắt đầu với i = 2. Chương trình chuẩn bị tạo Node tiếp theo và nối vào cuối danh sách.",
        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              row: 1,
              col: 1,
            },
          ],

          nodes: [
            {
              id: "node1",
              data: "1",
              nextValue: "NULL",
              address: "0x500",
              pointsTo: "",
              row: 1,
              col: 1,
            },
          ],
        },
      },

      //======================================================
      // STEP 4
      // EVENT : Create & Link Node 2
      // CODE  : current->next = new Node(i);
      // NOTE  : Gộp tạo Node và liên kết trong cùng một bước.
      //======================================================
      {
        activeCodeLine: 19,
        explanation:
          "Node thứ hai được tạo với giá trị 2 và được nối ngay sau Node đầu tiên. Danh sách hiện có hai Node.",
        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              row: 1,
              col: 1,
            },
          ],

          nodes: [
            {
              id: "node1",
              data: "1",
              nextValue: "0x520",
              address: "0x500",
              pointsTo: "node2",
              isUpdated: true,
              row: 1,
              col: 1,
            },

            {
              id: "node2",
              data: "2",
              nextValue: "NULL",
              address: "0x520",
              pointsTo: "",
              isUpdated: true,
              row: 3,
              col: 1,
            },
          ],
        },
      },

      //======================================================
      // STEP 5
      // EVENT : Second Loop
      // CODE  : for(int i = 2; i <= 5; i++)
      // NOTE  : Chuẩn bị tạo Node thứ ba.
      //======================================================
      {
        activeCodeLine: 17,
        explanation:
          "Vòng lặp tiếp tục với i = 3. Danh sách hiện có hai Node và chương trình chuẩn bị nối thêm Node mới vào cuối.",
        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              row: 1,
              col: 1,
            },
          ],

          nodes: [
            {
              id: "node1",
              data: "1",
              nextValue: "0x520",
              address: "0x500",
              pointsTo: "node2",
              row: 1,
              col: 1,
            },

            {
              id: "node2",
              data: "2",
              nextValue: "NULL",
              address: "0x520",
              pointsTo: "",
              row: 3,
              col: 1,
            },
          ],
        },
      },

      //======================================================
      // STEP 6
      // EVENT : Create & Link Node 3
      // CODE  : current->next = new Node(i);
      // NOTE  : i = 3
      //======================================================
      {
        activeCodeLine: 19,
        explanation:
          "Node thứ ba được tạo với giá trị 3 và được nối vào sau Node thứ hai. Danh sách hiện có ba Node liên kết với nhau.",
        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              row: 1,
              col: 1,
            },
          ],

          nodes: [
            {
              id: "node1",
              data: "1",
              nextValue: "0x520",
              address: "0x500",
              pointsTo: "node2",
              row: 1,
              col: 1,
            },

            {
              id: "node2",
              data: "2",
              nextValue: "0x540",
              address: "0x520",
              pointsTo: "node3",
              isUpdated: true,
              row: 3,
              col: 1,
            },

            {
              id: "node3",
              data: "3",
              nextValue: "NULL",
              address: "0x540",
              pointsTo: "",
              isUpdated: true,
              row: 2,
              col: 2,
            },
          ],
        },
      },

      //======================================================
      // STEP 7
      // EVENT : Third Loop
      // CODE  : for(int i = 2; i <= 5; i++)
      // NOTE  : Chuẩn bị tạo Node thứ tư.
      //======================================================
      {
        activeCodeLine: 17,
        explanation:
          "Vòng lặp tiếp tục với i = 4. Chương trình chuẩn bị tạo thêm một Node mới và nối vào cuối danh sách.",
        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              row: 1,
              col: 1,
            },
          ],

          nodes: [
            {
              id: "node1",
              data: "1",
              nextValue: "0x520",
              address: "0x500",
              pointsTo: "node2",
              row: 1,
              col: 1,
            },

            {
              id: "node2",
              data: "2",
              nextValue: "0x540",
              address: "0x520",
              pointsTo: "node3",
              row: 3,
              col: 1,
            },

            {
              id: "node3",
              data: "3",
              nextValue: "NULL",
              address: "0x540",
              pointsTo: "",
              row: 2,
              col: 2,
            },
          ],
        },
      },

      //======================================================
      // STEP 8
      // EVENT : Create & Link Node 4
      // CODE  : current->next = new Node(i);
      // NOTE  : i = 4
      //======================================================
      {
        activeCodeLine: 19,
        explanation:
          "Node thứ tư được tạo với giá trị 4 và được nối vào sau Node thứ ba. Danh sách tiếp tục được mở rộng.",
        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              row: 1,
              col: 1,
            },
          ],

          nodes: [
            {
              id: "node1",
              data: "1",
              nextValue: "0x520",
              address: "0x500",
              pointsTo: "node2",
              row: 1,
              col: 1,
            },

            {
              id: "node2",
              data: "2",
              nextValue: "0x540",
              address: "0x520",
              pointsTo: "node3",
              row: 3,
              col: 1,
            },

            {
              id: "node3",
              data: "3",
              nextValue: "0x560",
              address: "0x540",
              pointsTo: "node4",
              isUpdated: true,
              row: 2,
              col: 2,
            },

            {
              id: "node4",
              data: "4",
              nextValue: "NULL",
              address: "0x560",
              pointsTo: "",
              isUpdated: true,
              row: 3,
              col: 3,
            },
          ],
        },
      },

      //======================================================
      // STEP 9
      // EVENT : Fourth Loop
      // CODE  : for(int i = 2; i <= 5; i++)
      // NOTE  : Chuẩn bị tạo Node cuối cùng.
      //======================================================
      {
        activeCodeLine: 17,
        explanation:
          "Vòng lặp bước vào lần lặp cuối cùng với i = 5. Sau bước này danh sách sẽ có đủ 5 Node.",
        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              row: 1,
              col: 1,
            },
          ],

          nodes: [
            {
              id: "node1",
              data: "1",
              nextValue: "0x520",
              address: "0x500",
              pointsTo: "node2",
              row: 1,
              col: 1,
            },

            {
              id: "node2",
              data: "2",
              nextValue: "0x540",
              address: "0x520",
              pointsTo: "node3",
              row: 3,
              col: 1,
            },

            {
              id: "node3",
              data: "3",
              nextValue: "0x560",
              address: "0x540",
              pointsTo: "node4",
              row: 2,
              col: 2,
            },

            {
              id: "node4",
              data: "4",
              nextValue: "NULL",
              address: "0x560",
              pointsTo: "",
              row: 3,
              col: 3,
            },
          ],
        },
      },
      //======================================================
      // STEP 10
      // EVENT : Create & Link Node 5
      // CODE  : current->next = new Node(i);
      // NOTE  : i = 5 (Lần lặp cuối cùng)
      //======================================================
      {
        activeCodeLine: 19,
        explanation:
          "Node cuối cùng được tạo với giá trị 5 và được nối vào sau Node thứ tư. Đây là Node cuối của danh sách nên thành viên next vẫn giữ giá trị NULL.",
        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              row: 1,
              col: 1,
            },
          ],

          nodes: [
            {
              id: "node1",
              data: "1",
              nextValue: "0x520",
              address: "0x500",
              pointsTo: "node2",
              row: 1,
              col: 1,
            },

            {
              id: "node2",
              data: "2",
              nextValue: "0x540",
              address: "0x520",
              pointsTo: "node3",
              row: 3,
              col: 1,
            },

            {
              id: "node3",
              data: "3",
              nextValue: "0x560",
              address: "0x540",
              pointsTo: "node4",
              row: 2,
              col: 2,
            },

            {
              id: "node4",
              data: "4",
              nextValue: "0x580",
              address: "0x560",
              pointsTo: "node5",
              isUpdated: true,
              row: 3,
              col: 3,
            },

            {
              id: "node5",
              data: "5",
              nextValue: "NULL",
              address: "0x580",
              pointsTo: "",
              isUpdated: true,
              row: 1,
              col: 3,
            },
          ],
        },
      },

      //======================================================
      // STEP 11
      // EVENT : For Loop Finished
      // CODE  : End of for(...)
      //======================================================
      {
        activeCodeLine: 21,
        explanation:
          "Điều kiện i <= 5 không còn đúng nên vòng lặp kết thúc. Danh sách liên kết đơn đã được tạo hoàn chỉnh gồm 5 Node.",
        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              isUpdated: true,
              row: 1,
              col: 1,
            },
          ],

          nodes: [
            {
              id: "node1",
              data: "1",
              nextValue: "0x520",
              address: "0x500",
              pointsTo: "node2",
              row: 1,
              col: 1,
            },

            {
              id: "node2",
              data: "2",
              nextValue: "0x540",
              address: "0x520",
              pointsTo: "node3",
              row: 3,
              col: 1,
            },

            {
              id: "node3",
              data: "3",
              nextValue: "0x560",
              address: "0x540",
              pointsTo: "node4",
              row: 2,
              col: 2,
            },

            {
              id: "node4",
              data: "4",
              nextValue: "0x580",
              address: "0x560",
              pointsTo: "node5",
              row: 3,
              col: 3,
            },

            {
              id: "node5",
              data: "5",
              nextValue: "NULL",
              address: "0x580",
              pointsTo: "",
              row: 1,
              col: 3,
            },
          ],
        },
      },

      //======================================================
      // STEP 12
      // EVENT : Return Statement
      // CODE  : return 0;
      //======================================================
      {
        activeCodeLine: 23,
        explanation:
          "Lệnh return 0 được thực hiện. Hàm main() chuẩn bị kết thúc sau khi danh sách đã được tạo thành công.",
        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              row: 1,
              col: 1,
            },
          ],

          nodes: [
            {
              id: "node1",
              data: "1",
              nextValue: "0x520",
              address: "0x500",
              pointsTo: "node2",
              row: 1,
              col: 1,
            },

            {
              id: "node2",
              data: "2",
              nextValue: "0x540",
              address: "0x520",
              pointsTo: "node3",
              row: 3,
              col: 1,
            },

            {
              id: "node3",
              data: "3",
              nextValue: "0x560",
              address: "0x540",
              pointsTo: "node4",
              row: 2,
              col: 2,
            },

            {
              id: "node4",
              data: "4",
              nextValue: "0x580",
              address: "0x560",
              pointsTo: "node5",
              row: 3,
              col: 3,
            },

            {
              id: "node5",
              data: "5",
              nextValue: "NULL",
              address: "0x580",
              pointsTo: "",
              row: 1,
              col: 3,
            },
          ],
        },
      },

      //======================================================
      // STEP 13
      // EVENT : Lesson Completed
      // CODE  : Program Finished
      //======================================================
      {
        activeCodeLine: 23,
        explanation:
          "Danh sách liên kết đơn đã được tạo hoàn chỉnh. Con trỏ head luôn giữ địa chỉ của Node đầu tiên, còn mỗi Node lưu địa chỉ của Node kế tiếp thông qua thành viên next. Riêng Node cuối cùng không còn Node nào phía sau nên next có giá trị NULL.",
        memoryState: {
          pointers: [],

          nodes: [
            {
              id: "node1",
              data: "1",
              nextValue: "0x520",
              address: "0x500",
              pointsTo: "node2",
              row: 1,
              col: 1,
            },

            {
              id: "node2",
              data: "2",
              nextValue: "0x540",
              address: "0x520",
              pointsTo: "node3",
              row: 3,
              col: 1,
            },

            {
              id: "node3",
              data: "3",
              nextValue: "0x560",
              address: "0x540",
              pointsTo: "node4",
              row: 2,
              col: 2,
            },

            {
              id: "node4",
              data: "4",
              nextValue: "0x580",
              address: "0x560",
              pointsTo: "node5",
              row: 3,
              col: 3,
            },

            {
              id: "node5",
              data: "5",
              nextValue: "NULL",
              address: "0x580",
              pointsTo: "",
              isUpdated: true,
              row: 1,
              col: 3,
            },
          ],
        },
      },
    ],
  },

  //======================================================
  // LESSON 2.1 - TRAVERSE
  //
  // Mục tiêu:
  // 1. Hiểu cách duyệt toàn bộ Linked List.
  // 2. Quan sát Node đang được xử lý.
  // 3. Hiểu điều kiện kết thúc current == nullptr.
  //======================================================
  traverse: {
    codeLines: [
      "Node* current = head;",
      "",
      "while(current != nullptr)",
      "{",
      " current = current->next;",
      "}",
    ],

    steps: [
      //======================================================
      // STEP 1
      // EVENT : Initial Linked List
      // CODE  : Node* current = head;
      //======================================================
      {
        activeCodeLine: 0,
        explanation:
          "Danh sách liên kết đã được tạo sẵn gồm 5 Node. Chương trình chuẩn bị bắt đầu duyệt từ Node đầu tiên.",

        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              isUpdated: true,
              row: 0,
              col: 0,
            },
          ],

          nodes: [
            {
              id: "node1",
              data: "1",
              nextValue: "0x520",
              address: "0x500",
              pointsTo: "node2",
              isFocused: false,
              row: 1,
              col: 1,
            },

            {
              id: "node2",
              data: "2",
              nextValue: "0x540",
              address: "0x520",
              pointsTo: "node3",
              isFocused: false,
              row: 1,
              col: 2,
            },

            {
              id: "node3",
              data: "3",
              nextValue: "0x560",
              address: "0x540",
              pointsTo: "node4",
              isFocused: false,
              row: 1,
              col: 3,
            },

            {
              id: "node4",
              data: "4",
              nextValue: "0x580",
              address: "0x560",
              pointsTo: "node5",
              isFocused: false,
              row: 3,
              col: 2,
            },

            {
              id: "node5",
              data: "5",
              nextValue: "NULL",
              address: "0x580",
              pointsTo: "",
              isFocused: false,
              row: 3,
              col: 3,
            },
          ],
        },
      },

      //======================================================
      // STEP 2
      // EVENT : current = head
      // CODE  : Node* current = head;
      //
      // NOTE:
      // current không được render.
      // Renderer chỉ highlight Node mà current đang trỏ tới.
      //======================================================
      {
        activeCodeLine: 0,
        explanation:
          "Con trỏ current được gán bằng head. Quá trình duyệt bắt đầu từ Node đầu tiên nên Node đầu tiên được đánh dấu là đang được xử lý.",

        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              row: 0,
              col: 0,
            },
          ],

          nodes: [
            {
              id: "node1",
              data: "1",
              nextValue: "0x520",
              address: "0x500",
              pointsTo: "node2",
              isFocused: true,
              row: 1,
              col: 1,
            },

            {
              id: "node2",
              data: "2",
              nextValue: "0x540",
              address: "0x520",
              pointsTo: "node3",
              isFocused: false,
              row: 1,
              col: 2,
            },

            {
              id: "node3",
              data: "3",
              nextValue: "0x560",
              address: "0x540",
              pointsTo: "node4",
              isFocused: false,
              row: 1,
              col: 3,
            },

            {
              id: "node4",
              data: "4",
              nextValue: "0x580",
              address: "0x560",
              pointsTo: "node5",
              isFocused: false,
              row: 3,
              col: 2,
            },

            {
              id: "node5",
              data: "5",
              nextValue: "NULL",
              address: "0x580",
              pointsTo: "",
              isFocused: false,
              row: 3,
              col: 3,
            },
          ],
        },
      },

      //======================================================
      // STEP 3
      // EVENT : First While Condition
      // CODE  : while(current != nullptr)
      //======================================================
      {
        activeCodeLine: 2,
        explanation:
          "Kiểm tra điều kiện current != nullptr. Vì current đang trỏ tới Node đầu tiên nên điều kiện đúng và vòng lặp tiếp tục.",

        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              row: 0,
              col: 0,
            },
          ],

          nodes: [
            {
              id: "node1",
              data: "1",
              nextValue: "0x520",
              address: "0x500",
              pointsTo: "node2",
              isFocused: true,
              row: 1,
              col: 1,
            },

            {
              id: "node2",
              data: "2",
              nextValue: "0x540",
              address: "0x520",
              pointsTo: "node3",
              isFocused: false,
              row: 1,
              col: 2,
            },

            {
              id: "node3",
              data: "3",
              nextValue: "0x560",
              address: "0x540",
              pointsTo: "node4",
              isFocused: false,
              row: 1,
              col: 3,
            },

            {
              id: "node4",
              data: "4",
              nextValue: "0x580",
              address: "0x560",
              pointsTo: "node5",
              isFocused: false,
              row: 3,
              col: 2,
            },

            {
              id: "node5",
              data: "5",
              nextValue: "NULL",
              address: "0x580",
              pointsTo: "",
              isFocused: false,
              row: 3,
              col: 3,
            },
          ],
        },
      },

      //======================================================
      // STEP 4
      // EVENT : Move To Next Node
      // CODE  : current = current->next;
      //======================================================
      {
        activeCodeLine: 4,
        explanation:
          "Current di chuyển sang Node kế tiếp. Node đầu tiên hoàn thành xử lý và Node thứ hai trở thành Node đang được duyệt.",

        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              row: 0,
              col: 0,
            },
          ],

          nodes: [
            {
              id: "node1",
              data: "1",
              nextValue: "0x520",
              address: "0x500",
              pointsTo: "node2",
              isFocused: false,
              row: 1,
              col: 1,
            },

            {
              id: "node2",
              data: "2",
              nextValue: "0x540",
              address: "0x520",
              pointsTo: "node3",
              isFocused: true,
              row: 1,
              col: 2,
            },

            {
              id: "node3",
              data: "3",
              nextValue: "0x560",
              address: "0x540",
              pointsTo: "node4",
              isFocused: false,
              row: 1,
              col: 3,
            },

            {
              id: "node4",
              data: "4",
              nextValue: "0x580",
              address: "0x560",
              pointsTo: "node5",
              isFocused: false,
              row: 3,
              col: 2,
            },

            {
              id: "node5",
              data: "5",
              nextValue: "NULL",
              address: "0x580",
              pointsTo: "",
              isFocused: false,
              row: 3,
              col: 3,
            },
          ],
        },
      },

      //======================================================
      // STEP 5
      // EVENT : Second While Condition
      // CODE  : while(current != nullptr)
      //
      // NOTE:
      // current đang trỏ tới Node thứ hai.
      // Node2 tiếp tục được highlight.
      //======================================================
      {
        activeCodeLine: 2,
        explanation:
          "Current đang trỏ tới Node thứ hai nên điều kiện current != nullptr vẫn đúng. Chương trình tiếp tục duyệt danh sách.",

        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              row: 0,
              col: 0,
            },
          ],

          nodes: [
            {
              id: "node1",
              data: "1",
              nextValue: "0x520",
              address: "0x500",
              pointsTo: "node2",
              isFocused: false,
              row: 1,
              col: 1,
            },

            {
              id: "node2",
              data: "2",
              nextValue: "0x540",
              address: "0x520",
              pointsTo: "node3",
              isFocused: true,
              row: 1,
              col: 2,
            },

            {
              id: "node3",
              data: "3",
              nextValue: "0x560",
              address: "0x540",
              pointsTo: "node4",
              isFocused: false,
              row: 1,
              col: 3,
            },

            {
              id: "node4",
              data: "4",
              nextValue: "0x580",
              address: "0x560",
              pointsTo: "node5",
              isFocused: false,
              row: 3,
              col: 2,
            },

            {
              id: "node5",
              data: "5",
              nextValue: "NULL",
              address: "0x580",
              pointsTo: "",
              isFocused: false,
              row: 3,
              col: 3,
            },
          ],
        },
      },

      //======================================================
      // STEP 6
      // EVENT : Move To Third Node
      // CODE  : current = current->next;
      //
      // NOTE:
      // Focus chuyển từ Node2 sang Node3.
      //======================================================
      {
        activeCodeLine: 4,
        explanation:
          "Current di chuyển sang Node kế tiếp. Node thứ ba trở thành Node đang được duyệt.",

        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              row: 0,
              col: 0,
            },
          ],

          nodes: [
            {
              id: "node1",
              data: "1",
              nextValue: "0x520",
              address: "0x500",
              pointsTo: "node2",
              isFocused: false,
              row: 1,
              col: 1,
            },

            {
              id: "node2",
              data: "2",
              nextValue: "0x540",
              address: "0x520",
              pointsTo: "node3",
              isFocused: false,
              row: 1,
              col: 2,
            },

            {
              id: "node3",
              data: "3",
              nextValue: "0x560",
              address: "0x540",
              pointsTo: "node4",
              isFocused: true,
              row: 1,
              col: 3,
            },

            {
              id: "node4",
              data: "4",
              nextValue: "0x580",
              address: "0x560",
              pointsTo: "node5",
              isFocused: false,
              row: 3,
              col: 2,
            },

            {
              id: "node5",
              data: "5",
              nextValue: "NULL",
              address: "0x580",
              pointsTo: "",
              isFocused: false,
              row: 3,
              col: 3,
            },
          ],
        },
      },

      //======================================================
      // STEP 7
      // EVENT : Third While Condition
      // CODE  : while(current != nullptr)
      //
      // NOTE:
      // current đang trỏ tới Node thứ ba.
      //======================================================
      {
        activeCodeLine: 2,
        explanation:
          "Current đang trỏ tới Node thứ ba nên điều kiện current != nullptr vẫn đúng. Quá trình duyệt tiếp tục.",

        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              row: 0,
              col: 0,
            },
          ],

          nodes: [
            {
              id: "node1",
              data: "1",
              nextValue: "0x520",
              address: "0x500",
              pointsTo: "node2",
              isFocused: false,
              row: 1,
              col: 1,
            },

            {
              id: "node2",
              data: "2",
              nextValue: "0x540",
              address: "0x520",
              pointsTo: "node3",
              isFocused: false,
              row: 1,
              col: 2,
            },

            {
              id: "node3",
              data: "3",
              nextValue: "0x560",
              address: "0x540",
              pointsTo: "node4",
              isFocused: true,
              row: 1,
              col: 3,
            },

            {
              id: "node4",
              data: "4",
              nextValue: "0x580",
              address: "0x560",
              pointsTo: "node5",
              isFocused: false,
              row: 3,
              col: 2,
            },

            {
              id: "node5",
              data: "5",
              nextValue: "NULL",
              address: "0x580",
              pointsTo: "",
              isFocused: false,
              row: 3,
              col: 3,
            },
          ],
        },
      },

      //======================================================
      // STEP 8
      // EVENT : Move To Fourth Node
      // CODE  : current = current->next;
      //
      // NOTE:
      // Focus chuyển từ Node3 sang Node4.
      //======================================================
      {
        activeCodeLine: 4,
        explanation:
          "Current tiếp tục di chuyển sang Node thứ tư để tiếp tục duyệt danh sách.",

        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              row: 0,
              col: 0,
            },
          ],

          nodes: [
            {
              id: "node1",
              data: "1",
              nextValue: "0x520",
              address: "0x500",
              pointsTo: "node2",
              isFocused: false,
              row: 1,
              col: 1,
            },

            {
              id: "node2",
              data: "2",
              nextValue: "0x540",
              address: "0x520",
              pointsTo: "node3",
              isFocused: false,
              row: 1,
              col: 2,
            },

            {
              id: "node3",
              data: "3",
              nextValue: "0x560",
              address: "0x540",
              pointsTo: "node4",
              isFocused: false,
              row: 1,
              col: 3,
            },

            {
              id: "node4",
              data: "4",
              nextValue: "0x580",
              address: "0x560",
              pointsTo: "node5",
              isFocused: true,
              row: 3,
              col: 2,
            },

            {
              id: "node5",
              data: "5",
              nextValue: "NULL",
              address: "0x580",
              pointsTo: "",
              isFocused: false,
              row: 3,
              col: 3,
            },
          ],
        },
      },

      //======================================================
      // STEP 9
      // EVENT : Fourth While Condition
      // CODE  : while(current != nullptr)
      //
      // NOTE:
      // Node thứ tư đang được xử lý.
      //======================================================
      {
        activeCodeLine: 2,
        explanation:
          "Current đang trỏ tới Node thứ tư nên điều kiện current != nullptr vẫn đúng. Quá trình duyệt tiếp tục.",

        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              row: 0,
              col: 0,
            },
          ],

          nodes: [
            {
              id: "node1",
              data: "1",
              nextValue: "0x520",
              address: "0x500",
              pointsTo: "node2",
              isFocused: false,
              row: 1,
              col: 1,
            },

            {
              id: "node2",
              data: "2",
              nextValue: "0x540",
              address: "0x520",
              pointsTo: "node3",
              isFocused: false,
              row: 1,
              col: 2,
            },

            {
              id: "node3",
              data: "3",
              nextValue: "0x560",
              address: "0x540",
              pointsTo: "node4",
              isFocused: false,
              row: 1,
              col: 3,
            },

            {
              id: "node4",
              data: "4",
              nextValue: "0x580",
              address: "0x560",
              pointsTo: "node5",
              isFocused: true,
              row: 3,
              col: 2,
            },

            {
              id: "node5",
              data: "5",
              nextValue: "NULL",
              address: "0x580",
              pointsTo: "",
              isFocused: false,
              row: 3,
              col: 3,
            },
          ],
        },
      },

      //======================================================
      // STEP 10
      // EVENT : Move To Fifth Node
      // CODE  : current = current->next;
      //
      // NOTE:
      // Focus chuyển sang Node cuối cùng.
      //======================================================
      {
        activeCodeLine: 4,
        explanation:
          "Chuyển sang Node kế tiếp để tiếp tục duyệt danh sách. Node cuối cùng trở thành Node đang được xử lý.",

        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              row: 0,
              col: 0,
            },
          ],

          nodes: [
            {
              id: "node1",
              data: "1",
              nextValue: "0x520",
              address: "0x500",
              pointsTo: "node2",
              isFocused: false,
              row: 1,
              col: 1,
            },

            {
              id: "node2",
              data: "2",
              nextValue: "0x540",
              address: "0x520",
              pointsTo: "node3",
              isFocused: false,
              row: 1,
              col: 2,
            },

            {
              id: "node3",
              data: "3",
              nextValue: "0x560",
              address: "0x540",
              pointsTo: "node4",
              isFocused: false,
              row: 1,
              col: 3,
            },

            {
              id: "node4",
              data: "4",
              nextValue: "0x580",
              address: "0x560",
              pointsTo: "node5",
              isFocused: false,
              row: 3,
              col: 2,
            },

            {
              id: "node5",
              data: "5",
              nextValue: "NULL",
              address: "0x580",
              pointsTo: "",
              isFocused: true,
              row: 3,
              col: 3,
            },
          ],
        },
      },

      //======================================================
      // STEP 11
      // EVENT : Last While Condition
      // CODE  : while(current != nullptr)
      //
      // NOTE:
      // Node cuối cùng đang được xử lý.
      //======================================================
      {
        activeCodeLine: 2,
        explanation:
          "Current đang trỏ tới Node cuối cùng nên điều kiện current != nullptr vẫn đúng. Đây là lần lặp cuối của vòng while.",

        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              row: 0,
              col: 0,
            },
          ],

          nodes: [
            {
              id: "node1",
              data: "1",
              nextValue: "0x520",
              address: "0x500",
              pointsTo: "node2",
              isFocused: false,
              row: 1,
              col: 1,
            },

            {
              id: "node2",
              data: "2",
              nextValue: "0x540",
              address: "0x520",
              pointsTo: "node3",
              isFocused: false,
              row: 1,
              col: 2,
            },

            {
              id: "node3",
              data: "3",
              nextValue: "0x560",
              address: "0x540",
              pointsTo: "node4",
              isFocused: false,
              row: 1,
              col: 3,
            },

            {
              id: "node4",
              data: "4",
              nextValue: "0x580",
              address: "0x560",
              pointsTo: "node5",
              isFocused: false,
              row: 3,
              col: 2,
            },

            {
              id: "node5",
              data: "5",
              nextValue: "NULL",
              address: "0x580",
              pointsTo: "",
              isFocused: true,
              row: 3,
              col: 3,
            },
          ],
        },
      },

      //======================================================
      // STEP 12
      // EVENT : Traverse Finished
      // CODE  : current = current->next;
      //
      // NOTE:
      // Sau Node cuối, current trở thành nullptr.
      // Không còn Node nào được focus.
      //======================================================
      {
        activeCodeLine: 4,
        explanation:
          "Sau khi xử lý Node cuối cùng, current được gán bằng next của Node cuối. Vì next bằng NULL nên current trở thành nullptr và quá trình duyệt kết thúc.",

        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              row: 0,
              col: 0,
            },
          ],

          nodes: [
            {
              id: "node1",
              data: "1",
              nextValue: "0x520",
              address: "0x500",
              pointsTo: "node2",
              isFocused: false,
              row: 1,
              col: 1,
            },

            {
              id: "node2",
              data: "2",
              nextValue: "0x540",
              address: "0x520",
              pointsTo: "node3",
              isFocused: false,
              row: 1,
              col: 2,
            },

            {
              id: "node3",
              data: "3",
              nextValue: "0x560",
              address: "0x540",
              pointsTo: "node4",
              isFocused: false,
              row: 1,
              col: 3,
            },

            {
              id: "node4",
              data: "4",
              nextValue: "0x580",
              address: "0x560",
              pointsTo: "node5",
              isFocused: false,
              row: 3,
              col: 2,
            },

            {
              id: "node5",
              data: "5",
              nextValue: "NULL",
              address: "0x580",
              pointsTo: "",
              isFocused: false,
              row: 3,
              col: 3,
            },
          ],
        },
      },
    ],
  },

  //======================================================
  // LESSON 2.2 - SEARCH NODE
  //
  // Mục tiêu:
  // 1. Hiểu cách tìm kiếm một giá trị trong Linked List.
  // 2. So sánh dữ liệu của từng Node.
  // 3. Dừng khi tìm thấy hoặc duyệt hết danh sách.
  //======================================================
  search: {
    codeLines: [
      "Node* current = head;",
      "",
      "while(current != nullptr)",
      "{",
      " if(current->data == 4)",
      " {",
      "  break;",
      " }",
      "",
      " current = current->next;",
      "}",
    ],

    steps: [
      //======================================================
      // STEP 1
      // EVENT : Start Searching
      // CODE  : current = head;
      //======================================================
      {
        activeCodeLine: 0,
        explanation:
          "Danh sách liên kết đã được tạo sẵn. Chương trình bắt đầu tìm kiếm giá trị 4 từ Node đầu tiên.",

        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              isUpdated: true,
              row: 0,
              col: 0,
            },
          ],

          nodes: [
            {
              id: "node1",
              data: "1",
              nextValue: "0x520",
              address: "0x500",
              pointsTo: "node2",
              isFocused: true,
              row: 1,
              col: 1,
            },

            {
              id: "node2",
              data: "2",
              nextValue: "0x540",
              address: "0x520",
              pointsTo: "node3",
              isFocused: false,
              row: 1,
              col: 2,
            },

            {
              id: "node3",
              data: "3",
              nextValue: "0x560",
              address: "0x540",
              pointsTo: "node4",
              isFocused: false,
              row: 1,
              col: 3,
            },

            {
              id: "node4",
              data: "4",
              nextValue: "0x580",
              address: "0x560",
              pointsTo: "node5",
              isFocused: false,
              row: 3,
              col: 2,
            },

            {
              id: "node5",
              data: "5",
              nextValue: "NULL",
              address: "0x580",
              pointsTo: "",
              isFocused: false,
              row: 3,
              col: 3,
            },
          ],
        },
      },

      //======================================================
      // STEP 2
      // EVENT : First While Condition
      // CODE  : while(current != nullptr)
      //======================================================
      {
        activeCodeLine: 2,
        explanation:
          "Current đang trỏ tới Node đầu tiên nên điều kiện current != nullptr đúng. Bắt đầu kiểm tra dữ liệu của Node này.",

        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              row: 0,
              col: 0,
            },
          ],

          nodes: [
            {
              id: "node1",
              data: "1",
              nextValue: "0x520",
              address: "0x500",
              pointsTo: "node2",
              isFocused: true,
              row: 1,
              col: 1,
            },

            {
              id: "node2",
              data: "2",
              nextValue: "0x540",
              address: "0x520",
              pointsTo: "node3",
              isFocused: false,
              row: 1,
              col: 2,
            },

            {
              id: "node3",
              data: "3",
              nextValue: "0x560",
              address: "0x540",
              pointsTo: "node4",
              isFocused: false,
              row: 1,
              col: 3,
            },

            {
              id: "node4",
              data: "4",
              nextValue: "0x580",
              address: "0x560",
              pointsTo: "node5",
              isFocused: false,
              row: 3,
              col: 2,
            },

            {
              id: "node5",
              data: "5",
              nextValue: "NULL",
              address: "0x580",
              pointsTo: "",
              isFocused: false,
              row: 3,
              col: 3,
            },
          ],
        },
      },

      //======================================================
      // STEP 3
      // EVENT : Compare First Node
      // CODE  : if(current->data == 4)
      //======================================================
      {
        activeCodeLine: 4,
        explanation:
          "So sánh dữ liệu của Node hiện tại với giá trị cần tìm (4). Giá trị của Node là 1 nên chưa khớp, chương trình sẽ tiếp tục tìm kiếm.",

        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              row: 0,
              col: 0,
            },
          ],

          nodes: [
            {
              id: "node1",
              data: "1",
              nextValue: "0x520",
              address: "0x500",
              pointsTo: "node2",
              isFocused: true,
              row: 1,
              col: 1,
            },

            {
              id: "node2",
              data: "2",
              nextValue: "0x540",
              address: "0x520",
              pointsTo: "node3",
              isFocused: false,
              row: 1,
              col: 2,
            },

            {
              id: "node3",
              data: "3",
              nextValue: "0x560",
              address: "0x540",
              pointsTo: "node4",
              isFocused: false,
              row: 1,
              col: 3,
            },

            {
              id: "node4",
              data: "4",
              nextValue: "0x580",
              address: "0x560",
              pointsTo: "node5",
              isFocused: false,
              row: 3,
              col: 2,
            },

            {
              id: "node5",
              data: "5",
              nextValue: "NULL",
              address: "0x580",
              pointsTo: "",
              isFocused: false,
              row: 3,
              col: 3,
            },
          ],
        },
      },

      //======================================================
      // STEP 4
      // EVENT : Move To Next Node
      // CODE  : current = current->next;
      //======================================================
      {
        activeCodeLine: 9,
        explanation:
          "Giá trị chưa khớp nên chương trình chuyển sang Node kế tiếp để tiếp tục tìm kiếm.",

        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              row: 0,
              col: 0,
            },
          ],

          nodes: [
            {
              id: "node1",
              data: "1",
              nextValue: "0x520",
              address: "0x500",
              pointsTo: "node2",
              isFocused: false,
              row: 1,
              col: 1,
            },

            {
              id: "node2",
              data: "2",
              nextValue: "0x540",
              address: "0x520",
              pointsTo: "node3",
              isFocused: true,
              row: 1,
              col: 2,
            },

            {
              id: "node3",
              data: "3",
              nextValue: "0x560",
              address: "0x540",
              pointsTo: "node4",
              isFocused: false,
              row: 1,
              col: 3,
            },

            {
              id: "node4",
              data: "4",
              nextValue: "0x580",
              address: "0x560",
              pointsTo: "node5",
              isFocused: false,
              row: 3,
              col: 2,
            },

            {
              id: "node5",
              data: "5",
              nextValue: "NULL",
              address: "0x580",
              pointsTo: "",
              isFocused: false,
              row: 3,
              col: 3,
            },
          ],
        },
      },

      //======================================================
      // STEP 5
      // EVENT : Second While Condition
      // CODE  : while(current != nullptr)
      //
      // NOTE:
      // Current đang trỏ tới Node thứ hai.
      //======================================================
      {
        activeCodeLine: 2,
        explanation:
          "Current đang trỏ tới Node thứ hai nên điều kiện current != nullptr vẫn đúng. Chương trình tiếp tục kiểm tra dữ liệu của Node này.",

        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              row: 0,
              col: 0,
            },
          ],

          nodes: [
            {
              id: "node1",
              data: "1",
              nextValue: "0x520",
              address: "0x500",
              pointsTo: "node2",
              isFocused: false,
              row: 1,
              col: 1,
            },

            {
              id: "node2",
              data: "2",
              nextValue: "0x540",
              address: "0x520",
              pointsTo: "node3",
              isFocused: true,
              row: 1,
              col: 2,
            },

            {
              id: "node3",
              data: "3",
              nextValue: "0x560",
              address: "0x540",
              pointsTo: "node4",
              isFocused: false,
              row: 1,
              col: 3,
            },

            {
              id: "node4",
              data: "4",
              nextValue: "0x580",
              address: "0x560",
              pointsTo: "node5",
              isFocused: false,
              row: 3,
              col: 2,
            },

            {
              id: "node5",
              data: "5",
              nextValue: "NULL",
              address: "0x580",
              pointsTo: "",
              isFocused: false,
              row: 3,
              col: 3,
            },
          ],
        },
      },

      //======================================================
      // STEP 6
      // EVENT : Compare Second Node
      // CODE  : if(current->data == 4)
      //
      // NOTE:
      // 2 != 4
      //======================================================
      {
        activeCodeLine: 4,
        explanation:
          "So sánh dữ liệu của Node thứ hai với giá trị cần tìm (4). Giá trị hiện tại là 2 nên vẫn chưa tìm thấy.",

        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              row: 0,
              col: 0,
            },
          ],

          nodes: [
            {
              id: "node1",
              data: "1",
              nextValue: "0x520",
              address: "0x500",
              pointsTo: "node2",
              isFocused: false,
              row: 1,
              col: 1,
            },

            {
              id: "node2",
              data: "2",
              nextValue: "0x540",
              address: "0x520",
              pointsTo: "node3",
              isFocused: true,
              row: 1,
              col: 2,
            },

            {
              id: "node3",
              data: "3",
              nextValue: "0x560",
              address: "0x540",
              pointsTo: "node4",
              isFocused: false,
              row: 1,
              col: 3,
            },

            {
              id: "node4",
              data: "4",
              nextValue: "0x580",
              address: "0x560",
              pointsTo: "node5",
              isFocused: false,
              row: 3,
              col: 2,
            },

            {
              id: "node5",
              data: "5",
              nextValue: "NULL",
              address: "0x580",
              pointsTo: "",
              isFocused: false,
              row: 3,
              col: 3,
            },
          ],
        },
      },

      //======================================================
      // STEP 7
      // EVENT : Move To Third Node
      // CODE  : current = current->next;
      //
      // NOTE:
      // Focus chuyển từ Node2 sang Node3.
      //======================================================
      {
        activeCodeLine: 9,
        explanation:
          "Do chưa tìm thấy giá trị cần tìm nên chương trình chuyển sang Node kế tiếp để tiếp tục tìm kiếm.",

        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              row: 0,
              col: 0,
            },
          ],

          nodes: [
            {
              id: "node1",
              data: "1",
              nextValue: "0x520",
              address: "0x500",
              pointsTo: "node2",
              isFocused: false,
              row: 1,
              col: 1,
            },

            {
              id: "node2",
              data: "2",
              nextValue: "0x540",
              address: "0x520",
              pointsTo: "node3",
              isFocused: false,
              row: 1,
              col: 2,
            },

            {
              id: "node3",
              data: "3",
              nextValue: "0x560",
              address: "0x540",
              pointsTo: "node4",
              isFocused: true,
              row: 1,
              col: 3,
            },

            {
              id: "node4",
              data: "4",
              nextValue: "0x580",
              address: "0x560",
              pointsTo: "node5",
              isFocused: false,
              row: 3,
              col: 2,
            },

            {
              id: "node5",
              data: "5",
              nextValue: "NULL",
              address: "0x580",
              pointsTo: "",
              isFocused: false,
              row: 3,
              col: 3,
            },
          ],
        },
      },

      //======================================================
      // STEP 8
      // EVENT : Compare Third Node
      // CODE  : if(current->data == 4)
      //
      // NOTE:
      // 3 != 4
      //======================================================
      {
        activeCodeLine: 4,
        explanation:
          "Tiếp tục so sánh dữ liệu của Node thứ ba với giá trị cần tìm. Giá trị hiện tại là 3 nên vẫn chưa khớp.",

        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              row: 0,
              col: 0,
            },
          ],

          nodes: [
            {
              id: "node1",
              data: "1",
              nextValue: "0x520",
              address: "0x500",
              pointsTo: "node2",
              isFocused: false,
              row: 1,
              col: 1,
            },

            {
              id: "node2",
              data: "2",
              nextValue: "0x540",
              address: "0x520",
              pointsTo: "node3",
              isFocused: false,
              row: 1,
              col: 2,
            },

            {
              id: "node3",
              data: "3",
              nextValue: "0x560",
              address: "0x540",
              pointsTo: "node4",
              isFocused: true,
              row: 1,
              col: 3,
            },

            {
              id: "node4",
              data: "4",
              nextValue: "0x580",
              address: "0x560",
              pointsTo: "node5",
              isFocused: false,
              row: 3,
              col: 2,
            },

            {
              id: "node5",
              data: "5",
              nextValue: "NULL",
              address: "0x580",
              pointsTo: "",
              isFocused: false,
              row: 3,
              col: 3,
            },
          ],
        },
      },

      //======================================================
      // STEP 9
      // EVENT : Move To Fourth Node
      // CODE  : current = current->next;
      //
      // NOTE:
      // Focus chuyển từ Node3 sang Node4.
      //======================================================
      {
        activeCodeLine: 9,
        explanation:
          "Chưa tìm thấy giá trị cần tìm nên chương trình tiếp tục chuyển sang Node kế tiếp.",

        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              row: 0,
              col: 0,
            },
          ],

          nodes: [
            {
              id: "node1",
              data: "1",
              nextValue: "0x520",
              address: "0x500",
              pointsTo: "node2",
              isFocused: false,
              row: 1,
              col: 1,
            },

            {
              id: "node2",
              data: "2",
              nextValue: "0x540",
              address: "0x520",
              pointsTo: "node3",
              isFocused: false,
              row: 1,
              col: 2,
            },

            {
              id: "node3",
              data: "3",
              nextValue: "0x560",
              address: "0x540",
              pointsTo: "node4",
              isFocused: false,
              row: 1,
              col: 3,
            },

            {
              id: "node4",
              data: "4",
              nextValue: "0x580",
              address: "0x560",
              pointsTo: "node5",
              isFocused: true,
              row: 3,
              col: 2,
            },

            {
              id: "node5",
              data: "5",
              nextValue: "NULL",
              address: "0x580",
              pointsTo: "",
              isFocused: false,
              row: 3,
              col: 3,
            },
          ],
        },
      },

      //======================================================
      // STEP 10
      // EVENT : Compare Fourth Node
      // CODE  : if(current->data == 4)
      //
      // NOTE:
      // 4 == 4
      //======================================================
      {
        activeCodeLine: 4,
        explanation:
          "So sánh dữ liệu của Node hiện tại với giá trị cần tìm. Giá trị bằng 4 nên chương trình đã tìm thấy Node cần tìm.",

        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              row: 0,
              col: 0,
            },
          ],

          nodes: [
            {
              id: "node1",
              data: "1",
              nextValue: "0x520",
              address: "0x500",
              pointsTo: "node2",
              isFocused: false,
              row: 1,
              col: 1,
            },

            {
              id: "node2",
              data: "2",
              nextValue: "0x540",
              address: "0x520",
              pointsTo: "node3",
              isFocused: false,
              row: 1,
              col: 2,
            },

            {
              id: "node3",
              data: "3",
              nextValue: "0x560",
              address: "0x540",
              pointsTo: "node4",
              isFocused: false,
              row: 1,
              col: 3,
            },

            {
              id: "node4",
              data: "4",
              nextValue: "0x580",
              address: "0x560",
              pointsTo: "node5",
              isFocused: true,
              row: 3,
              col: 2,
            },

            {
              id: "node5",
              data: "5",
              nextValue: "NULL",
              address: "0x580",
              pointsTo: "",
              isFocused: false,
              row: 3,
              col: 3,
            },
          ],
        },
      },

      //======================================================
      // STEP 11
      // EVENT : Break Statement
      // CODE  : break;
      //
      // NOTE:
      // Thoát khỏi vòng lặp ngay khi tìm thấy.
      //======================================================
      {
        activeCodeLine: 6,
        explanation:
          "Điều kiện tìm kiếm đã thỏa mãn nên lệnh break được thực hiện. Vòng lặp kết thúc ngay lập tức mà không cần kiểm tra các Node còn lại.",

        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              row: 0,
              col: 0,
            },
          ],

          nodes: [
            {
              id: "node1",
              data: "1",
              nextValue: "0x520",
              address: "0x500",
              pointsTo: "node2",
              isFocused: false,
              row: 1,
              col: 1,
            },

            {
              id: "node2",
              data: "2",
              nextValue: "0x540",
              address: "0x520",
              pointsTo: "node3",
              isFocused: false,
              row: 1,
              col: 2,
            },

            {
              id: "node3",
              data: "3",
              nextValue: "0x560",
              address: "0x540",
              pointsTo: "node4",
              isFocused: false,
              row: 1,
              col: 3,
            },

            {
              id: "node4",
              data: "4",
              nextValue: "0x580",
              address: "0x560",
              pointsTo: "node5",
              isFocused: true,
              row: 3,
              col: 2,
            },

            {
              id: "node5",
              data: "5",
              nextValue: "NULL",
              address: "0x580",
              pointsTo: "",
              isFocused: false,
              row: 3,
              col: 3,
            },
          ],
        },
      },

      //======================================================
      // STEP 12
      // EVENT : Search Completed
      // CODE  : End of Search
      //
      // NOTE:
      // Giữ nguyên focus tại Node tìm thấy.
      //======================================================
      {
        activeCodeLine: 6,
        explanation:
          "Quá trình tìm kiếm hoàn tất. Node chứa giá trị 4 đã được tìm thấy nên thuật toán dừng lại ngay tại đây. Node thứ năm không cần kiểm tra vì kết quả đã có.",

        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              isUpdated: true,
              row: 0,
              col: 0,
            },
          ],

          nodes: [
            {
              id: "node1",
              data: "1",
              nextValue: "0x520",
              address: "0x500",
              pointsTo: "node2",
              isFocused: false,
              row: 1,
              col: 1,
            },

            {
              id: "node2",
              data: "2",
              nextValue: "0x540",
              address: "0x520",
              pointsTo: "node3",
              isFocused: false,
              row: 1,
              col: 2,
            },

            {
              id: "node3",
              data: "3",
              nextValue: "0x560",
              address: "0x540",
              pointsTo: "node4",
              isFocused: false,
              row: 1,
              col: 3,
            },

            {
              id: "node4",
              data: "4",
              nextValue: "0x580",
              address: "0x560",
              pointsTo: "node5",
              isFocused: true,
              row: 3,
              col: 2,
            },

            {
              id: "node5",
              data: "5",
              nextValue: "NULL",
              address: "0x580",
              pointsTo: "",
              isFocused: false,
              row: 3,
              col: 3,
            },
          ],
        },
      },
    ],
  },

  //======================================================
  // LESSON 3.1 - INSERT HEAD
  //
  // Mục tiêu:
  // 1. Tạo một Node mới.
  // 2. Liên kết Node mới với Node đầu hiện tại.
  // 3. Cập nhật head để Node mới trở thành Node đầu tiên.
  //======================================================
  insertHead: {
    codeLines: [
      "Node* newNode = new Node(100);",
      "",
      "newNode->next = head;",
      "",
      "head = newNode;",
    ],

    steps: [
      //======================================================
      // STEP 1
      // EVENT : Initial Linked List
      // CODE  : Node* newNode = new Node(100);
      //======================================================
      {
        activeCodeLine: 0,
        explanation:
          "Danh sách liên kết hiện có 5 Node. Chương trình chuẩn bị tạo một Node mới để chèn vào đầu danh sách.",

        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              isUpdated: false,
              row: 1,
              col: 2,
            },
          ],

          nodes: [
            {
              id: "node1",
              data: "1",
              nextValue: "0x520",
              address: "0x500",
              pointsTo: "node2",
              isFocused: true,
              isUpdated: false,
              row: 1,
              col: 1,
            },

            {
              id: "node2",
              data: "2",
              nextValue: "0x540",
              address: "0x520",
              pointsTo: "node3",
              isFocused: false,
              isUpdated: false,
              row: 3,
              col: 1,
            },

            {
              id: "node3",
              data: "3",
              nextValue: "0x560",
              address: "0x540",
              pointsTo: "node4",
              isFocused: false,
              isUpdated: false,
              row: 2,
              col: 2,
            },

            {
              id: "node4",
              data: "4",
              nextValue: "0x580",
              address: "0x560",
              pointsTo: "node5",
              isFocused: false,
              isUpdated: false,
              row: 3,
              col: 3,
            },

            {
              id: "node5",
              data: "5",
              nextValue: "NULL",
              address: "0x580",
              pointsTo: "",
              isFocused: false,
              isUpdated: false,
              row: 1,
              col: 3,
            },
          ],
        },
      },

      //======================================================
      // STEP 2
      // EVENT : Create New Node
      // CODE  : Node* newNode = new Node(100);
      //
      // NOTE:
      // Node mới được cấp phát trên Heap.
      // Chưa liên kết với danh sách.
      //======================================================
      {
        activeCodeLine: 0,
        explanation:
          "Một Node mới được cấp phát trên Heap với giá trị 100. Hiện tại Node này chưa được nối vào danh sách.",

        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              row: 1,
              col: 2,
            },
          ],

          nodes: [
            {
              id: "newNode",
              data: "100",
              nextValue: "NULL",
              address: "0x480",
              pointsTo: "",
              isFocused: true,
              isUpdated: true,
              row: 1,
              col: 2,
            },

            {
              id: "node1",
              data: "1",
              nextValue: "0x520",
              address: "0x500",
              pointsTo: "node2",
              isFocused: false,
              isUpdated: false,
              row: 1,
              col: 1,
            },

            {
              id: "node2",
              data: "2",
              nextValue: "0x540",
              address: "0x520",
              pointsTo: "node3",
              isFocused: false,
              isUpdated: false,
              row: 3,
              col: 1,
            },

            {
              id: "node3",
              data: "3",
              nextValue: "0x560",
              address: "0x540",
              pointsTo: "node4",
              isFocused: false,
              isUpdated: false,
              row: 2,
              col: 2,
            },

            {
              id: "node4",
              data: "4",
              nextValue: "0x580",
              address: "0x560",
              pointsTo: "node5",
              isFocused: false,
              isUpdated: false,
              row: 3,
              col: 3,
            },

            {
              id: "node5",
              data: "5",
              nextValue: "NULL",
              address: "0x580",
              pointsTo: "",
              isFocused: false,
              isUpdated: false,
              row: 1,
              col: 3,
            },
          ],
        },
      },

      //======================================================
      // STEP 3
      // EVENT : Prepare Linking
      // CODE  : newNode->next = head;
      //
      // NOTE:
      // Chuẩn bị nối Node mới với Node đầu hiện tại.
      //======================================================
      {
        activeCodeLine: 2,
        explanation:
          "Chương trình chuẩn bị liên kết Node mới với Node đầu hiện tại của danh sách. Sau bước này, newNode sẽ trỏ tới Node chứa giá trị 1.",

        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              row: 1,
              col: 2,
            },
          ],

          nodes: [
            {
              id: "newNode",
              data: "100",
              nextValue: "NULL",
              address: "0x480",
              pointsTo: "",
              isFocused: true,
              isUpdated: false,
              row: 1,
              col: 2,
            },

            {
              id: "node1",
              data: "1",
              nextValue: "0x520",
              address: "0x500",
              pointsTo: "node2",
              isFocused: true,
              isUpdated: false,
              row: 1,
              col: 1,
            },

            {
              id: "node2",
              data: "2",
              nextValue: "0x540",
              address: "0x520",
              pointsTo: "node3",
              isFocused: false,
              isUpdated: false,
              row: 3,
              col: 1,
            },

            {
              id: "node3",
              data: "3",
              nextValue: "0x560",
              address: "0x540",
              pointsTo: "node4",
              isFocused: false,
              isUpdated: false,
              row: 2,
              col: 2,
            },

            {
              id: "node4",
              data: "4",
              nextValue: "0x580",
              address: "0x560",
              pointsTo: "node5",
              isFocused: false,
              isUpdated: false,
              row: 3,
              col: 3,
            },

            {
              id: "node5",
              data: "5",
              nextValue: "NULL",
              address: "0x580",
              pointsTo: "",
              isFocused: false,
              isUpdated: false,
              row: 1,
              col: 3,
            },
          ],
        },
      },

      //======================================================
      // STEP 4
      // EVENT : Link newNode To Head
      // CODE  : newNode->next = head;
      //
      // NOTE:
      // Thành viên next của newNode được cập nhật để trỏ tới
      // Node đầu tiên hiện tại.
      //======================================================
      {
        activeCodeLine: 2,
        explanation:
          "Thành viên next của newNode được gán bằng head. Bây giờ newNode đã liên kết với Node đầu tiên của danh sách.",

        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              row: 1,
              col: 2,
            },
          ],

          nodes: [
            {
              id: "newNode",
              data: "100",
              nextValue: "0x500",
              address: "0x480",
              pointsTo: "node1",
              isFocused: true,
              isUpdated: true,
              row: 1,
              col: 2,
            },

            {
              id: "node1",
              data: "1",
              nextValue: "0x520",
              address: "0x500",
              pointsTo: "node2",
              isFocused: true,
              isUpdated: false,
              row: 1,
              col: 1,
            },

            {
              id: "node2",
              data: "2",
              nextValue: "0x540",
              address: "0x520",
              pointsTo: "node3",
              isFocused: false,
              isUpdated: false,
              row: 3,
              col: 1,
            },

            {
              id: "node3",
              data: "3",
              nextValue: "0x560",
              address: "0x540",
              pointsTo: "node4",
              isFocused: false,
              isUpdated: false,
              row: 2,
              col: 2,
            },

            {
              id: "node4",
              data: "4",
              nextValue: "0x580",
              address: "0x560",
              pointsTo: "node5",
              isFocused: false,
              isUpdated: false,
              row: 3,
              col: 3,
            },

            {
              id: "node5",
              data: "5",
              nextValue: "NULL",
              address: "0x580",
              pointsTo: "",
              isFocused: false,
              isUpdated: false,
              row: 1,
              col: 3,
            },
          ],
        },
      },

      //======================================================
      // STEP 5
      // EVENT : Prepare Update Head
      // CODE  : head = newNode;
      //
      // NOTE:
      // newNode đã nối thành công với danh sách.
      // Chuẩn bị cập nhật head.
      //======================================================
      {
        activeCodeLine: 4,
        explanation:
          "Node mới đã được liên kết với danh sách. Bước tiếp theo là cập nhật head để Node mới trở thành Node đầu tiên.",

        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              isUpdated: false,
              row: 1,
              col: 2,
            },
          ],

          nodes: [
            {
              id: "newNode",
              data: "100",
              nextValue: "0x500",
              address: "0x480",
              pointsTo: "node1",
              isFocused: true,
              isUpdated: false,
              row: 1,
              col: 2,
            },

            {
              id: "node1",
              data: "1",
              nextValue: "0x520",
              address: "0x500",
              pointsTo: "node2",
              isFocused: false,
              isUpdated: false,
              row: 1,
              col: 1,
            },

            {
              id: "node2",
              data: "2",
              nextValue: "0x540",
              address: "0x520",
              pointsTo: "node3",
              isFocused: false,
              isUpdated: false,
              row: 3,
              col: 1,
            },

            {
              id: "node3",
              data: "3",
              nextValue: "0x560",
              address: "0x540",
              pointsTo: "node4",
              isFocused: false,
              isUpdated: false,
              row: 2,
              col: 2,
            },

            {
              id: "node4",
              data: "4",
              nextValue: "0x580",
              address: "0x560",
              pointsTo: "node5",
              isFocused: false,
              isUpdated: false,
              row: 3,
              col: 3,
            },

            {
              id: "node5",
              data: "5",
              nextValue: "NULL",
              address: "0x580",
              pointsTo: "",
              isFocused: false,
              isUpdated: false,
              row: 1,
              col: 3,
            },
          ],
        },
      },

      //======================================================
      // STEP 6
      // EVENT : Update Head Pointer
      // CODE  : head = newNode;
      //
      // NOTE:
      // Head đổi sang địa chỉ của newNode.
      //======================================================
      {
        activeCodeLine: 4,
        explanation:
          "Con trỏ head được cập nhật để lưu địa chỉ của newNode. Từ thời điểm này, newNode đã trở thành Node đầu tiên của danh sách.",

        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x480",
              address: "0x200",
              pointsTo: "newNode",
              isUpdated: true,
              row: 1,
              col: 2,
            },
          ],

          nodes: [
            {
              id: "newNode",
              data: "100",
              nextValue: "0x500",
              address: "0x480",
              pointsTo: "node1",
              isFocused: true,
              isUpdated: true,
              row: 1,
              col: 2,
            },

            {
              id: "node1",
              data: "1",
              nextValue: "0x520",
              address: "0x500",
              pointsTo: "node2",
              isFocused: false,
              isUpdated: false,
              row: 1,
              col: 1,
            },

            {
              id: "node2",
              data: "2",
              nextValue: "0x540",
              address: "0x520",
              pointsTo: "node3",
              isFocused: false,
              isUpdated: false,
              row: 3,
              col: 1,
            },

            {
              id: "node3",
              data: "3",
              nextValue: "0x560",
              address: "0x540",
              pointsTo: "node4",
              isFocused: false,
              isUpdated: false,
              row: 2,
              col: 2,
            },

            {
              id: "node4",
              data: "4",
              nextValue: "0x580",
              address: "0x560",
              pointsTo: "node5",
              isFocused: false,
              isUpdated: false,
              row: 3,
              col: 3,
            },

            {
              id: "node5",
              data: "5",
              nextValue: "NULL",
              address: "0x580",
              pointsTo: "",
              isFocused: false,
              isUpdated: false,
              row: 1,
              col: 3,
            },
          ],
        },
      },
    ],
  },

  //======================================================
  // LESSON 3.2 - INSERT TAIL
  //
  // Mục tiêu:
  // 1. Tạo Node mới.
  // 2. Duyệt đến Node cuối.
  // 3. Liên kết Node cuối với Node mới.
  //======================================================
  insertTail: {
    codeLines: [
      "Node* newNode = new Node(100);",
      "",
      "Node* current = head;",
      "",
      "while(current->next != nullptr)",
      "{",
      " current = current->next;",
      "}",
      "",
      "current->next = newNode;",
    ],

    steps: [
      //======================================================
      // STEP 1
      // EVENT : Initial Linked List
      // CODE  : Node* newNode = new Node(100);
      //======================================================
      {
        activeCodeLine: 0,
        explanation:
          "Danh sách hiện có 3 Node. Chương trình chuẩn bị tạo một Node mới để chèn vào cuối danh sách.",

        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              row: 1,
              col: 2,
            },
          ],

          nodes: [
            {
              id: "node1",
              data: "1",
              nextValue: "0x520",
              address: "0x500",
              pointsTo: "node2",
              isFocused: true,
              isUpdated: false,
              row: 1,
              col: 2,
            },

            {
              id: "node2",
              data: "2",
              nextValue: "0x540",
              address: "0x520",
              pointsTo: "node3",
              isFocused: false,
              isUpdated: false,
              row: 1,
              col: 3,
            },

            {
              id: "node3",
              data: "3",
              nextValue: "NULL",
              address: "0x540",
              pointsTo: "",
              isFocused: false,
              isUpdated: false,
              row: 3,
              col: 3,
            },
          ],
        },
      },

      //======================================================
      // STEP 2
      // EVENT : Create New Node
      // CODE  : Node* newNode = new Node(100);
      //
      // NOTE:
      // Node mới được cấp phát trên Heap.
      // Chưa liên kết với danh sách.
      //======================================================
      {
        activeCodeLine: 0,
        explanation:
          "Một Node mới chứa giá trị 100 được cấp phát trên Heap. Node này hiện vẫn đứng độc lập và chưa liên kết với danh sách.",

        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              row: 1,
              col: 2,
            },
          ],

          nodes: [
            {
              id: "newNode",
              data: "100",
              nextValue: "NULL",
              address: "0x560",
              pointsTo: "",
              isFocused: true,
              isUpdated: true,
              row: 1,
              col: 1,
            },

            {
              id: "node1",
              data: "1",
              nextValue: "0x520",
              address: "0x500",
              pointsTo: "node2",
              isFocused: false,
              isUpdated: false,
              row: 1,
              col: 2,
            },

            {
              id: "node2",
              data: "2",
              nextValue: "0x540",
              address: "0x520",
              pointsTo: "node3",
              isFocused: false,
              isUpdated: false,
              row: 1,
              col: 3,
            },

            {
              id: "node3",
              data: "3",
              nextValue: "NULL",
              address: "0x540",
              pointsTo: "",
              isFocused: false,
              isUpdated: false,
              row: 3,
              col: 3,
            },
          ],
        },
      },

      //======================================================
      // STEP 3
      // EVENT : current = head
      // CODE  : Node* current = head;
      //
      // NOTE:
      // current không render.
      // Node đầu tiên được focus.
      //======================================================
      {
        activeCodeLine: 2,
        explanation:
          "Current được gán bằng head. Thuật toán bắt đầu duyệt danh sách từ Node đầu tiên để tìm Node cuối cùng.",

        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              row: 1,
              col: 2,
            },
          ],

          nodes: [
            {
              id: "newNode",
              data: "100",
              nextValue: "NULL",
              address: "0x560",
              pointsTo: "",
              isFocused: false,
              isUpdated: false,
              row: 1,
              col: 1,
            },

            {
              id: "node1",
              data: "1",
              nextValue: "0x520",
              address: "0x500",
              pointsTo: "node2",
              isFocused: true,
              isUpdated: false,
              row: 1,
              col: 2,
            },

            {
              id: "node2",
              data: "2",
              nextValue: "0x540",
              address: "0x520",
              pointsTo: "node3",
              isFocused: false,
              isUpdated: false,
              row: 1,
              col: 3,
            },

            {
              id: "node3",
              data: "3",
              nextValue: "NULL",
              address: "0x540",
              pointsTo: "",
              isFocused: false,
              isUpdated: false,
              row: 3,
              col: 3,
            },
          ],
        },
      },

      //======================================================
      // STEP 4
      // EVENT : First While Check
      // CODE  : while(current->next != nullptr)
      //======================================================
      {
        activeCodeLine: 4,
        explanation:
          "Node đầu tiên vẫn còn Node phía sau nên current tiếp tục di chuyển để tìm Node cuối cùng.",

        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              row: 1,
              col: 2,
            },
          ],

          nodes: [
            {
              id: "newNode",
              data: "100",
              nextValue: "NULL",
              address: "0x560",
              pointsTo: "",
              isFocused: false,
              isUpdated: false,
              row: 1,
              col: 1,
            },

            {
              id: "node1",
              data: "1",
              nextValue: "0x520",
              address: "0x500",
              pointsTo: "node2",
              isFocused: true,
              isUpdated: false,
              row: 1,
              col: 2,
            },

            {
              id: "node2",
              data: "2",
              nextValue: "0x540",
              address: "0x520",
              pointsTo: "node3",
              isFocused: false,
              isUpdated: false,
              row: 1,
              col: 3,
            },

            {
              id: "node3",
              data: "3",
              nextValue: "NULL",
              address: "0x540",
              pointsTo: "",
              isFocused: false,
              isUpdated: false,
              row: 3,
              col: 3,
            },
          ],
        },
      },

      //======================================================
      // STEP 5
      // EVENT : Move To Next Node
      // CODE  : current = current->next;
      //
      // NOTE:
      // current không render.
      // Focus chuyển sang Node thứ hai.
      //======================================================
      {
        activeCodeLine: 6,
        explanation:
          "Node đầu tiên chưa phải là Node cuối nên chương trình tiếp tục di chuyển sang Node kế tiếp.",

        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              row: 1,
              col: 2,
            },
          ],

          nodes: [
            {
              id: "newNode",
              data: "100",
              nextValue: "NULL",
              address: "0x560",
              pointsTo: "",
              isFocused: false,
              isUpdated: false,
              row: 1,
              col: 1,
            },

            {
              id: "node1",
              data: "1",
              nextValue: "0x520",
              address: "0x500",
              pointsTo: "node2",
              isFocused: false,
              isUpdated: false,
              row: 1,
              col: 2,
            },

            {
              id: "node2",
              data: "2",
              nextValue: "0x540",
              address: "0x520",
              pointsTo: "node3",
              isFocused: true,
              isUpdated: false,
              row: 1,
              col: 3,
            },

            {
              id: "node3",
              data: "3",
              nextValue: "NULL",
              address: "0x540",
              pointsTo: "",
              isFocused: false,
              isUpdated: false,
              row: 3,
              col: 3,
            },
          ],
        },
      },

      //======================================================
      // STEP 6
      // EVENT : Second While Check
      // CODE  : while(current->next != nullptr)
      //
      // NOTE:
      // Node2 vẫn còn Node phía sau.
      //======================================================
      {
        activeCodeLine: 4,
        explanation:
          "Node thứ hai vẫn còn liên kết tới Node tiếp theo nên đây chưa phải Node cuối. Thuật toán tiếp tục duyệt.",

        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              row: 1,
              col: 2,
            },
          ],

          nodes: [
            {
              id: "newNode",
              data: "100",
              nextValue: "NULL",
              address: "0x560",
              pointsTo: "",
              isFocused: false,
              isUpdated: false,
              row: 1,
              col: 1,
            },

            {
              id: "node1",
              data: "1",
              nextValue: "0x520",
              address: "0x500",
              pointsTo: "node2",
              isFocused: false,
              isUpdated: false,
              row: 1,
              col: 2,
            },

            {
              id: "node2",
              data: "2",
              nextValue: "0x540",
              address: "0x520",
              pointsTo: "node3",
              isFocused: true,
              isUpdated: false,
              row: 1,
              col: 3,
            },

            {
              id: "node3",
              data: "3",
              nextValue: "NULL",
              address: "0x540",
              pointsTo: "",
              isFocused: false,
              isUpdated: false,
              row: 3,
              col: 3,
            },
          ],
        },
      },

      //======================================================
      // STEP 7
      // EVENT : Move To Last Node
      // CODE  : current = current->next;
      //
      // NOTE:
      // Focus chuyển sang Node cuối.
      //======================================================
      {
        activeCodeLine: 6,
        explanation:
          "Current tiếp tục di chuyển sang Node kế tiếp. Node thứ ba hiện là Node đang được kiểm tra.",

        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              row: 1,
              col: 2,
            },
          ],

          nodes: [
            {
              id: "newNode",
              data: "100",
              nextValue: "NULL",
              address: "0x560",
              pointsTo: "",
              isFocused: false,
              isUpdated: false,
              row: 1,
              col: 1,
            },

            {
              id: "node1",
              data: "1",
              nextValue: "0x520",
              address: "0x500",
              pointsTo: "node2",
              isFocused: false,
              isUpdated: false,
              row: 1,
              col: 2,
            },

            {
              id: "node2",
              data: "2",
              nextValue: "0x540",
              address: "0x520",
              pointsTo: "node3",
              isFocused: false,
              isUpdated: false,
              row: 1,
              col: 3,
            },

            {
              id: "node3",
              data: "3",
              nextValue: "NULL",
              address: "0x540",
              pointsTo: "",
              isFocused: true,
              isUpdated: false,
              row: 3,
              col: 3,
            },

            {
              id: "newNode",
              data: "100",
              nextValue: "NULL",
              address: "0x560",
              pointsTo: "",
              isFocused: false,
              isUpdated: false,
              row: 1,
              col: 1,
            },
          ],
        },
      },

      //======================================================
      // STEP 8
      // EVENT : Last Node Found
      // CODE  : while(current->next != nullptr)
      //
      // NOTE:
      // current->next == NULL.
      // Đã tìm thấy Node cuối.
      //======================================================
      {
        activeCodeLine: 4,
        explanation:
          "Node hiện tại không còn Node nào phía sau vì next bằng NULL. Đây chính là Node cuối cùng của danh sách và chương trình chuẩn bị liên kết Node mới vào phía sau.",

        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              row: 1,
              col: 2,
            },
          ],

          nodes: [
            {
              id: "newNode",
              data: "100",
              nextValue: "NULL",
              address: "0x560",
              pointsTo: "",
              isFocused: false,
              isUpdated: false,
              row: 1,
              col: 1,
            },

            {
              id: "node1",
              data: "1",
              nextValue: "0x520",
              address: "0x500",
              pointsTo: "node2",
              isFocused: false,
              isUpdated: false,
              row: 1,
              col: 2,
            },

            {
              id: "node2",
              data: "2",
              nextValue: "0x540",
              address: "0x520",
              pointsTo: "node3",
              isFocused: false,
              isUpdated: false,
              row: 1,
              col: 3,
            },

            {
              id: "node3",
              data: "3",
              nextValue: "NULL",
              address: "0x540",
              pointsTo: "",
              isFocused: true,
              isUpdated: false,
              row: 3,
              col: 3,
            },

            {
              id: "newNode",
              data: "100",
              nextValue: "NULL",
              address: "0x560",
              pointsTo: "",
              isFocused: false,
              isUpdated: false,
              row: 1,
              col: 1,
            },
          ],
        },
      },
      //======================================================
      // STEP 9
      // EVENT : Link New Node
      // CODE  : current->next = newNode;
      //
      // NOTE:
      // Node cuối cập nhật con trỏ next để trỏ tới newNode.
      //======================================================
      {
        activeCodeLine: 9,
        explanation:
          "Đã tìm thấy Node cuối cùng. Chương trình cập nhật thành viên next của Node này để liên kết với newNode.",

        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              row: 1,
              col: 2,
            },
          ],

          nodes: [
            {
              id: "newNode",
              data: "100",
              nextValue: "NULL",
              address: "0x560",
              pointsTo: "",
              isFocused: true,
              isUpdated: true,
              row: 1,
              col: 1,
            },

            {
              id: "node1",
              data: "1",
              nextValue: "0x520",
              address: "0x500",
              pointsTo: "node2",
              isFocused: false,
              isUpdated: false,
              row: 1,
              col: 2,
            },

            {
              id: "node2",
              data: "2",
              nextValue: "0x540",
              address: "0x520",
              pointsTo: "node3",
              isFocused: false,
              isUpdated: false,
              row: 1,
              col: 3,
            },

            {
              id: "node3",
              data: "3",
              nextValue: "0x560",
              address: "0x540",
              pointsTo: "newNode",
              isFocused: true,
              isUpdated: true,
              row: 3,
              col: 3,
            },
          ],
        },
      },

      //======================================================
      // STEP 10
      // EVENT : Verify New Tail
      // CODE  : current->next = newNode;
      //
      // NOTE:
      // newNode đã trở thành Node cuối.
      //======================================================
      {
        activeCodeLine: 9,
        explanation:
          "Liên kết đã được thiết lập thành công. newNode trở thành Node cuối cùng của danh sách, trong khi next của newNode vẫn giữ giá trị NULL.",

        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              row: 1,
              col: 2,
            },
          ],

          nodes: [
            {
              id: "newNode",
              data: "100",
              nextValue: "NULL",
              address: "0x560",
              pointsTo: "",
              isFocused: true,
              isUpdated: false,
              row: 1,
              col: 1,
            },

            {
              id: "node1",
              data: "1",
              nextValue: "0x520",
              address: "0x500",
              pointsTo: "node2",
              isFocused: false,
              isUpdated: false,
              row: 1,
              col: 2,
            },

            {
              id: "node2",
              data: "2",
              nextValue: "0x540",
              address: "0x520",
              pointsTo: "node3",
              isFocused: false,
              isUpdated: false,
              row: 1,
              col: 3,
            },

            {
              id: "node3",
              data: "3",
              nextValue: "0x560",
              address: "0x540",
              pointsTo: "newNode",
              isFocused: false,
              isUpdated: false,
              row: 3,
              col: 3,
            },
          ],
        },
      },

      //======================================================
      // STEP 11
      // EVENT : Insert Tail Completed
      // CODE  : End Of Algorithm
      //
      // NOTE:
      // Tổng kết thuật toán Insert Tail.
      //======================================================
      {
        activeCodeLine: 9,
        explanation:
          "Thuật toán Insert Tail hoàn tất. Node mới đã được nối vào cuối danh sách. Vì phải duyệt qua các Node để tìm Node cuối nên thao tác này có độ phức tạp O(n) khi chỉ sử dụng con trỏ head.",

        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              isUpdated: true,
              row: 1,
              col: 2,
            },
          ],

          nodes: [
            {
              id: "newNode",
              data: "100",
              nextValue: "NULL",
              address: "0x560",
              pointsTo: "",
              isFocused: true,
              isUpdated: true,
              row: 1,
              col: 1,
            },

            {
              id: "node1",
              data: "1",
              nextValue: "0x520",
              address: "0x500",
              pointsTo: "node2",
              isFocused: false,
              isUpdated: false,
              row: 1,
              col: 2,
            },

            {
              id: "node2",
              data: "2",
              nextValue: "0x540",
              address: "0x520",
              pointsTo: "node3",
              isFocused: false,
              isUpdated: false,
              row: 1,
              col: 3,
            },

            {
              id: "node3",
              data: "3",
              nextValue: "0x560",
              address: "0x540",
              pointsTo: "newNode",
              isFocused: false,
              isUpdated: false,
              row: 3,
              col: 3,
            },
          ],
        },
      },
    ],
  },

  //======================================================
  // LESSON 3.3 - INSERT MIDDLE
  //
  // Mục tiêu:
  // 1. Tìm vị trí cần chèn.
  // 2. Liên kết newNode với Node phía sau.
  // 3. Liên kết Node hiện tại với newNode.
  //======================================================
  insertMiddle: {
    codeLines: [
      "Node* newNode = new Node(100);",
      "",
      "Node* current = head;",
      "",
      "while(current->data != 2)",
      "{",
      " current = current->next;",
      "}",
      "",
      "newNode->next = current->next;",
      "",
      "current->next = newNode;",
    ],

    steps: [
      //======================================================
      // STEP 1
      // EVENT : Initial Linked List
      // CODE  : Node* newNode = new Node(100);
      //======================================================
      {
        activeCodeLine: 0,
        explanation:
          "Danh sách hiện có 3 Node. Chương trình chuẩn bị tạo một Node mới để chèn sau Node có giá trị 2.",

        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              row: 1,
              col: 2,
            },
          ],

          nodes: [
            {
              id: "node1",
              data: "1",
              nextValue: "0x520",
              address: "0x500",
              pointsTo: "node2",
              isFocused: true,
              isUpdated: false,
              row: 1,
              col: 2,
            },

            {
              id: "node2",
              data: "2",
              nextValue: "0x540",
              address: "0x520",
              pointsTo: "node3",
              isFocused: false,
              isUpdated: false,
              row: 1,
              col: 3,
            },

            {
              id: "node3",
              data: "3",
              nextValue: "NULL",
              address: "0x540",
              pointsTo: "",
              isFocused: false,
              isUpdated: false,
              row: 3,
              col: 3,
            },
          ],
        },
      },

      //======================================================
      // STEP 2
      // EVENT : Create New Node
      // CODE  : Node* newNode = new Node(100);
      //
      // NOTE:
      // Node mới được tạo nhưng
      // chưa liên kết với danh sách.
      //======================================================
      {
        activeCodeLine: 0,
        explanation:
          "Một Node mới chứa giá trị 100 được cấp phát trên Heap. Hiện tại Node này vẫn chưa được nối vào danh sách.",

        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              row: 1,
              col: 2,
            },
          ],

          nodes: [
            {
              id: "newNode",
              data: "100",
              nextValue: "NULL",
              address: "0x560",
              pointsTo: "",
              isFocused: true,
              isUpdated: true,
              row: 1,
              col: 1,
            },

            {
              id: "node1",
              data: "1",
              nextValue: "0x520",
              address: "0x500",
              pointsTo: "node2",
              isFocused: false,
              isUpdated: false,
              row: 1,
              col: 2,
            },

            {
              id: "node2",
              data: "2",
              nextValue: "0x540",
              address: "0x520",
              pointsTo: "node3",
              isFocused: false,
              isUpdated: false,
              row: 1,
              col: 3,
            },

            {
              id: "node3",
              data: "3",
              nextValue: "NULL",
              address: "0x540",
              pointsTo: "",
              isFocused: false,
              isUpdated: false,
              row: 3,
              col: 3,
            },
          ],
        },
      },

      //======================================================
      // STEP 3
      // EVENT : current = head
      // CODE  : Node* current = head;
      //
      // NOTE:
      // current không render.
      // Focus bắt đầu tại Node đầu tiên.
      //======================================================
      {
        activeCodeLine: 2,
        explanation:
          "Current được gán bằng head. Thuật toán bắt đầu tìm vị trí cần chèn từ Node đầu tiên.",

        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              row: 1,
              col: 2,
            },
          ],

          nodes: [
            {
              id: "newNode",
              data: "100",
              nextValue: "NULL",
              address: "0x560",
              pointsTo: "",
              isFocused: false,
              isUpdated: false,
              row: 1,
              col: 1,
            },

            {
              id: "node1",
              data: "1",
              nextValue: "0x520",
              address: "0x500",
              pointsTo: "node2",
              isFocused: true,
              isUpdated: false,
              row: 1,
              col: 2,
            },

            {
              id: "node2",
              data: "2",
              nextValue: "0x540",
              address: "0x520",
              pointsTo: "node3",
              isFocused: false,
              isUpdated: false,
              row: 1,
              col: 3,
            },

            {
              id: "node3",
              data: "3",
              nextValue: "NULL",
              address: "0x540",
              pointsTo: "",
              isFocused: false,
              isUpdated: false,
              row: 3,
              col: 3,
            },
          ],
        },
      },

      //======================================================
      // STEP 4
      // EVENT : First Compare
      // CODE  : while(current->data != 2)
      //======================================================
      {
        activeCodeLine: 4,
        explanation:
          "Node hiện tại có giá trị 1 nên chưa phải vị trí cần chèn. Thuật toán tiếp tục di chuyển sang Node kế tiếp.",

        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              row: 1,
              col: 2,
            },
          ],

          nodes: [
            {
              id: "newNode",
              data: "100",
              nextValue: "NULL",
              address: "0x560",
              pointsTo: "",
              isFocused: false,
              isUpdated: false,
              row: 1,
              col: 1,
            },

            {
              id: "node1",
              data: "1",
              nextValue: "0x520",
              address: "0x500",
              pointsTo: "node2",
              isFocused: true,
              isUpdated: false,
              row: 1,
              col: 2,
            },

            {
              id: "node2",
              data: "2",
              nextValue: "0x540",
              address: "0x520",
              pointsTo: "node3",
              isFocused: false,
              isUpdated: false,
              row: 1,
              col: 3,
            },

            {
              id: "node3",
              data: "3",
              nextValue: "NULL",
              address: "0x540",
              pointsTo: "",
              isFocused: false,
              isUpdated: false,
              row: 3,
              col: 3,
            },
          ],
        },
      },

      //======================================================
      // STEP 5
      // EVENT : Move To Next Node
      // CODE  : current = current->next;
      //
      // NOTE:
      // Focus chuyển từ Node1 sang Node2.
      //======================================================
      {
        activeCodeLine: 6,
        explanation:
          "Node đầu tiên chưa phải vị trí cần chèn nên current tiếp tục di chuyển sang Node kế tiếp.",

        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              row: 1,
              col: 2,
            },
          ],

          nodes: [
            {
              id: "newNode",
              data: "100",
              nextValue: "NULL",
              address: "0x560",
              pointsTo: "",
              isFocused: false,
              isUpdated: false,
              row: 1,
              col: 1,
            },

            {
              id: "node1",
              data: "1",
              nextValue: "0x520",
              address: "0x500",
              pointsTo: "node2",
              isFocused: false,
              isUpdated: false,
              row: 1,
              col: 2,
            },

            {
              id: "node2",
              data: "2",
              nextValue: "0x540",
              address: "0x520",
              pointsTo: "node3",
              isFocused: true,
              isUpdated: false,
              row: 1,
              col: 3,
            },

            {
              id: "node3",
              data: "3",
              nextValue: "NULL",
              address: "0x540",
              pointsTo: "",
              isFocused: false,
              isUpdated: false,
              row: 3,
              col: 3,
            },
          ],
        },
      },

      //======================================================
      // STEP 6
      // EVENT : Found Insert Position
      // CODE  : while(current->data != 2)
      //
      // NOTE:
      // current->data == 2.
      // Đã tìm thấy vị trí cần chèn.
      //======================================================
      {
        activeCodeLine: 4,
        explanation:
          "Node hiện tại có giá trị bằng 2 nên đây chính là vị trí cần chèn. Vòng lặp kết thúc.",

        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              row: 1,
              col: 2,
            },
          ],

          nodes: [
            {
              id: "newNode",
              data: "100",
              nextValue: "NULL",
              address: "0x560",
              pointsTo: "",
              isFocused: false,
              isUpdated: false,
              row: 1,
              col: 1,
            },

            {
              id: "node1",
              data: "1",
              nextValue: "0x520",
              address: "0x500",
              pointsTo: "node2",
              isFocused: false,
              isUpdated: false,
              row: 1,
              col: 2,
            },

            {
              id: "node2",
              data: "2",
              nextValue: "0x540",
              address: "0x520",
              pointsTo: "node3",
              isFocused: true,
              isUpdated: false,
              row: 1,
              col: 3,
            },

            {
              id: "node3",
              data: "3",
              nextValue: "NULL",
              address: "0x540",
              pointsTo: "",
              isFocused: false,
              isUpdated: false,
              row: 3,
              col: 3,
            },
          ],
        },
      },

      //======================================================
      // STEP 7
      // EVENT : Link newNode To Next Node
      // CODE  : newNode->next = current->next;
      //
      // NOTE:
      // newNode bắt đầu trỏ tới Node3.
      //======================================================
      {
        activeCodeLine: 9,
        explanation:
          "Để tránh mất liên kết với phần còn lại của danh sách, newNode sẽ được nối tới Node đứng sau current trước.",

        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              row: 1,
              col: 2,
            },
          ],

          nodes: [
            {
              id: "newNode",
              data: "100",
              nextValue: "0x540",
              address: "0x560",
              pointsTo: "node3",
              isFocused: true,
              isUpdated: true,
              row: 1,
              col: 1,
            },

            {
              id: "node1",
              data: "1",
              nextValue: "0x520",
              address: "0x500",
              pointsTo: "node2",
              isFocused: false,
              isUpdated: false,
              row: 1,
              col: 2,
            },

            {
              id: "node2",
              data: "2",
              nextValue: "0x540",
              address: "0x520",
              pointsTo: "node3",
              isFocused: true,
              isUpdated: false,
              row: 1,
              col: 3,
            },

            {
              id: "node3",
              data: "3",
              nextValue: "NULL",
              address: "0x540",
              pointsTo: "",
              isFocused: true,
              isUpdated: false,
              row: 3,
              col: 3,
            },
          ],
        },
      },

      //======================================================
      // STEP 8
      // EVENT : Prepare Final Link
      // CODE  : current->next = newNode;
      //
      // NOTE:
      // Chỉ còn thiếu một liên kết cuối cùng.
      //======================================================
      {
        activeCodeLine: 11,
        explanation:
          "newNode đã giữ được liên kết tới Node phía sau. Bước cuối cùng là cập nhật current->next để chèn newNode vào giữa danh sách.",

        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              row: 1,
              col: 2,
            },
          ],

          nodes: [
            {
              id: "newNode",
              data: "100",
              nextValue: "0x540",
              address: "0x560",
              pointsTo: "node3",
              isFocused: true,
              isUpdated: false,
              row: 1,
              col: 1,
            },

            {
              id: "node1",
              data: "1",
              nextValue: "0x520",
              address: "0x500",
              pointsTo: "node2",
              isFocused: false,
              isUpdated: false,
              row: 1,
              col: 2,
            },

            {
              id: "node2",
              data: "2",
              nextValue: "0x540",
              address: "0x520",
              pointsTo: "node3",
              isFocused: true,
              isUpdated: false,
              row: 1,
              col: 3,
            },

            {
              id: "node3",
              data: "3",
              nextValue: "NULL",
              address: "0x540",
              pointsTo: "",
              isFocused: false,
              isUpdated: false,
              row: 3,
              col: 3,
            },
          ],
        },
      },

      //======================================================
      // STEP 9
      // EVENT : Insert New Node
      // CODE  : current->next = newNode;
      //
      // NOTE:
      // Node2 cập nhật con trỏ next để trỏ tới newNode.
      //======================================================
      {
        activeCodeLine: 11,
        explanation:
          "Node hiện tại cập nhật con trỏ next để trỏ tới newNode. Lúc này newNode đã được chèn thành công vào giữa danh sách.",

        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              row: 1,
              col: 2,
            },
          ],

          nodes: [
            {
              id: "newNode",
              data: "100",
              nextValue: "0x540",
              address: "0x560",
              pointsTo: "node3",
              isFocused: true,
              isUpdated: true,
              row: 1,
              col: 1,
            },

            {
              id: "node1",
              data: "1",
              nextValue: "0x520",
              address: "0x500",
              pointsTo: "node2",
              isFocused: false,
              isUpdated: false,
              row: 1,
              col: 2,
            },

            {
              id: "node2",
              data: "2",
              nextValue: "0x560",
              address: "0x520",
              pointsTo: "newNode",
              isFocused: true,
              isUpdated: true,
              row: 1,
              col: 3,
            },

            {
              id: "node3",
              data: "3",
              nextValue: "NULL",
              address: "0x540",
              pointsTo: "",
              isFocused: false,
              isUpdated: false,
              row: 3,
              col: 3,
            },
          ],
        },
      },

      //======================================================
      // STEP 10
      // EVENT : Verify Linked List
      // CODE  : current->next = newNode;
      //
      // NOTE:
      // Danh sách mới:
      // 1 -> 2 -> 100 -> 3
      //======================================================
      {
        activeCodeLine: 11,
        explanation:
          "Danh sách liên kết đã được cập nhật. newNode nằm giữa Node có giá trị 2 và Node có giá trị 3.",

        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              row: 1,
              col: 2,
            },
          ],

          nodes: [
            {
              id: "newNode",
              data: "100",
              nextValue: "0x540",
              address: "0x560",
              pointsTo: "node3",
              isFocused: true,
              isUpdated: false,
              row: 1,
              col: 1,
            },

            {
              id: "node1",
              data: "1",
              nextValue: "0x520",
              address: "0x500",
              pointsTo: "node2",
              isFocused: false,
              isUpdated: false,
              row: 1,
              col: 2,
            },

            {
              id: "node2",
              data: "2",
              nextValue: "0x560",
              address: "0x520",
              pointsTo: "newNode",
              isFocused: false,
              isUpdated: false,
              row: 1,
              col: 3,
            },

            {
              id: "node3",
              data: "3",
              nextValue: "NULL",
              address: "0x540",
              pointsTo: "",
              isFocused: false,
              isUpdated: false,
              row: 3,
              col: 3,
            },
          ],
        },
      },

      //======================================================
      // STEP 11
      // EVENT : Insert Middle Completed
      // CODE  : End Of Algorithm
      //
      // NOTE:
      // Tổng kết thuật toán Insert Middle.
      //======================================================
      {
        activeCodeLine: 11,
        explanation:
          "Thuật toán Insert Middle hoàn tất. Để chèn một Node vào giữa danh sách, trước tiên phải giữ lại liên kết tới Node phía sau bằng newNode->next = current->next, sau đó mới cập nhật current->next = newNode. Thực hiện đúng thứ tự này giúp không làm mất phần còn lại của danh sách.",

        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              isUpdated: true,
              row: 1,
              col: 2,
            },
          ],

          nodes: [
            {
              id: "newNode",
              data: "100",
              nextValue: "0x540",
              address: "0x560",
              pointsTo: "node3",
              isFocused: true,
              isUpdated: true,
              row: 1,
              col: 1,
            },

            {
              id: "node1",
              data: "1",
              nextValue: "0x520",
              address: "0x500",
              pointsTo: "node2",
              isFocused: false,
              isUpdated: false,
              row: 1,
              col: 2,
            },

            {
              id: "node2",
              data: "2",
              nextValue: "0x560",
              address: "0x520",
              pointsTo: "newNode",
              isFocused: false,
              isUpdated: false,
              row: 1,
              col: 3,
            },

            {
              id: "node3",
              data: "3",
              nextValue: "NULL",
              address: "0x540",
              pointsTo: "",
              isFocused: false,
              isUpdated: false,
              row: 3,
              col: 3,
            },
          ],
        },
      },
    ],
  },

  //======================================================
  // LESSON 4.1 - DELETE HEAD
  //
  // Mục tiêu:
  // 1. Lưu Node đầu tiên.
  // 2. Cập nhật head sang Node kế tiếp.
  // 3. Giải phóng Node cũ.
  //======================================================
  deleteHead: {
    codeLines: [
      "Node* temp = head;",
      "",
      "head = head->next;",
      "",
      "delete temp;",
    ],

    steps: [
      //======================================================
      // STEP 1
      // EVENT : Initial Linked List
      // CODE  : Node* temp = head;
      //======================================================
      {
        activeCodeLine: 0,
        explanation:
          "Danh sách hiện tại có 4 Node. Chương trình chuẩn bị xóa Node đầu tiên của danh sách.",

        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x480",
              address: "0x200",
              pointsTo: "node0",
              row: 1,
              col: 2,
            },
          ],

          nodes: [
            {
              id: "node0",
              data: "100",
              nextValue: "0x500",
              address: "0x480",
              pointsTo: "node1",
              isFocused: true,
              isUpdated: false,
              row: 1,
              col: 1,
            },

            {
              id: "node1",
              data: "1",
              nextValue: "0x520",
              address: "0x500",
              pointsTo: "node2",
              isFocused: false,
              isUpdated: false,
              row: 1,
              col: 2,
            },

            {
              id: "node2",
              data: "2",
              nextValue: "0x540",
              address: "0x520",
              pointsTo: "node3",
              isFocused: false,
              isUpdated: false,
              row: 1,
              col: 3,
            },

            {
              id: "node3",
              data: "3",
              nextValue: "NULL",
              address: "0x540",
              pointsTo: "",
              isFocused: false,
              isUpdated: false,
              row: 3,
              col: 3,
            },
          ],
        },
      },

      //======================================================
      // STEP 2
      // EVENT : Save Head
      // CODE  : Node* temp = head;
      //
      // NOTE:
      // temp không render.
      // Chỉ mô phỏng Node được lưu lại.
      //======================================================
      {
        activeCodeLine: 0,
        explanation:
          "Con trỏ temp được gán bằng head để lưu lại địa chỉ của Node đầu tiên. Điều này giúp chương trình vẫn còn tham chiếu đến Node cần xóa sau khi head thay đổi.",

        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x480",
              address: "0x200",
              pointsTo: "node0",
              row: 1,
              col: 2,
            },
          ],

          nodes: [
            {
              id: "node0",
              data: "100",
              nextValue: "0x500",
              address: "0x480",
              pointsTo: "node1",
              isFocused: true,
              isUpdated: true,
              row: 1,
              col: 1,
            },

            {
              id: "node1",
              data: "1",
              nextValue: "0x520",
              address: "0x500",
              pointsTo: "node2",
              isFocused: false,
              isUpdated: false,
              row: 1,
              col: 2,
            },

            {
              id: "node2",
              data: "2",
              nextValue: "0x540",
              address: "0x520",
              pointsTo: "node3",
              isFocused: false,
              isUpdated: false,
              row: 1,
              col: 3,
            },

            {
              id: "node3",
              data: "3",
              nextValue: "NULL",
              address: "0x540",
              pointsTo: "",
              isFocused: false,
              isUpdated: false,
              row: 3,
              col: 3,
            },
          ],
        },
      },

      //======================================================
      // STEP 3
      // EVENT : Prepare Update Head
      // CODE  : head = head->next;
      //
      // NOTE:
      // Chuẩn bị chuyển head sang Node kế tiếp.
      //======================================================
      {
        activeCodeLine: 2,
        explanation:
          "Node đầu tiên đã được lưu lại bằng temp. Bước tiếp theo là cập nhật head để trỏ sang Node kế tiếp trong danh sách.",

        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x480",
              address: "0x200",
              pointsTo: "node0",
              row: 1,
              col: 2,
            },
          ],

          nodes: [
            {
              id: "node0",
              data: "100",
              nextValue: "0x500",
              address: "0x480",
              pointsTo: "node1",
              isFocused: true,
              isUpdated: false,
              row: 1,
              col: 1,
            },

            {
              id: "node1",
              data: "1",
              nextValue: "0x520",
              address: "0x500",
              pointsTo: "node2",
              isFocused: true,
              isUpdated: false,
              row: 1,
              col: 2,
            },

            {
              id: "node2",
              data: "2",
              nextValue: "0x540",
              address: "0x520",
              pointsTo: "node3",
              isFocused: false,
              isUpdated: false,
              row: 1,
              col: 3,
            },

            {
              id: "node3",
              data: "3",
              nextValue: "NULL",
              address: "0x540",
              pointsTo: "",
              isFocused: false,
              isUpdated: false,
              row: 3,
              col: 3,
            },
          ],
        },
      },

      //======================================================
      // STEP 4
      // EVENT : Update Head
      // CODE  : head = head->next;
      //======================================================
      {
        activeCodeLine: 2,
        explanation:
          "Head được cập nhật để trỏ sang Node kế tiếp. Kể từ thời điểm này, Node chứa giá trị 1 đã trở thành Node đầu tiên của danh sách.",

        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              isUpdated: true,
              row: 1,
              col: 2,
            },
          ],

          nodes: [
            {
              id: "node0",
              data: "100",
              nextValue: "0x500",
              address: "0x480",
              pointsTo: "node1",
              isFocused: false,
              isUpdated: false,
              row: 1,
              col: 1,
            },

            {
              id: "node1",
              data: "1",
              nextValue: "0x520",
              address: "0x500",
              pointsTo: "node2",
              isFocused: true,
              isUpdated: true,
              row: 1,
              col: 2,
            },

            {
              id: "node2",
              data: "2",
              nextValue: "0x540",
              address: "0x520",
              pointsTo: "node3",
              isFocused: false,
              isUpdated: false,
              row: 1,
              col: 3,
            },

            {
              id: "node3",
              data: "3",
              nextValue: "NULL",
              address: "0x540",
              pointsTo: "",
              isFocused: false,
              isUpdated: false,
              row: 3,
              col: 3,
            },
          ],
        },
      },

      //======================================================
      // STEP 5
      // EVENT : Verify New Head
      // CODE  : head = head->next;
      //
      // NOTE:
      // head đã chuyển sang Node kế tiếp.
      // node0 vẫn còn tồn tại trên Heap.
      //======================================================
      {
        activeCodeLine: 2,
        explanation:
          "Head đã trỏ sang Node mới. Tuy nhiên Node đầu tiên cũ vẫn còn tồn tại trên Heap vì lệnh delete vẫn chưa được thực hiện.",

        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              row: 1,
              col: 2,
            },
          ],

          nodes: [
            {
              id: "node0",
              data: "100",
              nextValue: "0x500",
              address: "0x480",
              pointsTo: "node1",
              isFocused: false,
              isUpdated: false,
              row: 1,
              col: 1,
            },

            {
              id: "node1",
              data: "1",
              nextValue: "0x520",
              address: "0x500",
              pointsTo: "node2",
              isFocused: true,
              isUpdated: false,
              row: 1,
              col: 2,
            },

            {
              id: "node2",
              data: "2",
              nextValue: "0x540",
              address: "0x520",
              pointsTo: "node3",
              isFocused: false,
              isUpdated: false,
              row: 1,
              col: 3,
            },

            {
              id: "node3",
              data: "3",
              nextValue: "NULL",
              address: "0x540",
              pointsTo: "",
              isFocused: false,
              isUpdated: false,
              row: 3,
              col: 3,
            },
          ],
        },
      },

      //======================================================
      // STEP 6
      // EVENT : Prepare Delete
      // CODE  : delete temp;
      //
      // NOTE:
      // Chuẩn bị giải phóng Node đầu tiên.
      //======================================================
      {
        activeCodeLine: 4,
        explanation:
          "Head đã được cập nhật thành công. Chương trình chuẩn bị giải phóng vùng nhớ của Node đầu tiên cũ.",

        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              row: 1,
              col: 2,
            },
          ],

          nodes: [
            {
              id: "node0",
              data: "100",
              nextValue: "0x500",
              address: "0x480",
              pointsTo: "node1",
              isFocused: true,
              isUpdated: false,
              row: 1,
              col: 1,
            },

            {
              id: "node1",
              data: "1",
              nextValue: "0x520",
              address: "0x500",
              pointsTo: "node2",
              isFocused: false,
              isUpdated: false,
              row: 1,
              col: 2,
            },

            {
              id: "node2",
              data: "2",
              nextValue: "0x540",
              address: "0x520",
              pointsTo: "node3",
              isFocused: false,
              isUpdated: false,
              row: 1,
              col: 3,
            },

            {
              id: "node3",
              data: "3",
              nextValue: "NULL",
              address: "0x540",
              pointsTo: "",
              isFocused: false,
              isUpdated: false,
              row: 3,
              col: 3,
            },
          ],
        },
      },

      //======================================================
      // STEP 7
      // EVENT : Delete Head Node
      // CODE  : delete temp;
      //
      // NOTE:
      // Node đầu tiên được giải phóng khỏi Heap.
      //======================================================
      {
        activeCodeLine: 4,
        explanation:
          "Lệnh delete được thực hiện. Node đầu tiên đã được giải phóng khỏi Heap và không còn tồn tại trong bộ nhớ.",

        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              row: 1,
              col: 2,
            },
          ],

          nodes: [
            {
              id: "node1",
              data: "1",
              nextValue: "0x520",
              address: "0x500",
              pointsTo: "node2",
              isFocused: true,
              isUpdated: true,
              row: 1,
              col: 2,
            },

            {
              id: "node2",
              data: "2",
              nextValue: "0x540",
              address: "0x520",
              pointsTo: "node3",
              isFocused: false,
              isUpdated: false,
              row: 1,
              col: 3,
            },

            {
              id: "node3",
              data: "3",
              nextValue: "NULL",
              address: "0x540",
              pointsTo: "",
              isFocused: false,
              isUpdated: false,
              row: 3,
              col: 3,
            },
          ],
        },
      },

      //======================================================
      // STEP 8
      // EVENT : Verify Memory
      // CODE  : delete temp;
      //
      // NOTE:
      // Node cũ đã bị xóa hoàn toàn.
      //======================================================
      {
        activeCodeLine: 4,
        explanation:
          "Sau khi delete hoàn tất, Node đầu tiên cũ đã biến mất khỏi Heap. Danh sách bây giờ bắt đầu từ Node chứa giá trị 1.",

        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              row: 1,
              col: 2,
            },
          ],

          nodes: [
            {
              id: "node1",
              data: "1",
              nextValue: "0x520",
              address: "0x500",
              pointsTo: "node2",
              isFocused: true,
              isUpdated: false,
              row: 1,
              col: 2,
            },

            {
              id: "node2",
              data: "2",
              nextValue: "0x540",
              address: "0x520",
              pointsTo: "node3",
              isFocused: false,
              isUpdated: false,
              row: 1,
              col: 3,
            },

            {
              id: "node3",
              data: "3",
              nextValue: "NULL",
              address: "0x540",
              pointsTo: "",
              isFocused: false,
              isUpdated: false,
              row: 3,
              col: 3,
            },
          ],
        },
      },
      //======================================================
      // STEP 9
      // EVENT : Delete Completed
      // CODE  : delete temp;
      //
      // NOTE:
      // Node đầu tiên đã được giải phóng.
      //======================================================
      {
        activeCodeLine: 4,
        explanation:
          "Lệnh delete đã hoàn tất. Node đầu tiên cũ đã được giải phóng khỏi Heap và danh sách hiện bắt đầu từ Node chứa giá trị 1.",

        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              row: 1,
              col: 2,
            },
          ],

          nodes: [
            {
              id: "node1",
              data: "1",
              nextValue: "0x520",
              address: "0x500",
              pointsTo: "node2",
              isFocused: true,
              isUpdated: false,
              row: 1,
              col: 2,
            },

            {
              id: "node2",
              data: "2",
              nextValue: "0x540",
              address: "0x520",
              pointsTo: "node3",
              isFocused: false,
              isUpdated: false,
              row: 1,
              col: 3,
            },

            {
              id: "node3",
              data: "3",
              nextValue: "NULL",
              address: "0x540",
              pointsTo: "",
              isFocused: false,
              isUpdated: false,
              row: 3,
              col: 3,
            },
          ],
        },
      },

      //======================================================
      // STEP 10
      // EVENT : Verify Linked List
      // CODE  : delete temp;
      //
      // NOTE:
      // Kiểm tra lại danh sách sau khi xóa.
      //======================================================
      {
        activeCodeLine: 4,
        explanation:
          "Danh sách đã được cập nhật thành công. Node chứa giá trị 1 trở thành Node đầu tiên, các Node phía sau vẫn giữ nguyên liên kết.",

        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              row: 1,
              col: 2,
            },
          ],

          nodes: [
            {
              id: "node1",
              data: "1",
              nextValue: "0x520",
              address: "0x500",
              pointsTo: "node2",
              isFocused: true,
              isUpdated: false,
              row: 1,
              col: 2,
            },

            {
              id: "node2",
              data: "2",
              nextValue: "0x540",
              address: "0x520",
              pointsTo: "node3",
              isFocused: false,
              isUpdated: false,
              row: 1,
              col: 3,
            },

            {
              id: "node3",
              data: "3",
              nextValue: "NULL",
              address: "0x540",
              pointsTo: "",
              isFocused: false,
              isUpdated: false,
              row: 3,
              col: 3,
            },
          ],
        },
      },

      //======================================================
      // STEP 11
      // EVENT : Lesson Summary
      // CODE  : End Of Algorithm
      //
      // NOTE:
      // Tổng kết thuật toán Delete Head.
      //======================================================
      {
        activeCodeLine: 4,
        explanation:
          "Thuật toán Delete Head hoàn tất. Đầu tiên cần lưu lại Node đầu tiên bằng temp, sau đó cập nhật head sang Node kế tiếp và cuối cùng mới giải phóng Node cũ bằng delete. Thực hiện đúng thứ tự này giúp tránh mất địa chỉ của Node cần giải phóng và đảm bảo bộ nhớ được quản lý an toàn.",

        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              isUpdated: true,
              row: 1,
              col: 2,
            },
          ],

          nodes: [
            {
              id: "node1",
              data: "1",
              nextValue: "0x520",
              address: "0x500",
              pointsTo: "node2",
              isFocused: true,
              isUpdated: true,
              row: 1,
              col: 2,
            },

            {
              id: "node2",
              data: "2",
              nextValue: "0x540",
              address: "0x520",
              pointsTo: "node3",
              isFocused: false,
              isUpdated: false,
              row: 1,
              col: 3,
            },

            {
              id: "node3",
              data: "3",
              nextValue: "NULL",
              address: "0x540",
              pointsTo: "",
              isFocused: false,
              isUpdated: false,
              row: 3,
              col: 3,
            },
          ],
        },
      },
    ],
  },

  //======================================================
  // LESSON 4.2 - DELETE TAIL
  //
  // Mục tiêu:
  // 1. Tìm Node cuối cùng.
  // 2. Tìm Node đứng trước Node cuối.
  // 3. Cập nhật next = NULL.
  // 4. Giải phóng Node cuối.
  //======================================================
  deleteTail: {
    codeLines: [
      "struct Node",
      "{",
      " int data;",
      " Node* next;",
      "",
      " Node(int val)",
      " {",
      "     data = val;",
      "     next = nullptr;",
      " }",
      "};",
      "",
      "void DeleteTail(Node*& head)",
      "{",
      " if(head == nullptr)",
      "     return;",
      "",
      " if(head->next == nullptr)",
      " {",
      "     delete head;",
      "     head = nullptr;",
      "     return;",
      " }",
      "",
      " Node* current = head;",
      "",
      " while(current->next->next != nullptr)",
      " {",
      "     current = current->next;",
      " }",
      "",
      " delete current->next;",
      " current->next = nullptr;",
      "}",
      "",
      "int main()",
      "{",
      " Node* head = CreateList();",
      "",
      " DeleteTail(head);",
      "",
      " return 0;",
      "}",
    ],

    steps: [
      //======================================================
      // STEP 1
      // EVENT : main()
      // CODE  : DeleteTail(head);
      //
      // NOTE:
      // Chuẩn bị gọi hàm DeleteTail.
      //======================================================
      {
        activeCodeLine: 38,

        explanation:
          "Danh sách đã được khởi tạo. Hàm DeleteTail(head) được gọi để xóa Node cuối cùng của danh sách.",

        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              row: 1,
              col: 2,
            },
          ],

          nodes: [
            {
              id: "node1",
              data: "1",
              nextValue: "0x520",
              address: "0x500",
              pointsTo: "node2",
              isFocused: true,
              isUpdated: false,
              row: 1,
              col: 2,
            },

            {
              id: "node2",
              data: "2",
              nextValue: "0x540",
              address: "0x520",
              pointsTo: "node3",
              isFocused: false,
              isUpdated: false,
              row: 1,
              col: 3,
            },

            {
              id: "node3",
              data: "3",
              nextValue: "NULL",
              address: "0x540",
              pointsTo: "",
              isFocused: false,
              isUpdated: false,
              row: 3,
              col: 3,
            },
          ],
        },
      },

      //======================================================
      // STEP 2
      // EVENT : Enter DeleteTail()
      // CODE  : void DeleteTail(...)
      //
      // NOTE:
      // Chương trình nhảy vào hàm.
      //======================================================
      {
        activeCodeLine: 13,

        explanation:
          "Chương trình chuyển quyền thực thi từ hàm main() sang hàm DeleteTail().",

        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              row: 1,
              col: 2,
            },
          ],

          nodes: [
            {
              id: "node1",
              data: "1",
              nextValue: "0x520",
              address: "0x500",
              pointsTo: "node2",
              isFocused: true,
              isUpdated: false,
              row: 1,
              col: 2,
            },

            {
              id: "node2",
              data: "2",
              nextValue: "0x540",
              address: "0x520",
              pointsTo: "node3",
              isFocused: false,
              isUpdated: false,
              row: 1,
              col: 3,
            },

            {
              id: "node3",
              data: "3",
              nextValue: "NULL",
              address: "0x540",
              pointsTo: "",
              isFocused: false,
              isUpdated: false,
              row: 3,
              col: 3,
            },
          ],
        },
      },

      //======================================================
      // STEP 3
      // EVENT : Check Empty List
      // CODE  : if(head == nullptr)
      //======================================================
      {
        activeCodeLine: 15,

        explanation:
          "Kiểm tra danh sách có rỗng hay không. Vì head đang trỏ tới Node đầu tiên nên điều kiện sai và chương trình tiếp tục.",

        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              row: 1,
              col: 2,
            },
          ],

          nodes: [
            {
              id: "node1",
              data: "1",
              nextValue: "0x520",
              address: "0x500",
              pointsTo: "node2",
              isFocused: true,
              isUpdated: false,
              row: 1,
              col: 2,
            },

            {
              id: "node2",
              data: "2",
              nextValue: "0x540",
              address: "0x520",
              pointsTo: "node3",
              isFocused: false,
              isUpdated: false,
              row: 1,
              col: 3,
            },

            {
              id: "node3",
              data: "3",
              nextValue: "NULL",
              address: "0x540",
              pointsTo: "",
              isFocused: false,
              isUpdated: false,
              row: 3,
              col: 3,
            },
          ],
        },
      },

      //======================================================
      // STEP 4
      // EVENT : Check One Node
      // CODE  : if(head->next == nullptr)
      //======================================================
      {
        activeCodeLine: 18,

        explanation:
          "Kiểm tra danh sách chỉ có một Node hay không. Vì Node đầu tiên vẫn còn Node phía sau nên thuật toán sẽ chuyển sang bước tìm Node đứng trước Node cuối.",

        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              row: 1,
              col: 2,
            },
          ],

          nodes: [
            {
              id: "node1",
              data: "1",
              nextValue: "0x520",
              address: "0x500",
              pointsTo: "node2",
              isFocused: true,
              isUpdated: false,
              row: 1,
              col: 2,
            },

            {
              id: "node2",
              data: "2",
              nextValue: "0x540",
              address: "0x520",
              pointsTo: "node3",
              isFocused: false,
              isUpdated: false,
              row: 1,
              col: 3,
            },

            {
              id: "node3",
              data: "3",
              nextValue: "NULL",
              address: "0x540",
              pointsTo: "",
              isFocused: false,
              isUpdated: false,
              row: 3,
              col: 3,
            },
          ],
        },
      },

      //======================================================
      // STEP 5
      // EVENT : Create Current Pointer
      // CODE  : Node* current = head;
      //
      // NOTE:
      // current không render.
      // Bắt đầu duyệt từ Node đầu tiên.
      //======================================================
      {
        activeCodeLine: 25,

        explanation:
          "Con trỏ current được gán bằng head. Thuật toán bắt đầu duyệt danh sách để tìm Node đứng trước Node cuối cùng.",

        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              row: 1,
              col: 2,
            },
          ],

          nodes: [
            {
              id: "node1",
              data: "1",
              nextValue: "0x520",
              address: "0x500",
              pointsTo: "node2",
              isFocused: true,
              isUpdated: false,
              row: 1,
              col: 2,
            },

            {
              id: "node2",
              data: "2",
              nextValue: "0x540",
              address: "0x520",
              pointsTo: "node3",
              isFocused: false,
              isUpdated: false,
              row: 1,
              col: 3,
            },

            {
              id: "node3",
              data: "3",
              nextValue: "NULL",
              address: "0x540",
              pointsTo: "",
              isFocused: false,
              isUpdated: false,
              row: 3,
              col: 3,
            },
          ],
        },
      },

      //======================================================
      // STEP 6
      // EVENT : First While Check
      // CODE  : while(current->next->next != nullptr)
      //
      // NOTE:
      // Node1 còn một Node phía sau Node2.
      // Điều kiện đúng.
      //======================================================
      {
        activeCodeLine: 27,

        explanation:
          "Thuật toán kiểm tra current->next->next. Vì Node2 vẫn còn Node phía sau nên điều kiện đúng và current sẽ tiếp tục di chuyển.",

        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              row: 1,
              col: 2,
            },
          ],

          nodes: [
            {
              id: "node1",
              data: "1",
              nextValue: "0x520",
              address: "0x500",
              pointsTo: "node2",
              isFocused: true,
              isUpdated: false,
              row: 1,
              col: 2,
            },

            {
              id: "node2",
              data: "2",
              nextValue: "0x540",
              address: "0x520",
              pointsTo: "node3",
              isFocused: false,
              isUpdated: false,
              row: 1,
              col: 3,
            },

            {
              id: "node3",
              data: "3",
              nextValue: "NULL",
              address: "0x540",
              pointsTo: "",
              isFocused: false,
              isUpdated: false,
              row: 3,
              col: 3,
            },
          ],
        },
      },

      //======================================================
      // STEP 7
      // EVENT : Move Current
      // CODE  : current = current->next;
      //
      // NOTE:
      // Focus chuyển sang Node2.
      //======================================================
      {
        activeCodeLine: 29,

        explanation:
          "Current di chuyển sang Node kế tiếp. Node chứa giá trị 2 hiện là Node đang được kiểm tra.",

        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              row: 1,
              col: 2,
            },
          ],

          nodes: [
            {
              id: "node1",
              data: "1",
              nextValue: "0x520",
              address: "0x500",
              pointsTo: "node2",
              isFocused: false,
              isUpdated: false,
              row: 1,
              col: 2,
            },

            {
              id: "node2",
              data: "2",
              nextValue: "0x540",
              address: "0x520",
              pointsTo: "node3",
              isFocused: true,
              isUpdated: false,
              row: 1,
              col: 3,
            },

            {
              id: "node3",
              data: "3",
              nextValue: "NULL",
              address: "0x540",
              pointsTo: "",
              isFocused: false,
              isUpdated: false,
              row: 3,
              col: 3,
            },
          ],
        },
      },

      //======================================================
      // STEP 8
      // EVENT : Last Check
      // CODE  : while(current->next->next != nullptr)
      //
      // NOTE:
      // current->next là Node3.
      // Node3->next = NULL.
      // Điều kiện sai.
      //======================================================
      {
        activeCodeLine: 27,

        explanation:
          "Current hiện đang đứng trước Node cuối cùng. Vì current->next->next bằng NULL nên vòng lặp kết thúc.",

        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              row: 1,
              col: 2,
            },
          ],

          nodes: [
            {
              id: "node1",
              data: "1",
              nextValue: "0x520",
              address: "0x500",
              pointsTo: "node2",
              isFocused: false,
              isUpdated: false,
              row: 1,
              col: 2,
            },

            {
              id: "node2",
              data: "2",
              nextValue: "0x540",
              address: "0x520",
              pointsTo: "node3",
              isFocused: true,
              isUpdated: false,
              row: 1,
              col: 3,
            },

            {
              id: "node3",
              data: "3",
              nextValue: "NULL",
              address: "0x540",
              pointsTo: "",
              isFocused: false,
              isUpdated: false,
              row: 3,
              col: 3,
            },
          ],
        },
      },

      //======================================================
      // STEP 9
      // EVENT : Delete Last Node
      // CODE  : delete current->next;
      //
      // NOTE:
      // Giải phóng Node cuối cùng khỏi Heap.
      //======================================================
      {
        activeCodeLine: 32,

        explanation:
          "Node cuối cùng được giải phóng khỏi Heap. Tuy nhiên con trỏ next của Node hiện tại vẫn chưa được cập nhật nên vẫn còn giữ địa chỉ cũ.",

        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              row: 1,
              col: 2,
            },
          ],

          nodes: [
            {
              id: "node1",
              data: "1",
              nextValue: "0x520",
              address: "0x500",
              pointsTo: "node2",
              isFocused: false,
              isUpdated: false,
              row: 1,
              col: 2,
            },

            {
              id: "node2",
              data: "2",
              nextValue: "0x540",
              address: "0x520",
              pointsTo: "node3",
              isFocused: true,
              isUpdated: false,
              row: 1,
              col: 3,
            },

            // node3 đã được delete nên không còn hiển thị
          ],
        },
      },

      //======================================================
      // STEP 10
      // EVENT : Remove Dangling Pointer
      // CODE  : current->next = nullptr;
      //
      // NOTE:
      // Node2 trở thành Node cuối cùng.
      //======================================================
      {
        activeCodeLine: 33,

        explanation:
          "Sau khi Node cuối bị xóa, con trỏ next của Node hiện tại được cập nhật thành NULL để loại bỏ địa chỉ không còn hợp lệ.",

        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              row: 1,
              col: 2,
            },
          ],

          nodes: [
            {
              id: "node1",
              data: "1",
              nextValue: "0x520",
              address: "0x500",
              pointsTo: "node2",
              isFocused: false,
              isUpdated: false,
              row: 1,
              col: 2,
            },

            {
              id: "node2",
              data: "2",
              nextValue: "NULL",
              address: "0x520",
              pointsTo: "",
              isFocused: true,
              isUpdated: true,
              row: 1,
              col: 3,
            },
          ],
        },
      },

      //======================================================
      // STEP 11
      // EVENT : Return To main()
      // CODE  : }
      //
      // NOTE:
      // Hàm DeleteTail kết thúc.
      //======================================================
      {
        activeCodeLine: 34,

        explanation:
          "Hàm DeleteTail hoàn tất và trả quyền điều khiển về hàm main(). Danh sách hiện chỉ còn hai Node.",

        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              row: 1,
              col: 2,
            },
          ],

          nodes: [
            {
              id: "node1",
              data: "1",
              nextValue: "0x520",
              address: "0x500",
              pointsTo: "node2",
              isFocused: true,
              isUpdated: false,
              row: 1,
              col: 2,
            },

            {
              id: "node2",
              data: "2",
              nextValue: "NULL",
              address: "0x520",
              pointsTo: "",
              isFocused: false,
              isUpdated: false,
              row: 1,
              col: 3,
            },
          ],
        },
      },

      //======================================================
      // STEP 12
      // EVENT : Program Continues
      // CODE  : return 0;
      //
      // NOTE:
      // Quay về hàm main().
      //======================================================
      {
        activeCodeLine: 40,

        explanation:
          "Chương trình quay trở lại hàm main(). Thuật toán Delete Tail đã hoàn tất, Node cuối cùng được xóa thành công và danh sách vẫn giữ đúng cấu trúc liên kết.",

        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              isUpdated: true,
              row: 1,
              col: 2,
            },
          ],

          nodes: [
            {
              id: "node1",
              data: "1",
              nextValue: "0x520",
              address: "0x500",
              pointsTo: "node2",
              isFocused: true,
              isUpdated: true,
              row: 1,
              col: 2,
            },

            {
              id: "node2",
              data: "2",
              nextValue: "NULL",
              address: "0x520",
              pointsTo: "",
              isFocused: false,
              isUpdated: false,
              row: 1,
              col: 3,
            },
          ],
        },
      },
    ],
  },

  //======================================================
  // LESSON 4.3 - DELETE MIDDLE
  //
  // Mục tiêu:
  // 1. Tìm Node đứng trước Node cần xóa.
  // 2. Lưu Node cần xóa.
  // 3. Nối lại danh sách.
  // 4. Giải phóng Node.
  //======================================================
  deleteMiddle: {
    codeLines: [
      "void DeleteMiddle(Node*& head)",
      "{",
      " Node* current = head;",
      "",
      " while(current->next->data != 2)",
      " {",
      "     current = current->next;",
      " }",
      "",
      " Node* temp = current->next;",
      "",
      " current->next = temp->next;",
      "",
      " delete temp;",
      "}",
      "",
      "int main()",
      "{",
      " Node* head = CreateList();",
      "",
      " DeleteMiddle(head);",
      "",
      " return 0;",
      "}",
    ],

    steps: [
      //======================================================
      // STEP 1
      // EVENT : main()
      // CODE  : DeleteMiddle(head);
      //======================================================
      {
        activeCodeLine: 20,

        explanation:
          "Danh sách đã được khởi tạo. Hàm DeleteMiddle(head) được gọi để xóa Node có giá trị 2.",

        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              row: 1,
              col: 2,
            },
          ],

          nodes: [
            {
              id: "node1",
              data: "1",
              nextValue: "0x520",
              address: "0x500",
              pointsTo: "node2",
              isFocused: true,
              isUpdated: false,
              row: 1,
              col: 2,
            },

            {
              id: "node2",
              data: "2",
              nextValue: "0x540",
              address: "0x520",
              pointsTo: "node3",
              isFocused: false,
              isUpdated: false,
              row: 1,
              col: 3,
            },

            {
              id: "node3",
              data: "3",
              nextValue: "NULL",
              address: "0x540",
              pointsTo: "",
              isFocused: false,
              isUpdated: false,
              row: 3,
              col: 3,
            },
          ],
        },
      },

      //======================================================
      // STEP 2
      // EVENT : Enter DeleteMiddle()
      // CODE  : void DeleteMiddle(...)
      //======================================================
      {
        activeCodeLine: 0,

        explanation:
          "Chương trình chuyển quyền thực thi từ hàm main() sang hàm DeleteMiddle().",

        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              row: 1,
              col: 2,
            },
          ],

          nodes: [
            {
              id: "node1",
              data: "1",
              nextValue: "0x520",
              address: "0x500",
              pointsTo: "node2",
              isFocused: true,
              isUpdated: false,
              row: 1,
              col: 2,
            },

            {
              id: "node2",
              data: "2",
              nextValue: "0x540",
              address: "0x520",
              pointsTo: "node3",
              isFocused: false,
              isUpdated: false,
              row: 1,
              col: 3,
            },

            {
              id: "node3",
              data: "3",
              nextValue: "NULL",
              address: "0x540",
              pointsTo: "",
              isFocused: false,
              isUpdated: false,
              row: 3,
              col: 3,
            },
          ],
        },
      },

      //======================================================
      // STEP 3
      // EVENT : current = head
      // CODE  : Node* current = head;
      //
      // NOTE:
      // current không render.
      //======================================================
      {
        activeCodeLine: 2,

        explanation:
          "Con trỏ current được gán bằng head để bắt đầu tìm Node đứng trước Node cần xóa.",

        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              row: 1,
              col: 2,
            },
          ],

          nodes: [
            {
              id: "node1",
              data: "1",
              nextValue: "0x520",
              address: "0x500",
              pointsTo: "node2",
              isFocused: true,
              isUpdated: false,
              row: 1,
              col: 2,
            },

            {
              id: "node2",
              data: "2",
              nextValue: "0x540",
              address: "0x520",
              pointsTo: "node3",
              isFocused: false,
              isUpdated: false,
              row: 1,
              col: 3,
            },

            {
              id: "node3",
              data: "3",
              nextValue: "NULL",
              address: "0x540",
              pointsTo: "",
              isFocused: false,
              isUpdated: false,
              row: 3,
              col: 3,
            },
          ],
        },
      },

      //======================================================
      // STEP 4
      // EVENT : While Check
      // CODE  : while(current->next->data != 2)
      //======================================================
      {
        activeCodeLine: 4,

        explanation:
          "Thuật toán kiểm tra Node đứng sau current. Vì Node tiếp theo có giá trị bằng 2 nên đã tìm được vị trí cần xóa và vòng lặp kết thúc ngay.",

        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              row: 1,
              col: 2,
            },
          ],

          nodes: [
            {
              id: "node1",
              data: "1",
              nextValue: "0x520",
              address: "0x500",
              pointsTo: "node2",
              isFocused: true,
              isUpdated: false,
              row: 1,
              col: 2,
            },

            {
              id: "node2",
              data: "2",
              nextValue: "0x540",
              address: "0x520",
              pointsTo: "node3",
              isFocused: true,
              isUpdated: false,
              row: 1,
              col: 3,
            },

            {
              id: "node3",
              data: "3",
              nextValue: "NULL",
              address: "0x540",
              pointsTo: "",
              isFocused: false,
              isUpdated: false,
              row: 3,
              col: 3,
            },
          ],
        },
      },
      //======================================================
      // STEP 5
      // EVENT : Save Delete Node
      // CODE  : Node* temp = current->next;
      //
      // NOTE:
      // temp không render.
      // Node cần xóa được đánh dấu.
      //======================================================
      {
        activeCodeLine: 9,

        explanation:
          "Con trỏ temp lưu lại địa chỉ của Node cần xóa. Điều này giúp chương trình vẫn còn tham chiếu đến Node này sau khi danh sách được nối lại.",

        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              row: 1,
              col: 2,
            },
          ],

          nodes: [
            {
              id: "node1",
              data: "1",
              nextValue: "0x520",
              address: "0x500",
              pointsTo: "node2",
              isFocused: true,
              isUpdated: false,
              row: 1,
              col: 2,
            },

            {
              id: "node2",
              data: "2",
              nextValue: "0x540",
              address: "0x520",
              pointsTo: "node3",
              isFocused: true,
              isUpdated: true,
              row: 1,
              col: 3,
            },

            {
              id: "node3",
              data: "3",
              nextValue: "NULL",
              address: "0x540",
              pointsTo: "",
              isFocused: false,
              isUpdated: false,
              row: 3,
              col: 3,
            },
          ],
        },
      },

      //======================================================
      // STEP 6
      // EVENT : Link Around Delete Node
      // CODE  : current->next = temp->next;
      //
      // NOTE:
      // Node1 bỏ qua Node2 và nối trực tiếp tới Node3.
      //======================================================
      {
        activeCodeLine: 11,

        explanation:
          "Node đứng trước được nối trực tiếp với Node đứng sau. Lúc này danh sách đã bỏ qua Node chứa giá trị 2, nhưng Node này vẫn chưa được giải phóng khỏi Heap.",

        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              row: 1,
              col: 2,
            },
          ],

          nodes: [
            {
              id: "node1",
              data: "1",
              nextValue: "0x540",
              address: "0x500",
              pointsTo: "node3",
              isFocused: true,
              isUpdated: true,
              row: 1,
              col: 2,
            },

            {
              id: "node2",
              data: "2",
              nextValue: "0x540",
              address: "0x520",
              pointsTo: "node3",
              isFocused: true,
              isUpdated: false,
              row: 1,
              col: 3,
            },

            {
              id: "node3",
              data: "3",
              nextValue: "NULL",
              address: "0x540",
              pointsTo: "",
              isFocused: true,
              isUpdated: false,
              row: 3,
              col: 3,
            },
          ],
        },
      },

      //======================================================
      // STEP 7
      // EVENT : Verify New Link
      // CODE  : current->next = temp->next;
      //
      // NOTE:
      // Node2 không còn thuộc danh sách.
      //======================================================
      {
        activeCodeLine: 11,

        explanation:
          "Liên kết của danh sách đã được cập nhật thành công. Node chứa giá trị 2 không còn nằm trong danh sách liên kết, tuy nhiên nó vẫn còn tồn tại trên Heap và sẽ được giải phóng ở bước tiếp theo.",

        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              row: 1,
              col: 2,
            },
          ],

          nodes: [
            {
              id: "node1",
              data: "1",
              nextValue: "0x540",
              address: "0x500",
              pointsTo: "node3",
              isFocused: true,
              isUpdated: false,
              row: 1,
              col: 2,
            },

            {
              id: "node2",
              data: "2",
              nextValue: "0x540",
              address: "0x520",
              pointsTo: "node3",
              isFocused: false,
              isUpdated: false,
              row: 1,
              col: 3,
            },

            {
              id: "node3",
              data: "3",
              nextValue: "NULL",
              address: "0x540",
              pointsTo: "",
              isFocused: true,
              isUpdated: false,
              row: 3,
              col: 3,
            },
          ],
        },
      },

      //======================================================
      // STEP 8
      // EVENT : Prepare Delete
      // CODE  : delete temp;
      //
      // NOTE:
      // Chuẩn bị giải phóng Node2.
      //======================================================
      {
        activeCodeLine: 13,

        explanation:
          "Danh sách đã được nối lại hoàn chỉnh. Bước cuối cùng là giải phóng vùng nhớ của Node chứa giá trị 2 để tránh rò rỉ bộ nhớ.",

        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              row: 1,
              col: 2,
            },
          ],

          nodes: [
            {
              id: "node1",
              data: "1",
              nextValue: "0x540",
              address: "0x500",
              pointsTo: "node3",
              isFocused: false,
              isUpdated: false,
              row: 1,
              col: 2,
            },

            {
              id: "node2",
              data: "2",
              nextValue: "0x540",
              address: "0x520",
              pointsTo: "node3",
              isFocused: true,
              isUpdated: false,
              row: 1,
              col: 3,
            },

            {
              id: "node3",
              data: "3",
              nextValue: "NULL",
              address: "0x540",
              pointsTo: "",
              isFocused: false,
              isUpdated: false,
              row: 3,
              col: 3,
            },
          ],
        },
      },
      //======================================================
      // STEP 9
      // EVENT : Delete Middle Node
      // CODE  : delete temp;
      //
      // NOTE:
      // Giải phóng Node cần xóa khỏi Heap.
      //======================================================
      {
        activeCodeLine: 13,

        explanation:
          "Lệnh delete được thực hiện. Node chứa giá trị 2 được giải phóng khỏi Heap và không còn tồn tại trong bộ nhớ.",

        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              row: 1,
              col: 2,
            },
          ],

          nodes: [
            {
              id: "node1",
              data: "1",
              nextValue: "0x540",
              address: "0x500",
              pointsTo: "node3",
              isFocused: true,
              isUpdated: false,
              row: 1,
              col: 2,
            },

            {
              id: "node3",
              data: "3",
              nextValue: "NULL",
              address: "0x540",
              pointsTo: "",
              isFocused: true,
              isUpdated: false,
              row: 3,
              col: 3,
            },
          ],
        },
      },

      //======================================================
      // STEP 10
      // EVENT : Return To main()
      // CODE  : }
      //
      // NOTE:
      // Hàm DeleteMiddle kết thúc.
      //======================================================
      {
        activeCodeLine: 14,

        explanation:
          "Hàm DeleteMiddle hoàn tất và trả quyền điều khiển về hàm main(). Danh sách hiện chỉ còn hai Node được liên kết trực tiếp với nhau.",

        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              row: 1,
              col: 2,
            },
          ],

          nodes: [
            {
              id: "node1",
              data: "1",
              nextValue: "0x540",
              address: "0x500",
              pointsTo: "node3",
              isFocused: true,
              isUpdated: false,
              row: 1,
              col: 2,
            },

            {
              id: "node3",
              data: "3",
              nextValue: "NULL",
              address: "0x540",
              pointsTo: "",
              isFocused: false,
              isUpdated: false,
              row: 3,
              col: 3,
            },
          ],
        },
      },

      //======================================================
      // STEP 11
      // EVENT : Back To main()
      // CODE  : return 0;
      //
      // NOTE:
      // Chương trình tiếp tục trong main().
      //======================================================
      {
        activeCodeLine: 22,

        explanation:
          "Chương trình quay trở lại hàm main(). Thuật toán Delete Middle đã hoàn tất và danh sách vẫn giữ đúng cấu trúc sau khi xóa Node ở giữa.",

        memoryState: {
          pointers: [
            {
              name: "head",
              value: "0x500",
              address: "0x200",
              pointsTo: "node1",
              row: 1,
              col: 2,
              isUpdated: true,
            },
          ],

          nodes: [
            {
              id: "node1",
              data: "1",
              nextValue: "0x540",
              address: "0x500",
              pointsTo: "node3",
              isFocused: true,
              isUpdated: true,
              row: 1,
              col: 2,
            },

            {
              id: "node3",
              data: "3",
              nextValue: "NULL",
              address: "0x540",
              pointsTo: "",
              isFocused: false,
              isUpdated: false,
              row: 3,
              col: 3,
            },
          ],
        },
      },
    ],
  },

  //Chưa có dữ liệu
  reverseList: {
    codeLines: [],
    isLocked: true,
    steps: [
      {
        activeCodeLine: 0,

        explanation: "",

        memoryState: {
          pointers: [],

          nodes: [],
        },
      },
    ],
  },

  clearList: {
    isLocked: true,
    codeLines: [],

    steps: [
      {
        activeCodeLine: 0,

        explanation: "",

        memoryState: {
          pointers: [],

          nodes: [],
        },
      },
    ],
  },

  count: {
    isLocked: true,
    codeLines: [],
    steps: [
      {
        activeCodeLine: 0,

        explanation: "",

        memoryState: {
          pointers: [],

          nodes: [],
        },
      },
    ],
  },
  // Bạn có thể copy paste template này để làm thêm insertTail, deleteHead, deleteTail, traverse...
};
