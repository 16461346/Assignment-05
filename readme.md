

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
Ans:__ **getElementById--হল এমন একটি সিলেক্টর যা দিয়া HTML page এর কোন আইডি দারা নামকরণ করা   নির্দিষ্ট  এলিমেন্ট উপাদান পাওয়া যায় |

getElementsByClassName--হল এমন একটি সিলেক্টর যা দিয়া HTML page এর কোন ক্লাস দারা নামকরণ করা নির্দিষ্ট  এলিমেন্ট উপাদান পাওয়া যায় ||

querySelector--হল এমন একটি সিলেক্টর যা দিয়া HTML page এর যে  কোন উপাদান কে পাওয়া যায় এই সিলেক্টর CSS Selector নিয়ম মেনে HTML element সিলেক্ট করে।এবং একাধিক একই নামের আইটেম বা উপাদানের মধ্যে সর্ব প্রথম যেটা থাকে সেটাকে ধরে | 

querySelectorAll-- হল এমন একটি সিলেক্টর যা দিয়া HTML page এর যে  কোন উপাদান কে পাওয়া যায় এই সিলেক্টর CSS Selector নিয়ম মেনে HTML element সিলেক্ট করে।এবং একাধিক একই নামের আইটেম বা উপাদানের সবগুলকে ধরে কাজ করে |এটা NodeList return করে (array-এর মতো হলেও পুরোপুরি array না)।

   

2. How do you **create and insert a new element into the DOM**?
Ans--আমি জাভাস্ক্রিপ্ট এ নতুন এলিমেন্ট তৈরি করার জন্য ব্যবহার -document.creatElement('tagname')
নতুন এলিমেন্ট এর লেখা পাওয়ার জন্য -newElement.innerText/innerHTML='যে উপাদান এর লেখা নিতে চাই'
এখন কথায় এই লেখা টা বসাব তা ঠিক করে দিব -document.getElementById('যে কন্টেইনার বা যেখানে বসাতে চাই সেটার নাম দিব')
এবার বসিয়ে দিব -appendChild('newElement');

3. What is **Event Bubbling** and how does it work?
Ans-যখন একটা child element-এ কোনো event (যেমন click) ঘটে, তখন event প্রথমে সেই element-এই handle হয়, তারপর ধাপে ধাপে তার parent → grandparent → document পর্যন্ত উপরে bubble (উঠতে থাকে)-এটি এইভাবে কাজ করে।

4. What is **Event Delegation** in JavaScript? Why is it useful?
Ans--Event Delegation হলো একটা টেকনিক যেখানে আমরা  parent element এ event listener বসাই  আর সেই event automatically child element গুলোতেও কাজ করে event bubbling এর কারণে।
মানে আলাদা আলাদা করে প্রতিটি child element এ event listener ব্যবহার না করে প্যারেন্ট এ ব্যবহার করেলই হয় -একে vent Delegation বলে | 

5. What is the difference between **preventDefault() and stopPropagation()** methods?
Ans--preventDefault() আর stopPropagation() এর মাজে পার্থক্য হল -
preventDefault()-এটি কোন এলিমেন্ট এর ডিফল্ট কাজ বন্ধ করার জন্য ব্যবহার করা হয় |
stopPropagation()-এটি ইভেন্ট এর বাবলিং বন্ধ করার জন্য ব্যবহার করা হয় | অর্থাৎ যেখানে এটি ব্যবহার করা হবে সেখানেই বাবলিং থেমে যাবে আর উপরের দিকে যাবে না |
