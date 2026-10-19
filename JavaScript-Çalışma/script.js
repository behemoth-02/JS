fetch("cv.json")
    .then(response => response.json())
    .then(data => {

        document.getElementById("foto").src = data.kisisel.foto;
        document.getElementById("ad").textContent = data.kisisel.ad;
        document.getElementById("soyad").textContent = data.kisisel.soyad;
        document.getElementById("hakkimda").textContent = data.kisisel.hakkimda;


        document.getElementById("konum").textContent = data.kisisel.konum;
        document.getElementById("eposta").textContent = data.kisisel.email;


        let yetenekAdlari = document.querySelectorAll(".yetenek-ad");

        data.yetenekler.diller.forEach(function(yetenek, i) {
            yetenekAdlari[i].textContent = yetenek;    
        });


        let dilAdlari = document.querySelectorAll(".dil-ad");
        let dilSeviyeleri = document.querySelectorAll(".dil-seviye");

        data.diller.forEach((dil, sira) => {
            dilAdlari[sira].textContent = dil.ad;
            dilSeviyeleri[sira].textContent = dil.seviye;
        });


        document.getElementById("okul").textContent = data.egitim.ad;
        document.getElementById("bolum").textContent = data.egitim.bolum;
        document.getElementById("yil").textContent = data.egitim.yil;


  

    })