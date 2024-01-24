# Password Generator Software
------------------------------------------------
This project will boost my hooks knowledge -
useEffect 
useRef
useCallback
-----------------------------------------------------------------------------------
                                01 useEffect Hook Introduction 
# Introduction - 
useEffect ek React hook hai jo hamare component ke behavior ko control karta hai jab wo render hota hai aur jab usme kuch badlav hota hai.

in detail explanation
--------------------
useEffect ek React hook hai jo hume component ke lifecycle events ke sath interact karne me madad karta hai. Ye hume side effects handle karne ka ek tareeka deta hai, jaise ki data fetching, subscriptions, ya DOM manipulations. Yeh ek important part hai functional components me, jahaan hum state ka use karte hain.

# Syntax 

useEffect(() => {
  // Code jo run hoga component ka render hone ke baad
  // Isme aap API calls, subscriptions, ya koi aur asynchronous kaam kar sakte hain
  // Cleanup code bhi yahaan likha ja sakta hai
  return () => {
    // Cleanup code jo component unmount hone par chalega
  };
}, [dependencies]);


# Example 

import React, { useState, useEffect } from 'react';

function ExampleComponent() {
  // State for storing data
  const [data, setData] = useState([]);

  // useEffect ka use data fetch karne ke liye
  useEffect(() => {
    // Ek async function banate hain jo data fetch karegi
    const fetchData = async () => {
      try {
        // API se data fetch karte hain
        const response = await fetch('https://api.example.com/data');
        const result = await response.json();
        
        // Fetch kiya gaya data ko state me set karte hain
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // fetchData ko call karte hain
    fetchData();

    // Cleanup function: Agar component unmount ho gaya toh isme cleanup code likh sakte hain
    return () => {
      // Cleanup code yahaan likhein (agar zarurat ho)
    };
  }, []); // Empty dependency array ensures that useEffect runs only once after initial render

  // JSX me data ko render karte hain
  return (
    <div>
      <h1>Data from API:</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ExampleComponent;

---------------------------------------------------------------------------------------

                            # 02 useRef Hook 

# Introduction
-------------------------
01 useRef ek react hook hai jo component me reference create krne ke liye use hota hai.
02 Ye reference un elements ya values ko point karta hai jo component ke lifecycle ke bahar rehte hain.
03 useRef ka use commonly DOM elements ko access karne, animations control karne, ya koi value ko persist karne ke liye hota hai.

# Syntax
------------------------
const myRef = useRef(initialValue);


# Example - 

import React, { useRef, useEffect } from 'react';

function ExampleComponent() {
  // useRef se ek reference create karte hain
  const myInputRef = useRef(null);

  useEffect(() => {
    // Component mount hone ke baad input element focus ho jayega
    myInputRef.current.focus();
  }, []);

  return (
    <div>
      {/* Input element ko useRef ke sath associate karte hain */}
      <input ref={myInputRef} type="text" />
      <p>Start typing, the input will be automatically focused.</p>
    </div>
  );
}

export default ExampleComponent;
----------------------------------------------------------------------------------------

                        03. useCallback Hook
# Introduction
-------------------
Jab aap ek function ko useCallback ke andar define karte hain aur aap dependencies provide karte hain, toh yeh function tabhi re-create hoga jab kisi bhi dependency ka value change hoga. Lekin, agar aap chahte hain ki function ke reference sirf ek baar create ho aur phir kabhi nahi badle, tab aap useCallback ka use karte hain.


# syntax 
-----------

const handleClick = useCallback(() => {
  setCount(count + 1);
}, [count]);


# Explanations
-------------------
Yahan handleClick function mein ek dependency hai, jo count hai. Agar aapne is dependency ko nahi diya hota, toh handleClick har render par re-create hota, lekin humne count ko dependency ke roop mein diya hai. Iska matlab hai ki handleClick function ka reference tabhi change hoga jab count ki actual value change hogi. Agar count ka value same rehta hai, toh function ka reference waisa hi rehta hai.

Yeh zaroori nahi hai ki har baar jab component re-render hota hai toh function ka reference badle. Agar aapko chahiye ki function ka reference change ho tab hi jab specific dependencies ki values actual mein change hoti hain, toh aap useCallback ka use karte hain. Isse aap performance optimize kar sakte hain, khaas karke jab aap functions ko props ke roop mein child components mein pass karte hain.



