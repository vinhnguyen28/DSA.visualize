// =======================================
// POINTER DATA LOGIC
// =======================================

// Chứa toàn bộ dữ liệu mô phỏng, code, text giải thích.
const pointerLessonData = {
    codeLines: [
        "int main()",
        "{",
        "int x = 10;",
        "int* p;",
        "p = &x;",
        "*p = 20;",
        "return 0;",
        "}"
    ],
    // steps[] : mảng trong js bắt đầu từ 0
    steps: [
        {
            stepId: 0,
            activeCodeLine: 0, // "int x = 10;"
            explanation: null,
            memoryState: {
                variables: [],
                pointers: []
            }
        },
        {
            stepId: 0,
            activeCodeLine: 2, // "int x = 10;"
            explanation: "Cấp phát bộ nhớ cho biến x và lưu giá trị 10.",
            memoryState: {
                variables: [
                    { name: "x", value: "10", address: "0x100", type: "int" }
                ],
                pointers: []
            }
        },
        {
            stepId: 1,
            activeCodeLine: 3, // "int* p = &x;"
            explanation: "Tạo biến con trỏ p để lưu địa chỉ của một số nguyên.",
            memoryState: {
                variables: [
                    { name: "x", value: "10", address: "0x100", type: "int" }
                ],
                pointers: [
                    { name: "p", value: "???", address: "0x200", pointsTo: "x" }
                ]
            }
        },
        {
            stepId: 1,
            activeCodeLine: 4, // "int* p = &x;"
            explanation: "Lưu địa chỉ của x vào p, tạo liên kết từ p tới x.",
            memoryState: {
                variables: [
                    { name: "x", value: "10", address: "0x100", type: "int" }
                ],
                pointers: [
                    { name: "p", value: "0x100", address: "0x200", pointsTo: "x" }
                ]
            }
        },
        {
            stepId: 2,
            activeCodeLine: 5, // "*p = 20;"
            explanation: "Thông qua p, ghi đè giá trị tại địa chỉ của x thành 20.",
            memoryState: {
                variables: [
                    { name: "x", value: "20", address: "0x100", type: "int" }
                ],
                pointers: [
                    { name: "p", value: "0x100", address: "0x200", pointsTo: "x"}
                ]
            }
        },

        {
            stepId: 0,
            activeCodeLine: 6, // "*p = 20;"
            explanation: "Stack = delete",
            memoryState: {
                variables: [],
                pointers: []
            }
        }
    ]
};