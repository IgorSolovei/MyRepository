function signUp(userName, password) {
   let pass = password;
   return {
      userName,
      signIn: function (newPassword) {
         if (newPassword === pass) {
            return `Sign in success for ${userName}`;
         };
         return 'Password is incorrect';
      },
   };
}



let user = signUp("billy", "qwerty");
console.log(user.signIn("a"));
console.log(user.signIn("qwerty"));

