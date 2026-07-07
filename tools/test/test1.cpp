// =====================================================
// Chương trình minh họa TOÀN BỘ cú pháp của MiniCpp.g4
// (Struct, Pointer, New/Delete, Array, Function, Control flow)
// =====================================================

/* Struct dùng để dựng Linked List */
struct Node {
    int data;
    Node* next;
};

/* Hàm tạo node mới -> thể hiện: pointer, new, ->, return */
Node* createNode(int value) {
    Node* newNode = new Node;
    newNode->data = value;
    newNode->next = nullptr;
    return newNode;
}

/* Chèn node vào cuối danh sách -> thể hiện: while, so sánh, -> */
void insertAtEnd(Node* head, int value) {
    Node* current = head;
    while (current->next != nullptr) {
        current = current->next;
    }
    current->next = createNode(value);
}

/* Tính tổng mảng -> thể hiện: for, mảng, ++, phép toán số học */
int sumArray(int* arr, int size) {
    int total = 0;
    for (int i = 0; i < size; i++) {
        total = total + arr[i];
    }
    return total;
}

/* Kiểm tra điều kiện -> thể hiện: if/else, &&, ||, !, so sánh */
bool checkRange(int x, int minVal, int maxVal) {
    if (x >= minVal && x <= maxVal) {
        return true;
    } else {
        return false;
    }
}

int main() {
    // ---- Khai báo biến các kiểu cơ bản ----
    int a = 10;
    double b = 3.14;
    float c = 2.5;
    bool flag = true;
    char letter;
    string name = "Vinh";

    // ---- Con trỏ: address-of (&) và dereference (*) ----
    int x = 5;
    int* p = &x;
    *p = 20;

    // ---- Mảng và chỉ số ----
    int numbers[5];
    numbers[0] = 1;
    numbers[1] = 2;
    numbers[2] = 3;
    numbers[3] = 4;
    numbers[4] = 5;

    int total = sumArray(numbers, 5);

    // ---- Vòng lặp for + toán tử tăng ----
    for (int i = 0; i < 5; i++) {
        numbers[i] = numbers[i] * 2;
    }

    // ---- Vòng lặp while ----
    int count = 0;
    while (count < 3) {
        count = count + 1;
    }

    // ---- If / else lồng nhau ----
    if (total > 10) {
        if (flag == true) {
            total = total - 1;
        }
    } else {
        total = 0;
    }

    // ---- Toán tử logic ----
    bool valid = checkRange(a, 0, 100) && !flag;
    bool either = (a > 5) || (b < 1.0);

    // ---- Linked List: tạo và chèn node ----
    Node* head = createNode(1);
    insertAtEnd(head, 2);
    insertAtEnd(head, 3);

    // ---- Duyệt danh sách liên kết ----
    Node* current = head;
    while (current != nullptr) {
        current = current->next;
    }

    // ---- Giải phóng bộ nhớ (delete) ----
    delete p;
    Node* temp = head;
    while (temp != nullptr) {
        Node* nextNode = temp->next;
        delete temp;
        temp = nextNode;
    }

    return 0;
}
