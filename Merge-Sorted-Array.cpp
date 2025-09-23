class Solution {
public:
    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
        vector<int> nums1cpy(nums1.begin(), nums1.begin() + m);
        int p1=0;
        int p2=0;
        for(int i=0;i<m+n;i++)
        {
            if(p2>=n||(p1<m && nums1cpy[p1]<nums2[p2]))
            {
                nums1[i]=nums1cpy[p1];
                p1++;
            }
            else{
                nums1[i]=nums2[p2];
                p2++;
            
            }
        }
    }
};
