class Solution {
  public:
    int findEquilibrium(vector<int> &arr) {
        // code here
        int total = 0;
        for(int i=0; i<arr.size(); i++){
            total += arr[i];
        }
        
        int left = 0;
        
        for(int i=1;i<arr.size(); i++){
            left+=arr[i-1];
            int right = total - left - arr[i];
            
            if(left == right){
                return i;
            }
        }
        return -1;
    }
};
