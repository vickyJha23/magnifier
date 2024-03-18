//  console.log("Har Har Mahadev");
 function handleImageMagnification(zoom){
      const img = document.querySelector("#mg-img");
      const mgGlass = document.createElement("div");
      mgGlass.setAttribute("class", "mg-glass");
      img.parentElement.insertBefore(mgGlass, img);
      halfWidth = mgGlass.offsetWidth / 2;
      halfHeight = mgGlass.offsetHeight / 2;
      mgGlass.style.backgroundImage = `url(${img.src})`;
      mgGlass.style.backgroundRepeat = "no-repeat";
      mgGlass.style.backgroundSize = `${img.width * zoom}px ${img.height * zoom}px`;
      bw = 3;
      mgGlass.addEventListener("mousemove", moveMagnifier);
      img.addEventListener("mousemove", moveMagnifier);
      function moveMagnifier(e){
           e.preventDefault();
           let pos, horiPos, verPos;
           pos = getCursorPositon(e);     
           horiPos = pos.horiPos;
           verPos = pos.verPos;    
           console.log(horiPos, verPos);
          if(horiPos > (img.width - (halfWidth / zoom))){
               horiPos = img.width - (halfWidth / zoom);
          }    
          if(horiPos < (halfWidth / zoom)){
               horiPos = (halfWidth / zoom);
          }
          if(verPos > (img.height - (halfHeight / zoom))){
                verPos = img.height - (halfHeight / zoom);   
          }
          if(verPos < (halfHeight / zoom)){
               verPos = (halfHeight / zoom);
          }
           mgGlass.style.left = `${horiPos-halfWidth}px`;
           mgGlass.style.top =`${verPos - halfHeight}px`;
           mgGlass.style.backgroundPosition = `${-((horiPos * zoom) - (halfWidth * bw))}px ${-((verPos * zoom) - (halfHeight + bw))}px`;
      }
      function getCursorPositon(e){
            let cursorHorPos, cursorVerPos, boundingRect;
            boundingRect = img.getBoundingClientRect();
            cursorHorPos = e.clientX - boundingRect.left;
            cursorVerPos = e.clientY - boundingRect.top;
          return {horiPos: cursorHorPos,verPos: cursorVerPos}
      }


 }

handleImageMagnification(3)   