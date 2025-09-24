class Solution {
public:
    int findMaxConsecutiveOnes(vector<int>& nums) {
        int max_count=0;
        int present_count=0;
        for(int i=0;i<nums.size();i++)
        {
            //int present_count=0;
            if(nums[i]==1)
            {
                present_count++;
            }else
            {
                max_count=max(max_count,present_count);
                present_count=0;
            }
        }
        return max(max_count,present_count);
    }
};
