// =======================================
// POINTER DATA LOGIC
// =======================================

// Chứa toàn bộ dữ liệu mô phỏng, code, text giải thích.
const lessons = {
  // ===============================
  // ======= Con trỏ cơ bản ========
  // ===============================

  pointer: {
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
    // steps[] : mảng trong js bắt đầu từ 0
    steps: [
      {
        activeCodeLine: 0, // "int x = 10;"
        explanation: null,
        memoryState: {
          variables: [],
          pointers: [],
          heap: [],
        },
      },
      {
        activeCodeLine: 2, // "int x = 10;"
        explanation: "Cấp phát bộ nhớ cho biến x và lưu giá trị 10.",
        memoryState: {
          variables: [
            { name: "x", value: "10", address: "0x100", type: "int" },
          ],
          pointers: [],
          heap: [],
        },
      },
      {
        activeCodeLine: 3, // "int* p = &x;"
        explanation: "Tạo biến con trỏ p để lưu địa chỉ của một số nguyên.",
        memoryState: {
          variables: [
            { name: "x", value: "10", address: "0x100", type: "int" },
          ],
          pointers: [
            { name: "p", value: "???", address: "0x200", pointsTo: "x" },
          ],
          heap: [],
        },
      },
      {
        activeCodeLine: 4, // "int* p = &x;"
        explanation: "Lưu địa chỉ của x vào p, tạo liên kết từ p tới x.",
        memoryState: {
          variables: [
            { name: "x", value: "10", address: "0x100", type: "int" },
          ],
          pointers: [
            { name: "p", value: "0x100", address: "0x200", pointsTo: "x" },
          ],
          heap: [],
        },
      },
      {
        activeCodeLine: 5, // "*p = 20;"
        explanation: "Thông qua p, ghi đè giá trị tại địa chỉ của x thành 20.",
        memoryState: {
          variables: [
            {
              name: "x",
              value: "20",
              address: "0x100",
              type: "int",
              isUpdated: true,
            },
          ],
          pointers: [
            { name: "p", value: "0x100", address: "0x200", pointsTo: "x" },
          ],
          heap: [],
        },
      },

      {
        stepId: 0,
        activeCodeLine: 6, // "*p = 20;"
        explanation: "Stack = delete",
        memoryState: {
          variables: [],
          pointers: [],
          heap: [],
        },
      },
    ],
  },
  // ========================
  AddressOperator: {
    codeLines: [
      "int main()",
      "{",
      "   int x = 10;",
      "   int* p;",
      "   p = &x;",
      "   *p = 20;",
      "}",
    ],
    steps: [
      {
        activeCodeLine: 0, // "int x = 10;"
        explanation: null,
        memoryState: {
          variables: [],
          pointers: [],
          heap: [],
        },
      },
      {
        activeCodeLine: 2, // "int x = 10;"
        explanation: "Cấp phát bộ nhớ cho biến x và lưu giá trị 10.",
        memoryState: {
          variables: [
            { name: "x", value: "10", address: "0x100", type: "int" },
          ],
          pointers: [],
          heap: [],
        },
      },
      {
        activeCodeLine: 3, // "int* p = &x;"
        explanation: "Tạo biến con trỏ p để lưu địa chỉ của một số nguyên.",
        memoryState: {
          variables: [
            { name: "x", value: "10", address: "0x100", type: "int" },
          ],
          pointers: [
            { name: "p", value: "???", address: "0x200", pointsTo: "x" },
          ],
          heap: [],
        },
      },
      {
        activeCodeLine: 4, // "int* p = &x;"
        explanation: "Lưu địa chỉ của x vào p, tạo liên kết từ p tới x.",
        memoryState: {
          variables: [
            { name: "x", value: "10", address: "0x100", type: "int" },
          ],
          pointers: [
            { name: "p", value: "0x100", address: "0x200", pointsTo: "x" },
          ],
          heap: [],
        },
      },
      {
        activeCodeLine: 5, // "*p = 20;"
        explanation: "Thông qua p, ghi đè giá trị tại địa chỉ của x thành 20.",
        memoryState: {
          variables: [
            {
              name: "x",
              value: "20",
              address: "0x100",
              type: "int",
              isUpdated: true,
            },
          ],
          pointers: [
            { name: "p", value: "0x100", address: "0x200", pointsTo: "x" },
          ],
          heap: [],
        },
      },

      {
        stepId: 0,
        activeCodeLine: 6, // "*p = 20;"
        explanation: "Stack = delete",
        memoryState: {
          variables: [],
          pointers: [],
          heap: [],
        },
      },
    ],
  },
  // ========================
  Dereference: {
    codeLines: [
      "{",
      "   int x = 10;",
      "   int* p;",
      "   p = &x;",
      "   *p = 20;",
      "}",
    ],
    steps: [
      {
        activeCodeLine: 0, // "int x = 10;"
        explanation: null,
        memoryState: {
          variables: [],
          pointers: [],
          heap: [],
        },
      },
      {
        activeCodeLine: 2, // "int x = 10;"
        explanation: "Cấp phát bộ nhớ cho biến x và lưu giá trị 10.",
        memoryState: {
          variables: [
            { name: "x", value: "10", address: "0x100", type: "int" },
          ],
          pointers: [],
          heap: [],
        },
      },
      {
        activeCodeLine: 3, // "int* p = &x;"
        explanation: "Tạo biến con trỏ p để lưu địa chỉ của một số nguyên.",
        memoryState: {
          variables: [
            { name: "x", value: "10", address: "0x100", type: "int" },
          ],
          pointers: [
            { name: "p", value: "???", address: "0x200", pointsTo: "x" },
          ],
          heap: [],
        },
      },
      {
        activeCodeLine: 4, // "int* p = &x;"
        explanation: "Lưu địa chỉ của x vào p, tạo liên kết từ p tới x.",
        memoryState: {
          variables: [
            { name: "x", value: "10", address: "0x100", type: "int" },
          ],
          pointers: [
            { name: "p", value: "0x100", address: "0x200", pointsTo: "x" },
          ],
          heap: [],
        },
      },
      {
        activeCodeLine: 5, // "*p = 20;"
        explanation: "Thông qua p, ghi đè giá trị tại địa chỉ của x thành 20.",
        memoryState: {
          variables: [
            {
              name: "x",
              value: "20",
              address: "0x100",
              type: "int",
              isUpdated: true,
            },
          ],
          pointers: [
            { name: "p", value: "0x100", address: "0x200", pointsTo: "x" },
          ],
          heap: [],
        },
      },

      {
        stepId: 0,
        activeCodeLine: 6, // "*p = 20;"
        explanation: "Stack = delete",
        memoryState: {
          variables: [],
          pointers: [],
          heap: [],
        },
      },
    ],
  },
  // =============================
  PointerAssignment: {
    codeLines: ["{", "   int x = 10;", "   p = &x;", "   *p = 20;", "}"],
    steps: [
      {
        activeCodeLine: 0, // "int x = 10;"
        explanation: null,
        memoryState: {
          variables: [],
          pointers: [],
          heap: [],
        },
      },
      {
        activeCodeLine: 2, // "int x = 10;"
        explanation: "Cấp phát bộ nhớ cho biến x và lưu giá trị 10.",
        memoryState: {
          variables: [
            { name: "x", value: "10", address: "0x100", type: "int" },
          ],
          pointers: [],
          heap: [],
        },
      },
      {
        activeCodeLine: 3, // "int* p = &x;"
        explanation: "Tạo biến con trỏ p để lưu địa chỉ của một số nguyên.",
        memoryState: {
          variables: [
            { name: "x", value: "10", address: "0x100", type: "int" },
          ],
          pointers: [
            { name: "p", value: "???", address: "0x200", pointsTo: "x" },
          ],
          heap: [],
        },
      },
      {
        activeCodeLine: 4, // "int* p = &x;"
        explanation: "Lưu địa chỉ của x vào p, tạo liên kết từ p tới x.",
        memoryState: {
          variables: [
            { name: "x", value: "10", address: "0x100", type: "int" },
          ],
          pointers: [
            { name: "p", value: "0x100", address: "0x200", pointsTo: "x" },
          ],
          heap: [],
        },
      },
      {
        activeCodeLine: 5, // "*p = 20;"
        explanation: "Thông qua p, ghi đè giá trị tại địa chỉ của x thành 20.",
        memoryState: {
          variables: [
            {
              name: "x",
              value: "20",
              address: "0x100",
              type: "int",
              isUpdated: true,
            },
          ],
          pointers: [
            { name: "p", value: "0x100", address: "0x200", pointsTo: "x" },
          ],
          heap: [],
        },
      },

      {
        stepId: 0,
        activeCodeLine: 6, // "*p = 20;"
        explanation: "Stack = delete",
        memoryState: {
          variables: [],
          pointers: [],
          heap: [],
        },
      },
    ],
  },

  // ===================
  NullPointer: {
    codeLines: [
      "{",
      "   int x = 10;",
      "   int* p;",
      "   p = &x;",
      "   *p = 20;",
    ],
    steps: [
      {
        activeCodeLine: 0, // "int x = 10;"
        explanation: null,
        memoryState: {
          variables: [],
          pointers: [],
          heap: [],
        },
      },
      {
        activeCodeLine: 2, // "int x = 10;"
        explanation: "Cấp phát bộ nhớ cho biến x và lưu giá trị 10.",
        memoryState: {
          variables: [
            { name: "x", value: "10", address: "0x100", type: "int" },
          ],
          pointers: [],
          heap: [],
        },
      },
      {
        activeCodeLine: 3, // "int* p = &x;"
        explanation: "Tạo biến con trỏ p để lưu địa chỉ của một số nguyên.",
        memoryState: {
          variables: [
            { name: "x", value: "10", address: "0x100", type: "int" },
          ],
          pointers: [
            { name: "p", value: "???", address: "0x200", pointsTo: "x" },
          ],
          heap: [],
        },
      },
      {
        activeCodeLine: 4, // "int* p = &x;"
        explanation: "Lưu địa chỉ của x vào p, tạo liên kết từ p tới x.",
        memoryState: {
          variables: [
            { name: "x", value: "10", address: "0x100", type: "int" },
          ],
          pointers: [
            { name: "p", value: "0x100", address: "0x200", pointsTo: "x" },
          ],
          heap: [],
        },
      },
      {
        activeCodeLine: 5, // "*p = 20;"
        explanation: "Thông qua p, ghi đè giá trị tại địa chỉ của x thành 20.",
        memoryState: {
          variables: [
            {
              name: "x",
              value: "20",
              address: "0x100",
              type: "int",
              isUpdated: true,
            },
          ],
          pointers: [
            { name: "p", value: "0x100", address: "0x200", pointsTo: "x" },
          ],
          heap: [],
        },
      },

      {
        stepId: 0,
        activeCodeLine: 6, // "*p = 20;"
        explanation: "Stack = delete",
        memoryState: {
          variables: [],
          pointers: [],
          heap: [],
        },
      },
    ],
  },

  // ===================
  PointertoPointer: {
    codeLines: [
      "   int x = 10;",
      "   int* p;",
      "   p = &x;",
      "   *p = 20;",
      "}",
    ],
    steps: [
      {
        activeCodeLine: 0, // "int x = 10;"
        explanation: null,
        memoryState: {
          variables: [],
          pointers: [],
          heap: [],
        },
      },
      {
        activeCodeLine: 2, // "int x = 10;"
        explanation: "Cấp phát bộ nhớ cho biến x và lưu giá trị 10.",
        memoryState: {
          variables: [
            { name: "x", value: "10", address: "0x100", type: "int" },
          ],
          pointers: [],
          heap: [],
        },
      },
      {
        activeCodeLine: 3, // "int* p = &x;"
        explanation: "Tạo biến con trỏ p để lưu địa chỉ của một số nguyên.",
        memoryState: {
          variables: [
            { name: "x", value: "10", address: "0x100", type: "int" },
          ],
          pointers: [
            { name: "p", value: "???", address: "0x200", pointsTo: "x" },
          ],
          heap: [],
        },
      },
      {
        activeCodeLine: 4, // "int* p = &x;"
        explanation: "Lưu địa chỉ của x vào p, tạo liên kết từ p tới x.",
        memoryState: {
          variables: [
            { name: "x", value: "10", address: "0x100", type: "int" },
          ],
          pointers: [
            { name: "p", value: "0x100", address: "0x200", pointsTo: "x" },
          ],
          heap: [],
        },
      },
      {
        activeCodeLine: 5, // "*p = 20;"
        explanation: "Thông qua p, ghi đè giá trị tại địa chỉ của x thành 20.",
        memoryState: {
          variables: [
            {
              name: "x",
              value: "20",
              address: "0x100",
              type: "int",
              isUpdated: true,
            },
          ],
          pointers: [
            { name: "p", value: "0x100", address: "0x200", pointsTo: "x" },
          ],
          heap: [],
        },
      },

      {
        stepId: 0,
        activeCodeLine: 6, // "*p = 20;"
        explanation: "Stack = delete",
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
      {
        activeCodeLine: 2, // "int* p;"
        explanation:
          "Khởi tạo con trỏ p trong Stack. Giá trị ban đầu là rác (chưa trỏ đi đâu).",
        memoryState: {
          variables: [],
          pointers: [
            { name: "p", value: "???", address: "0x200", pointsTo: "" },
          ],
          heap: [],
        },
      },
      {
        activeCodeLine: 3, // "p = new int;"
        explanation:
          "Hệ điều hành cấp phát một vùng nhớ kiểu int trên Heap. Con trỏ p lưu địa chỉ của vùng nhớ này.",
        memoryState: {
          variables: [],
          pointers: [
            { name: "p", value: "0x500", address: "0x200", pointsTo: "dyn1" },
          ],
          heap: [{ name: "dyn1", type: "int", value: "???", address: "0x500" }],
        },
      },
      {
        activeCodeLine: 4, // "*p = 10;"
        explanation: "Ghi giá trị 10 vào vùng nhớ trên Heap mà p đang trỏ tới.",
        memoryState: {
          variables: [],
          pointers: [
            { name: "p", value: "0x500", address: "0x200", pointsTo: "dyn1" },
          ],
          heap: [{ name: "dyn1", type: "int", value: "10", address: "0x500" }],
        },
      },
      {
        activeCodeLine: 5, // "delete p;"
        explanation:
          "Thu hồi vùng nhớ trên Heap. Tuy nhiên, p vẫn còn lưu địa chỉ cũ (trở thành Dangling Pointer).",
        memoryState: {
          variables: [],
          pointers: [
            { name: "p", value: "0x500", address: "0x200", pointsTo: "dyn1" },
          ], // Mất điểm trỏ
          heap: [{ name: "dyn1", type: "int", value: "???", address: "???" }],
        },
      },
      {
        activeCodeLine: 6, // "return 0;"
        explanation: "Kết thúc hàm main, thu hồi bộ nhớ Stack.",
        memoryState: { variables: [], pointers: [], heap: [] },
      },
    ],
  },
};
