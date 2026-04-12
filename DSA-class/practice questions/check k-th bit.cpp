class Solution {
  public:
    bool checkKthBit(int n, int k) {
      //code here
        n = n>>k;
        if(n&1){
            return true;
        }else{
            return false;
        }
    }
};
