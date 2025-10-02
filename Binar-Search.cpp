class Solution {
public:
    int search(vector<int>& nums, int target) {
        int l=0;
        int r=nums.size()-1;
        while(r>=l)
        {
            int m=floor((l+r)/2);
            if(target==nums[m])
            {
                return m;
            }
            else if(target<nums[m])
            {
                r=m-1;
            }
            else{
                l=m+1;
            }
        }
        return -1;
    }
};
