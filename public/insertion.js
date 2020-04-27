const droppable = new Droppable.default(document.querySelectorAll('.container'), {
    draggable: '.item',
    dropzone: '.dropzone'
  
  });
  
  let droppableOrigin;
  
  // --- Draggable events --- //
  droppable.on('drag:start', (evt) => {
    droppableOrigin = evt.originalSource.parentNode.dataset.dropzone;
  });
  
  droppable.on('droppable:dropped', (evt) => {
    if (droppableOrigin !== evt.dropzone.dataset.dropzone) {
      evt.cancel();
    }
  
 
  });
  
  function changeColor(){
    document.getElementById("cat").style.backgroundColor = "lightgreen";
  }
  
  
  function changeToCat() {
    const text = document.getElementById("catherine").innerHTML;
    if (text === "4") {
      document.getElementById("catherine").innerHTML = "Catherine was here";
    } else {
      document.getElementById("catherine").innerHTML = "4";
    }
  }
  
  function showStep2() {
      document.getElementById("step2").style.visibility = "visible";
  }
  function showStep2b() {
      document.getElementById("step2b").style.visibility = "visible";
  }
  
  function showStep3(){
      document.getElementById("step3").style.visibility = "visible";
  }
  
  function showStep3b(){
      document.getElementById("step3b").style.visibility = "visible";
  }
  
  function showStep3c(){
      document.getElementById("step3c").style.visibility = "visible";
  }
  
  function showStep4(){
      document.getElementById("step4").style.visibility = "visible";
  }
  
  function showStep4b(){
      document.getElementById("step4b").style.visibility = "visible";
  }
  
  function showStep4c(){
      document.getElementById("step4c").style.visibility = "visible";
  }
  
  function showStep5(){
      document.getElementById("step5").style.visibility = "visible";
  }
  
  function showStep5b(){
      document.getElementById("step5b").style.visibility = "visible";
  }
  
  function showStep5c(){
      document.getElementById("step5c").style.visibility = "visible";
  }
  
  function showStep5d(){
      document.getElementById("step5d").style.visibility = "visible";
  }
  
  function showStep5e(){
      document.getElementById("step5e").style.visibility = "visible";
  }
  