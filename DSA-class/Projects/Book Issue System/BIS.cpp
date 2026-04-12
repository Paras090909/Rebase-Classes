#include <iostream>
using namespace std;


class Book {
public:
    int id;
    string title;
    string author;
    bool isIssued;

    void input() {
        cout << "Enter Book ID: ";
        cin >> id;
        cout << "Enter Title: ";
        cin >> title;
        cout << "Enter Author: ";
        cin >> author;
        isIssued = false;
    }

    void display() {
        cout << id  << title  << author << (isIssued ? "Issued" : "Available") << ")\n";
    }
};


class User {
public:
    int id;
    string name;
    Book* issuedBook; 

    void input() {
        cout << "Enter User ID: ";
        cin >> id;
        cout << "Enter Name: ";
        cin >> name;
        issuedBook = NULL;
    }

    void display() {
        cout << id  << name;
        if (issuedBook != NULL){
            cout << " (Book: " << issuedBook->title << ")";
        }
        cout << endl;
    }
};


int main() {
    Book books[10];
    User users[10];

    int bCount = 0, uCount = 0;
    int choice;
    cout << "\n1.Add Book  2.Add User  3.Issue  4.Return  5.Show Books  6.Show Users  7.Exit\n";
    cin >> choice;
    while (choice != 7) {

        if (choice == 1) {
            books[bCount].input();
            bCount++;
        }

        else if (choice == 2) {
            users[uCount].input();
            uCount++;
        }

        
        else if (choice == 3) {
            int bid, uid;
            cout << "Enter Book ID: ";
            cin >> bid;
            cout << "Enter User ID: ";
            cin >> uid;

            Book* b = NULL;
            User* u = NULL;

            for (int i = 0; i < bCount; i++) {
                if (books[i].id == bid)
                    b = &books[i];
            }

            for (int i = 0; i < uCount; i++) {
                if (users[i].id == uid)
                    u = &users[i];
            }

            if (b && u) {
                if (b->isIssued)
                    cout << "Book already issued\n";
                else if (u->issuedBook != NULL)
                    cout << "User already has a book\n";
                else {
                    b->isIssued = true;
                    u->issuedBook = b;
                    cout << "Book Issued\n";
                }
            } else {
                cout << "User or Book not found\n";
            }
        }

        else if (choice == 4) {
            int uid;
            cout << "Enter User ID: ";
            cin >> uid;

            for (int i = 0; i < uCount; i++) {
                if (users[i].id == uid) {
                    if (users[i].issuedBook == NULL) {
                        cout << "No book to return\n";
                    } else {
                        users[i].issuedBook->isIssued = false;
                        users[i].issuedBook = NULL;
                        cout << "Book Returned\n";
                    }
                }
            }
        }

        else if (choice == 5) {
            for (int i = 0; i < bCount; i++){
                books[i].display();
            }
        }

        else if (choice == 6) {
            for (int i = 0; i < uCount; i++){
                users[i].display();
            }
        }

        else if (choice == 7) break;
    }

    return 0;
}
