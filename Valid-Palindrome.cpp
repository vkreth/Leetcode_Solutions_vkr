class Solution {
public:
    bool isPalindrome(string s) {
        string m;
        for(char c:s)
        {
            if(isalnum(c))
            {
                m+=tolower(c);
            }
        }
        string x=m;
        reverse(x.begin(),x.end());
        return x==t;
    }
};
