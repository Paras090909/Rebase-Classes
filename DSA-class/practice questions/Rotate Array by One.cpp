// User function Template for C++

class Solution {
  public:
    void rotate(vector<int> &arr) {
        // code here
        reverse(arr.begin(), arr.end());
        reverse(arr.begin()+1, arr.end());
    }
};
