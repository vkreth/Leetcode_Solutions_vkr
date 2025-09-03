class Solution {
public:
    bool isPalindrome(int x) {
        string ori=to_string(x);
        string rev=string(ori.rbegin(),ori.rend());
        return ori==rev;
    }
};
