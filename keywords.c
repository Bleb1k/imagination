#include <stdio.h>
#include <stdlib.h>

// Define a structure
typedef struct MyStruct {
    int value;
} MyStruct;

// Enum definition
enum Status { SUCCESS, FAILURE };

// Function prototype
void exampleFunction(int);

int main(void) {
    // Variable declarations
    int localVar = 0; // 'auto' is implied for local variables
    static int staticVar = 2;
    volatile int volatileVar = 3;
    const int constVar = 4;

    // Pointers
    int *ptr = &localVar;
    void *voidPtr = NULL;

    // Arrays
    int array[5] = {0, 1, 2, 3, 4};

    // Union
    union {
        int intValue;
        float floatValue;
    } myUnion;

    // External variable declaration
    extern int externalVar;

    // If-else statement
    if (constVar > 0) {
        printf("constVar is positive\n");
    } else {
        printf("constVar is non-positive\n");
    }

    // Switch-case statement
    switch (staticVar) {
        case 0:
            printf("staticVar is zero\n");
            break;
        default:
            printf("staticVar is not zero\n");
            break;
    }

    // For loop
    for (int i = 0; i < 5; i++) {
        printf("Array element %d: %d\n", i, array[i]);
    }

    // While loop
    int j = 0;
    while (j < 5) {
        printf("While loop iteration: %d\n", j);
        j++;
    }

    // Do-while loop
    do {
        printf("Do-while loop iteration: %d\n", j);
        j--;
    } while (j > 0);

    // Function call
    exampleFunction(5);

    // Goto statement
    goto label;

label:
    printf("Reached label\n");

    // Return statement
    return EXIT_SUCCESS;
}

// Function definition
void exampleFunction(int param) {
    // Nested function (not using inline)
    void nestedFunction() {
        printf("Inside nestedFunction\n");
    }

    // Nested function call
    nestedFunction();

    // Break and continue statements
    for (int k = 0; k < 5; k++) {
        if (k == 3) {
            break;
        }
        if (k == 1) {
            continue;
        }
        printf("exampleFunction loop iteration: %d\n", k);
    }

    // Typedef usage
    MyStruct myStructInstance;
    myStructInstance.value = 10;
    printf("myStructInstance.value: %d\n", myStructInstance.value);

    // Enum usage
    enum Status status = SUCCESS;
    if (status == SUCCESS) {
        printf("Status is SUCCESS\n");
    } else {
        printf("Status is FAILURE\n");
    }
}
