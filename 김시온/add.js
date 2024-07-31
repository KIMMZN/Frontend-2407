





      window.onload = () => {      
      function editStatusMessage() {
        let currentMessage = document.getElementById("statusMessage").innerText;
        let newMessage = prompt("새로운 상태 메시지를 입력하세요:", currentMessage);
        if (newMessage !== null && newMessage.trim() !== "") {
          document.getElementById("statusMessage").innerText = newMessage;
        }
      }

      document.getElementById("editStatusBtn").addEventListener("click", function(event) {
        event.preventDefault();
        editStatusMessage();
      });
    }
    