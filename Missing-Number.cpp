class Solution {
public:
    int missingNumber(vector<int>& nums) {
        int x=nums.size();
        int totsum=x*(x+1)/2;
        int sum=0;
        for(int i=0;i<x;i++)
        {
            sum+=nums[i];
        }
        int a=totsum-sum;
        return a;
    }
};
