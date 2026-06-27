// =======================================
// POINTER DATA LOGIC
// =======================================

// Chứa toàn bộ dữ liệu mô phỏng, code, text giải thích.
const lessons = {
  // ===============================
  // ======= Con trỏ cơ bản ========
  // ===============================

  // ===========[1.1]===========
  pointer: {
    codeLines: ["int main()", "{", "   int* p;", "   return 0;", "}"],
    // steps[] : mảng trong js bắt đầu từ 0
    steps: [
      {
        activeCodeLine: 0,
        explanation: null,
        memoryState: {
          variables: [],
          pointers: [],
          heap: [],
        },
      },

      {
        activeCodeLine: 2, // "int* p;"
        explanation:
          "Chương trình tạo một biến con trỏ tên là p và p chưa trỏ đến bất kỳ vùng nhớ nào.",
        memoryState: {
          variables: [],
          pointers: [
            {
              name: "p",
              value: "",
              address: "0x200",
              pointsTo: "",
              row: 2,
              col: 1,
              center: true,
            },
          ],
          heap: [],
        },
      },
      {
        activeCodeLine: 3, // "return 0;"
        explanation: "Kết thúc hàm main, thu hồi bộ nhớ Stack.",
        memoryState: {
          variables: [],
          pointers: [],
          heap: [],
        },
      },
    ],
  },
  // ===========[1.2]===========
  AddressOperator: {
    codeLines: [
      "int main()",
      "{",
      "   int x = 10;",
      "   int* p;",
      "   p = &x;",
      "   return 0;",
      "}",
    ],
    steps: [
      {
        activeCodeLine: 0,
        explanation: null,
        memoryState: {
          variables: [],
          pointers: [],
          heap: [],
        },
      },
      {
        activeCodeLine: 2,
        explanation:
          "Tạo biến x trên vùng nhớ Stack và khởi tạo giá trị ban đầu là 10.",
        memoryState: {
          variables: [
            {
              name: "x",
              value: "10",
              address: "0x100",
              type: "int",
              row: 2,
              col: 1,
            },
          ],
          pointers: [],
          heap: [],
        },
      },
      {
        activeCodeLine: 3,
        explanation:
          "Tạo biến con trỏ p trên vùng nhớ Stack. Hiện tại p chưa được khởi tạo nên chưa trỏ đến vùng nhớ hợp lệ nào.",
        memoryState: {
          variables: [
            {
              name: "x",
              value: "10",
              address: "0x100",
              type: "int",
              row: 2,
              col: 1,
            },
          ],
          pointers: [
            {
              name: "p",
              value: "???",
              address: "0x200",
              pointsTo: "",
              row: 2,
              col: 2,
            },
          ],
          heap: [],
        },
      },
      {
        activeCodeLine: 4,
        explanation:
          "Gán địa chỉ của biến x cho con trỏ p. Từ thời điểm này, p trỏ đến ô nhớ của x.",
        memoryState: {
          variables: [
            {
              name: "x",
              value: "10",
              address: "0x100",
              type: "int",
              row: 2,
              col: 1,
            },
          ],
          pointers: [
            {
              name: "p",
              value: "0x100",
              address: "0x200",
              pointsTo: "x",
              isUpdated: true,
              row: 2,
              col: 2,
            },
          ],
          heap: [],
        },
      },
      {
        activeCodeLine: 5, // "*p = 20;"
        explanation: "Kết thúc hàm main, thu hồi bộ nhớ Stack.",
        memoryState: {
          variables: [],
          pointers: [],
          heap: [],
        },
      },
    ],
  },
  // ===========[1.3]===========
  Dereference: {
    codeLines: [
      "int main()",
      "{",
      "   int x = 10;",
      "   int* p;",
      "   p = &x;",
      "   *p = 20;",
      "   return 0;",
      "}",
    ],
    steps: [
      // "int main()"
      {
        activeCodeLine: 0,
        explanation: null,
        memoryState: {
          variables: [],
          pointers: [],
          heap: [],
        },
      },
      // "int x = 10;"
      {
        activeCodeLine: 2,
        explanation:
          "Tạo biến x trên vùng nhớ Stack và khởi tạo giá trị ban đầu là 10.",
        memoryState: {
          variables: [
            {
              name: "x",
              value: "10",
              address: "0x100",
              type: "int",
              row: 2,
              col: 1,
            },
          ],
          pointers: [],
          heap: [],
        },
      },
      // "int* p;"
      {
        activeCodeLine: 3,
        explanation:
          "Tạo biến con trỏ p trên vùng nhớ Stack. Hiện tại p chưa được khởi tạo nên chưa trỏ đến vùng nhớ hợp lệ nào.",
        memoryState: {
          variables: [
            {
              name: "x",
              value: "10",
              address: "0x100",
              type: "int",
              row: 2,
              col: 1,
            },
          ],
          pointers: [
            {
              name: "p",
              value: "???",
              address: "0x200",
              pointsTo: "",
              row: 2,
              col: 2,
            },
          ],
          heap: [],
        },
      },
      // "p = &x;"
      {
        activeCodeLine: 4,
        explanation:
          "Gán địa chỉ của biến x cho con trỏ p. Từ thời điểm này, p trỏ đến ô nhớ của x.",
        memoryState: {
          variables: [
            {
              name: "x",
              value: "10",
              address: "0x100",
              type: "int",
              row: 2,
              col: 1,
            },
          ],
          pointers: [
            {
              name: "p",
              value: "0x100",
              address: "0x200",
              pointsTo: "x",
              isUpdated: true,
              row: 2,
              col: 2,
            },
          ],
          heap: [],
        },
      },
      // "*p = 20;"
      {
        activeCodeLine: 5,
        explanation: "Thông qua p, ghi đè giá trị tại địa chỉ của x thành 20.",
        memoryState: {
          variables: [
            {
              name: "x",
              value: "20",
              address: "0x100",
              type: "int",
              isUpdated: true,
              row: 2,
              col: 1,
            },
          ],
          pointers: [
            {
              name: "p",
              value: "0x100",
              address: "0x200",
              pointsTo: "x",
              row: 2,
              col: 2,
            },
          ],
          heap: [],
        },
      },
      // "return 0;"
      {
        activeCodeLine: 6,
        explanation: "Kết thúc hàm main, thu hồi bộ nhớ Stack.",
        memoryState: {
          variables: [],
          pointers: [],
          heap: [],
        },
      },
    ],
  },
  // ===========[1.4]===========
  PointerAssignment: {
    codeLines: [
      "int main()",
      "{",
      "   int a = 5;",
      "   int b = 8;",
      "   int* p = &a;",
      "   p = &b;",
      "   return 0;",
      "}",
    ],
    steps: [
      {
        activeCodeLine: 0,
        explanation: null,
        memoryState: { variables: [], pointers: [], heap: [] },
      },
      {
        activeCodeLine: 2,
        explanation: "Tạo biến a trên vùng nhớ Stack và khởi tạo giá trị 5.",
        memoryState: {
          variables: [
            {
              name: "a",
              value: "5",
              address: "0x100",
              type: "int",
              row: 1,
              col: 1,
            },
          ],
          pointers: [],
          heap: [],
        },
      },
      {
        activeCodeLine: 3,
        explanation: "Tạo biến b trên vùng nhớ Stack và khởi tạo giá trị 8.",
        memoryState: {
          variables: [
            {
              name: "a",
              value: "5",
              address: "0x100",
              type: "int",
              row: 1,
              col: 1,
            },
            {
              name: "b",
              value: "8",
              address: "0x400",
              type: "int",
              row: 1,
              col: 2,
            },
          ],
          pointers: [],
          heap: [],
        },
      },
      {
        activeCodeLine: 4,
        explanation:
          "Tạo con trỏ p trên Stack và gán địa chỉ của a. Lúc này p đang trỏ đến a.",
        memoryState: {
          variables: [
            {
              name: "a",
              value: "5",
              address: "0x100",
              type: "int",
              row: 1,
              col: 1,
            },
            {
              name: "b",
              value: "8",
              address: "0x400",
              type: "int",
              row: 1,
              col: 2,
            },
          ],
          pointers: [
            {
              name: "p",
              value: "0x100",
              address: "0x200",
              pointsTo: "a",
              isUpdated: true,
              row: 3,
              col: 1,
              center: true,
            },
          ],
          heap: [],
        },
      },
      {
        activeCodeLine: 5,
        explanation:
          "Cập nhật p để lưu địa chỉ của b. Từ thời điểm này, p không còn trỏ đến a mà chuyển sang trỏ đến b.",
        memoryState: {
          variables: [
            {
              name: "a",
              value: "5",
              address: "0x100",
              type: "int",
              row: 1,
              col: 1,
            },
            {
              name: "b",
              value: "8",
              address: "0x400",
              type: "int",
              row: 1,
              col: 2,
            },
          ],
          pointers: [
            {
              name: "p",
              value: "0x400",
              address: "0x200",
              pointsTo: "b",
              isUpdated: true,
              row: 3,
              col: 1,
              center: true,
            },
          ],
          heap: [],
        },
      },
      {
        activeCodeLine: 6,
        explanation:
          "a và b vẫn giữ nguyên giá trị. Chỉ có địa chỉ lưu trong p thay đổi từ địa chỉ của a sang địa chỉ của b.",
        memoryState: { variables: [], pointers: [], heap: [] },
      },
    ],
  },

  // ===========[1.5]===========
  NullPointer: {
    codeLines: [
      "int main ()",
      "{",
      "   int* p;",
      "   p = nullptr;",
      "   return 0;",
      "}",
    ],
    steps: [
      {
        activeCodeLine: 0,
        explanation: null,
        memoryState: {
          variables: [],
          pointers: [],
          heap: [],
        },
      },
      // int* p;
      {
        activeCodeLine: 2,
        explanation:
          "Tạo biến con trỏ p trên vùng nhớ Stack. Ban đầu p chưa được khởi tạo nên chưa trỏ đến vùng nhớ hợp lệ nào.",
        memoryState: {
          variables: [],
          pointers: [
            {
              name: "p",
              value: "???",
              address: "0x200",
              pointsTo: "",
              row: 2,
              col: 1,
              center: true,
            },
          ],
          heap: [],
        },
      },
      // p = nullptr
      {
        activeCodeLine: 3, // "p = nullptr"
        explanation:
          "Gán nullptr cho p, cho biết con trỏ không trỏ đến bất kỳ vùng nhớ nào.",
        memoryState: {
          variables: [],
          pointers: [
            {
              name: "p",
              value: "NULL",
              address: "0x200",
              pointsTo: "",
              isUpdated: true,
              row: 2,
              col: 1,
              center: true,
            },
          ],
          heap: [],
        },
      },
      // return 0;
      {
        activeCodeLine: 4,
        explanation:
          "p có giá trị nullptr, giúp tránh việc con trỏ chứa địa chỉ không xác định và an toàn hơn khi kiểm tra trước khi sử dụng.",
        memoryState: {
          variables: [],
          pointers: [],
          heap: [],
        },
      },
    ],
  },

  // ===========[1.6]===========
  PointertoPointer: {
    codeLines: [
      "int main ()",
      "{",
      "   int value = 10;",
      "   int* p = &value;",
      "   int** pp = &p;",
      "   *p = 20;",
      "   return 0;",
      "}",
    ],
    steps: [
      {
        activeCodeLine: 0,
        explanation: null,
        memoryState: {
          variables: [],
          pointers: [],
          heap: [],
        },
      },
      // int value = 10;
      {
        activeCodeLine: 2,
        explanation:
          "Tạo biến value trên vùng nhớ Stack và khởi tạo giá trị 10.",
        memoryState: {
          variables: [
            {
              name: "value",
              value: "10",
              address: "0x100",
              type: "int",
              row: 1,
              col: 1,
            },
          ],
          pointers: [],
          heap: [],
        },
      },
      // int* p = &value;
      {
        activeCodeLine: 3,
        explanation:
          "Tạo con trỏ p trên Stack và gán địa chỉ của value. Lúc này p trỏ đến value.",
        memoryState: {
          variables: [
            {
              name: "value",
              value: "10",
              address: "0x100",
              type: "int",
              row: 1,
              col: 1,
            },
          ],
          pointers: [
            {
              name: "p",
              value: "0x100",
              address: "0x200",
              pointsTo: "value",
              isUpdated: true,
              row: 1,
              col: 2,
            },
          ],
          heap: [],
        },
      },
      // int** pp = &p;
      {
        activeCodeLine: 4,
        explanation:
          "Tạo con trỏ cấp 2 pp trên Stack và gán địa chỉ của p. Lúc này pp trỏ đến p.",
        memoryState: {
          variables: [
            {
              name: "value",
              value: "10",
              address: "0x100",
              type: "int",
              row: 1,
              col: 1,
            },
          ],
          pointers: [
            {
              name: "p",
              value: "0x100",
              address: "0x200",
              pointsTo: "value",
              row: 1,
              col: 2,
            },
            {
              name: "pp",
              value: "0x200",
              address: "0x500",
              pointsTo: "p",
              isUpdated: true,
              row: 3,
              col: 2,
            },
          ],
          heap: [],
        },
      },
      // *p = 20;
      {
        activeCodeLine: 5,
        explanation:
          "Ghi giá trị 20 vào vùng nhớ mà p đang trỏ tới, nên giá trị của value được cập nhật từ 10 thành 20.",
        memoryState: {
          variables: [
            {
              name: "value",
              value: "20",
              address: "0x100",
              type: "int",
              isUpdated: true,
              row: 1,
              col: 1,
            },
          ],
          pointers: [
            {
              name: "p",
              value: "0x100",
              address: "0x200",
              pointsTo: "value",
              row: 1,
              col: 2,
            },
            {
              name: "pp",
              value: "0x200",
              address: "0x500",
              pointsTo: "p",
              row: 3,
              col: 2,
            },
          ],
          heap: [],
        },
      },
      // return 0;
      {
        activeCodeLine: 6,
        explanation: "Kết thúc hàm main, thu hồi bộ nhớ Stack.",
        memoryState: {
          variables: [],
          pointers: [],
          heap: [],
        },
      },
    ],
  },
  // ===============================
  // ======== cấp phát động=========
  // ===============================

  // ===========[2.1]===========
  new: {
    codeLines: [
      "int main()",
      "{",
      "   int* p;",
      "   p = new int;",
      "   *p = 10;",
      "   delete p;",
      "   return 0;",
      "}",
    ],
    steps: [
      {
        activeCodeLine: 0, // "int main()"
        explanation: null,
        memoryState: { variables: [], pointers: [], heap: [] },
      },
      // int* p;
      {
        activeCodeLine: 2,
        explanation:
          "Tạo biến con trỏ p trên vùng nhớ Stack. Ban đầu p chưa trỏ đến vùng nhớ hợp lệ nào.",
        memoryState: {
          variables: [],
          pointers: [
            {
              name: "p",
              value: "???",
              address: "0x200",
              pointsTo: "",
              row: 1,
              col: 1,
              center: true,
            },
          ],
          heap: [],
        },
      },
      // p = new int;
      {
        activeCodeLine: 3,
        explanation:
          "Cấp phát một ô nhớ kiểu int trên vùng nhớ Heap và gán địa chỉ của ô nhớ đó cho p.",
        memoryState: {
          variables: [],
          pointers: [
            {
              name: "p",
              value: "0x500",
              address: "0x200",
              pointsTo: "dyn1",
              row: 1,
              col: 1,
              center: true,
            },
          ],
          heap: [
            {
              name: "dyn1",
              type: "int",
              value: "???",
              address: "0x500",
              row: 2,
              col: 1,
            },
          ],
        },
      },
      // *p = 10;
      {
        activeCodeLine: 4,
        explanation: "Ghi giá trị 10 vào vùng nhớ trên Heap mà p đang trỏ tới.",
        memoryState: {
          variables: [],
          pointers: [
            {
              name: "p",
              value: "0x500",
              address: "0x200",
              pointsTo: "dyn1",
              row: 1,
              col: 1,
              center: true,
            },
          ],
          heap: [
            {
              name: "dyn1",
              type: "int",
              value: "10",
              address: "0x500",
              isUpdated: true,
              row: 2,
              col: 1,
            },
          ],
        },
      },
      // "delete p;"
      {
        activeCodeLine: 5,
        explanation:
          "Thu hồi vùng nhớ trên Heap. Tuy nhiên, p vẫn còn lưu địa chỉ cũ (trở thành Dangling Pointer).",
        memoryState: {
          variables: [],
          pointers: [
            {
              name: "p",
              value: "0x500",
              address: "0x200",
              pointsTo: "",
              row: 1,
              col: 1,
              center: true,
            },
          ],
          heap: [
            {
              name: "",
              type: "int",
              value: "???",
              address: "???",
              row: 2,
              col: 1,
            },
          ],
        },
      },
      // "return 0;"
      {
        activeCodeLine: 6,
        explanation: "Kết thúc hàm main, thu hồi bộ nhớ Stack.",
        memoryState: { variables: [], pointers: [], heap: [] },
      },
    ],
  },

  // ===========[2.2]===========
  delete: {
    codeLines: [
      "int main()",
      "{",
      "   int* p = nullptr;",
      "   p = new int(10);",
      "   delete p;",
      "   return 0;",
      "}",
    ],
    steps: [
      // "int main()"
      {
        activeCodeLine: 0,
        explanation: null,
        memoryState: { variables: [], pointers: [], heap: [] },
      },
      {
        // "int* p = nullptn"
        activeCodeLine: 2,
        explanation:
          "Khởi tạo con trỏ p trong Stack. Giá trị ban đầu là rác (chưa trỏ đi đâu).",
        memoryState: {
          variables: [],
          pointers: [
            {
              name: "p",
              value: "0x000",
              address: "0x200",
              pointsTo: "",
              isUpdated: true,
              row: 1,
              col: 1,
            },
          ],
          heap: [],
        },
      },
      // "*p = new int(10);"
      {
        activeCodeLine: 3,
        explanation:
          "Cấp phát một ô nhớ kiểu int trên vùng nhớ Heap, khởi tạo giá trị 10 và gán địa chỉ của ô nhớ đó cho p.",
        memoryState: {
          variables: [],
          pointers: [
            {
              name: "p",
              value: "0x500",
              address: "0x200",
              pointsTo: "no-name",
              row: 1,
              col: 1,
            },
          ],
          heap: [
            {
              name: "no-name",
              type: "int",
              value: "10",
              address: "0x500",
              row: 2,
              col: 1,
            },
          ],
        },
      },
      // delete p;
      {
        activeCodeLine: 4,
        explanation:
          "Giải phóng vùng nhớ trên Heap mà p đang trỏ tới. p vẫn giữ địa chỉ cũ nên trở thành Dangling Pointer.",
        memoryState: {
          variables: [],
          pointers: [
            {
              name: "p",
              value: "0x500",
              address: "0x200",
              pointsTo: "",
              row: 1,
              col: 1,
            },
          ],
          heap: [
            {
              name: "???",
              type: "int",
              value: "",
              address: "",
              row: 2,
              col: 1,
            },
          ],
        },
      },
      // "return 0;"
      {
        activeCodeLine: 5,
        explanation: "Kết thúc hàm main, thu hồi bộ nhớ Stack.",
        memoryState: { variables: [], pointers: [], heap: [] },
      },
    ],
  },

  // ===========[2.3]===========
  MemoryLeak: {
    codeLines: [
      "int main()",
      "{",
      "   int* p = new int(10);",
      "   p = nullptr;",
      "   return 0;",
      "}",
    ],
    steps: [
      // int main()
      {
        activeCodeLine: 0,
        explanation: null,
        memoryState: { variables: [], pointers: [], heap: [] },
      },

      // int* p = new int(10);
      {
        activeCodeLine: 2,
        explanation:
          "Tạo con trỏ p trên Stack, cấp phát một ô nhớ kiểu int trên Heap với giá trị 10 và gán địa chỉ của ô nhớ đó cho p",
        memoryState: {
          variables: [],
          pointers: [
            {
              name: "p",
              value: "0x500",
              address: "0x200",
              pointsTo: "?",
              row: 1,
              col: 1,
            },
          ],
          heap: [
            {
              name: "?",
              type: "int",
              value: "10",
              address: "0x500",
              row: 2,
              col: 1,
            },
          ],
        },
      },

      // p = nullptr;
      {
        activeCodeLine: 3,
        explanation:
          "Gán nullptr cho p, làm mất địa chỉ của vùng nhớ trên Heap mà p đang quản lý.",
        memoryState: {
          variables: [],
          pointers: [
            {
              name: "p",
              value: "0x000",
              address: "0x200",
              pointsTo: "",
              row: 1,
              col: 1,
              center: true,
            },
          ],
          heap: [
            {
              name: "?",
              type: "int",
              value: "10",
              address: "0x500",
              row: 2,
              col: 1,
            },
          ],
        },
      },
      // return 0;
      {
        activeCodeLine: 4,
        explanation:
          "Vùng nhớ trên Heap vẫn tồn tại nhưng không còn con trỏ nào trỏ tới nên không thể giải phóng bằng delete. Đây là Memory Leak (rò rỉ bộ nhớ).",
        memoryState: {
          variables: [],
          pointers: [],
          heap: [
            {
              name: "?",
              type: "int",
              value: "10",
              address: "0x500",
              row: 2,
              col: 1,
            },
          ],
        },
      },
    ],
  },

  // ===========[2.4]===========
  DanglingPointer: {
    codeLines: [
      "int main()",
      "{",
      "   int* p = new int(10);",
      "   delete p;",
      "   return 0;",
      "}",
    ],
    steps: [
      // int main()
      {
        activeCodeLine: 0,
        explanation: null,
        memoryState: { variables: [], pointers: [], heap: [] },
      },

      // int* p = new int(10);
      {
        activeCodeLine: 2,
        explanation:
          "Tạo con trỏ p trên Stack, cấp phát một ô nhớ kiểu int trên Heap với giá trị 10 và gán địa chỉ của ô nhớ đó cho p.",
        memoryState: {
          variables: [],
          pointers: [
            {
              name: "p",
              value: "0x500",
              address: "0x200",
              pointsTo: "?",
              row: 1,
              col: 1,
              center: true,
            },
          ],
          heap: [
            {
              name: "?",
              type: "int",
              value: "10",
              address: "0x500",
              row: 2,
              col: 1,
            },
          ],
        },
      },

      // delete p;
      {
        activeCodeLine: 3,
        explanation:
          "Giải phóng vùng nhớ trên Heap mà p đang trỏ tới. Tuy nhiên, p vẫn giữ địa chỉ cũ.",
        memoryState: {
          variables: [],
          pointers: [
            {
              name: "p",
              value: "0x500",
              address: "0x200",
              pointsTo: "",
              row: 1,
              col: 1,
              center: true,
            },
          ],
          heap: [
            {
              name: "?",
              type: "",
              value: "Released Memory",
              address: "?",
              row: 2,
              col: 1,
            },
          ],
        },
      },

      // "return 0;"
      {
        activeCodeLine: 4,
        explanation:
          "Vùng nhớ trên Heap đã được giải phóng, nhưng p vẫn chứa địa chỉ của vùng nhớ đó. Lúc này p là Dangling Pointer và không được phép truy cập bằng *p.",
        memoryState: { variables: [], pointers: [], heap: [] },
      },
    ],
  },
};
