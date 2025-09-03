class Solution {
public:
bool isaln(char c)
{
    if((c>='0' && c<='9')||(tolower(c)>='a' && tolower(c)<='z')){
        return true;
    }
    return false;
}
    bool isPalindrome(string s) {
        int s1=0, s2=s.length()-1;
        while(s1<s2){
            if(!isaln(s[s1])){
                s1++; continue;
            }
            if(!isaln(s[s2])){
                s2--; continue;
            }
            if(tolower(s[s1])!=tolower(s[s2])){
                return false;
            }
            s1++;s2--;
        }
        return true;
    }
};
