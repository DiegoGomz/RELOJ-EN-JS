setInterval(Actualizar, 500);
        function Actualizar(){
            let time = new Date;
            let Hrs = time.getHours();
            let Min = time.getMinutes();
            let Sec = time.getSeconds();
            
            if(Hrs > 12){
                Hrs = Hrs -12;
            }
            if(Hrs == 0){
                Hrs = 12;
            }

            if(Hrs >= 0){
                document.querySelector("body").classList.add("CAJA2");
                document.querySelector(".HORAS").classList.add("CAJA1");
                document.querySelector(".TIEMPO").classList.add("CAJA1");
            }
            if(Hrs == 6){
                document.querySelector(".HORAS").classList.add("CAJA1");
                document.querySelector(".TIEMPO").classList.add("CAJA1");
            }
            if(Hrs <= 12){
                document.querySelector(".TIEMPO").textContent = "PM";
            }
            if(Hrs == 0){
                document.querySelector(".TIEMPO").textContent = "AM";
            }

            document.querySelector(".HORAS").textContent = Hrs + ": " + Min + ": " + Sec + "";   
        }