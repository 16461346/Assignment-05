const callBtns = document.querySelectorAll('.call-btn');
      const heartBtns = document.querySelectorAll('.heart-btn');
      const totalHart = document.getElementById('hart');
      const totalCopy = document.getElementById('total-copy');
      const copyBtns = document.querySelectorAll('.copy-btn');
      const totalBalanceElem = document.getElementById('total-balance');
      const historyLeft = document.getElementById('history');
      const clearBtn = document.getElementById('clear-btn');
        
      let heartCount = 0;
      let copyCount = 0;
        
      heartBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
          heartCount++;
          totalHart.innerText = heartCount;
        });
      });

      copyBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
          const cart = btn.closest('.cart');      
          const number = cart.dataset.number;      
          navigator.clipboard.writeText(number);   
          copyCount++;
          totalCopy.innerText = copyCount;
          alert(number + " copied to clipboard!");
        });
      });
      callBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
          const cart = btn.closest('.cart');         
          const title = cart.dataset.title;        
          const number = cart.dataset.number;          
          const khoros = 20;                            
        
          let totalBalance = parseInt(totalBalanceElem.innerText);
        
          if(totalBalance < khoros) {
            alert("❌ আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন লাগবে।");
            return;
          }
        
          totalBalanceElem.innerText = totalBalance - khoros;
          alert("📞 Calling " + title + " Service... " + number);
        
          const now = new Date();
          const timeStr = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
        
         const li = document.createElement('li');
              li.className = 'border p-2 mb-2 rounded items-center flex justify-between';
              li.innerHTML = `<div class="font-bold">${title}<br>${number}</div><div class="text-ms text-gray-900">${timeStr}</div>`;
                historyLeft.appendChild(li);

        });
      });

      clearBtn.addEventListener('click', function() {
        historyLeft.innerHTML = '';
      });
