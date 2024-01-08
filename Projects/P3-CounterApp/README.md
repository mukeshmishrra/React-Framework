# Counter App - Create by Mukesh Mishra 
Feature - there are two buttons where we can increase and decrease the 
value of a count.

i have created this app to boost my hooks knowledge.
useState : - this hooks is used to propagate/render the changes in the ui.

<img width="549" alt="counterApp" src="https://github.com/mukeshmishrra/React-Framework/assets/88608361/f2f27451-d52a-41be-b609-1d2c840b43cc">



Interview Question related to counter app
----------------------------------------
01. 

 const increase = () => {
    console.log("Clicked incr")
    counter = counter + 1;
    setCounter(counter); 
    setCounter(counter);
    setCounter(counter);
    setCounter(counter);
  
    // Ek sath agar multiple time call kre same function 
    // ko to v ye normally hi change hoga 
    // useState hamesa batch me update krta hai 
    // toh sochta hai ki yeh to sab toh hai ek bar me hi update krunga toh 
    // is wjh se normal chlega.

    but aisa hi feature implement krna pada toh ?? 🤔
    tab hamare pass callback feature hota hai setterFunction ke under.

   
  }


  increaseBtn pr click krne se output kya ayega ?

answer ==> 

    setCounter((c) => c+1);
    setCounter((c) => c+1);
    setCounter((c) => c+1);
    setCounter((c) => c+1);
  
  is tarah se hum data one by one increament krk ek bar me hi final data display kr skte hai.

  ---------------------------------------------------