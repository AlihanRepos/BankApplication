/*-----------------------------Sayfa Geçis Metodları Start---------------------------*/
var anasayfaid = document.getElementById("anasayfaid");
var kaydolsayfaid = document.getElementById("kaydolsayfaid");
var girisyapsayfaid = document.getElementById("girisyapsayfaid");
var hesapsayfaid = document.getElementById("hesapsayfaid");
var hesapguncellemesayfaid = document.getElementById("hesapguncellemesayfaid");
function anasayfaaktif() {
    anasayfaid.style.display = "block";
    kaydolsayfaid.style.display = "none";
    girisyapsayfaid.style.display = "none";
    hesapsayfaid.style.display="none"
    hesapguncellemesayfaid.style.display = "none";
};
function kaydolsayfaaktif() {
    anasayfaid.style.display = "none";
    kaydolsayfaid.style.display = "block";
    girisyapsayfaid.style.display = "none";
    hesapsayfaid.style.display = "none";
    hesapguncellemesayfaid.style.display = "none";
};                                                                                /*----------------Sayfa Geçis Metodlar-------------*/
function giripyapsayfaaktif() {
    anasayfaid.style.display = "none";
    kaydolsayfaid.style.display = "none";
    girisyapsayfaid.style.display = "block";
    hesapsayfaid.style.display = "none";
    hesapguncellemesayfaid.style.display = "none";
};
function hesapsayfaaktif() {
    anasayfaid.style.display = "none";
    kaydolsayfaid.style.display = "none";
    girisyapsayfaid.style.display = "none";
    hesapsayfaid.style.display = "block";
    hesapguncellemesayfaid.style.display = "none";
};
function hesapguncellemesayfaaktif() {
    anasayfaid.style.display = "none";
    kaydolsayfaid.style.display = "none";
    girisyapsayfaid.style.display = "none";
    hesapsayfaid.style.display = "none";
    hesapguncellemesayfaid.style.display = "block";
};
/*-----------------------------Sayfa Geçis Metodları end---------------------------*/
/*-----------------------------Anasayfa İŞLEMLER START---------------------------*/
//Buton Fonksiyonları
document.getElementById("anasayfagirisbuton").addEventListener("click", (e) => { giripyapsayfaaktif() });
document.getElementById("anasayfakaydolbuton").addEventListener("click", (e) => { kaydolsayfaaktif() });
/*-----------------------------Anasayfa İŞLEMLER END---------------------------*/
/*-----------------------------Değişken ve Class START---------------------------*/
var kullaniciliste = [];
class Kulanici{
    constructor(ad, soyad, tcno, sifre, yas) {
        this.Ad = ad
        this.Soyad = soyad
        this.Tcno = tcno
        this.Sifre = sifre
        this.Yas = yas
        this.SifreSayac = 3
        this.Aktifpara = 0
        this.Hesaphareket=[]
    }
}
/*-----------------------------Değişken ve Class End---------------------------*/
/*-----------------------------Kaydolsayfası Start---------------------------*/
function kullaniciverilerialma() {
    var kaydoladinput = document.getElementById("kaydolsayfaad").value.trim().toUpperCase();
    var kaydolsoyadinput = document.getElementById("kaydolsayfasoyad").value.trim().toUpperCase();   /*Kaydol Sayfası İnputlardan Verilerin Alındığı Kısım*/
    var kaydolyasinput = document.getElementById("kaydolsayfayas").value;
    var kaydoltcinput = document.getElementById("kaydolsayfatc").value;
    var kaydolsifreinput = document.getElementById("kaydolsayfasifre").value;
    
    kullaniciverikontrol(kaydoladinput, kaydolsoyadinput, parseInt(kaydolyasinput), kaydoltcinput, kaydolsifreinput);
}
function kullaniciverikontrol(adkontrol, soyadkontrol, yaskontrol, tckontrol, sifrekontrol) {
    var index = kullaniciliste.findIndex((e) => { return e.Tcno == tckontrol })
    if (index == -1) {
        if (adkontrol == "") {
            alert("Lütfen Bir Ad Giriniz")
            return
        }
        else if (soyadkontrol == "") {
            alert("Lütfen Bir Soyad Giriniz")
            return
        }                                                                                               /*Kaydol Sayfası İnputlardan Verilerin Kontrol Edildiği Kısım*/
        else if (yaskontrol <= 17 || isNaN(yaskontrol)) {
            alert("Lütfen Geçerli Bir Yaş Giriniz(Hesap açabilmeniz İçin 18 yaşından büyük olmalısınız)")
            return
        }
        else if (tckontrol.length < 11) {
            alert("Geçerli 11 haneli Tc Giriniz")
            return
        }
        else if (sifrekontrol.length < 6) {
            alert("Geçerli Bir Şifre Oluşturunuz")
            return
        }
        else {
            kullanicilistekleme(adkontrol, soyadkontrol, tckontrol, sifrekontrol, yaskontrol)
        }
    }
    else {
        alert("Bu Tc ile Daha Önce Hesap Oluşturulmuş!")
        return
    }
}
function kullanicilistekleme(adinput,soyadinput,tcinput,sifreinput,yasinput) {
    var kullanicilar = new Kulanici(adinput, soyadinput, tcinput, sifreinput,yasinput);                  /*Kaydol Sayfası Sınıf Oluşumu ve Push edilmesi */                             
    kullaniciliste.push(kullanicilar);
    giripyapsayfaaktif();  
}
document.getElementById("kaydolsayfakaydolbuton").addEventListener("click", (e) => {
    kullaniciverilerialma();
    document.getElementById("kaydolsayfaad").value="";
    document.getElementById("kaydolsayfasoyad").value="";                                                      /*Kaydol Sayfası Kaydol Butonu */
    document.getElementById("kaydolsayfayas").value="";                                                    
    document.getElementById("kaydolsayfatc").value="";
    document.getElementById("kaydolsayfasifre").value="";                                                                               
})
document.getElementById("kaydolsayfavazgecbuton").addEventListener("click", (e) => {
    document.getElementById("kaydolsayfaad").value="";
    document.getElementById("kaydolsayfasoyad").value="";
    document.getElementById("kaydolsayfayas").value="";                                                    /*Kaydol Sayfası Anasayfaya Dön Butonu */  
    document.getElementById("kaydolsayfatc").value="";
    document.getElementById("kaydolsayfasifre").value="";
    anasayfaaktif();
})
/*-----------------------------Kaydolsayfası End---------------------------*/
/*-----------------------------Giriş Sayfası Start---------------------------*/
var degiskenindex;
function girissayfakullanicikontrol() {
    var giristcno = document.getElementById("giriyapsayfatc").value;
    var girissifre = document.getElementById("giriyapsayfasifre").value;
    var index = kullaniciliste.findIndex((e) => { return e.Tcno == giristcno })
    if (index == -1) {
        alert("Tc No Hatalı")
        return
    }
    else if (kullaniciliste[index].SifreSayac==0) {
        alert("Hesabınız Bloke Olmuştur")
        return
    }
    else if (kullaniciliste[index].Sifre != girissifre) {
        kullaniciliste[index].SifreSayac--;
        alert(`Şifre Hatalı Kalan Hakkınız: ${kullaniciliste[index].SifreSayac+1}`);
        return
    }
   
    else {
        kullaniciliste[index].SifreSayac = 3;
        kontrolsayfahesapbilgilerialma(index);
        degiskenindex = index
        hesaphareketlistesi()
        hesapsayfaaktif();
        
    }   
}
document.getElementById("giriyapsayfagirisbuton").addEventListener("click", (e) => {
    girissayfakullanicikontrol();
    document.getElementById("giriyapsayfatc").value = "";
    document.getElementById("giriyapsayfasifre").value = "";                                                    /*Giriş Sayfası Giriş Butonu */
})
document.getElementById("girisyapsayfavazgecbuton").addEventListener("click", (e) => {
    anasayfaaktif();
    document.getElementById("giriyapsayfatc").value = "";
    document.getElementById("giriyapsayfasifre").value = "";                                                    /*Giriş Sayfası Vazgeç Butonu */
})
/*-----------------------------Giriş Sayfası End---------------------------*/
/*-----------------------------Kontrol Sayfası Start---------------------------*/
function kontrolsayfahesapbilgilerialma(index) {
    var ad = kullaniciliste[index].Ad;
    var soyad = kullaniciliste[index].Soyad;
    var tcno = kullaniciliste[index].Tcno;
    var para = kullaniciliste[index].Aktifpara;
    var yas = kullaniciliste[index].Yas;
    kontrolsayfahesapbilgileriyazdirma(ad, soyad, tcno, para,yas);
}
function kontrolsayfahesapbilgileriyazdirma(ad, soyad, tcno, para,yas) {
    var secadsoyadheader = document.getElementById("hesapsayfaheaderh2");
    var secadsoyad = document.getElementById("hesapbilgiadsoyad");
    var sectcno = document.getElementById("hesapbilgitcno");
    var secpara = document.getElementById("hesapbilgipara");
    var secyas = document.getElementById("hesapbilgiyas");

    secadsoyadheader.innerText=`Merhaba ${ad}`
    secadsoyad.innerText=`${ad} ${soyad}`
    sectcno.innerText = `${tcno}`
    secpara.innerText=`${para} ₺`     
    secyas.innerText=`${yas}`     
}
// Hesap Bilgileri Buton Fonksiyonları Start
document.getElementById("hesabsayfaanasayfadonbuton").addEventListener("click", (e) => {
    anasayfaaktif();
    document.getElementById("hesapsayfaheaderh2").innerText = "";                                                   /*AnasayfaDön Butonu */
    document.getElementById("hesapbilgiadsoyad").innerText = "";
    document.getElementById("hesapbilgitcno").innerText = "";
    document.getElementById("hesapbilgipara").innerText = "";
    document.getElementById("hesapsayfaparayatir").value = "";
    document.getElementById("tabloyazdirma").innerHTML = "";
    degiskenindex = "";
                                                      
})
document.getElementById("hesabsayfaguncellebuton").addEventListener("click", (e) => {                                        /*Hesap Bilgi Güncelle Butonu */
    document.getElementById("hesapsayfaparayatir").value = "";
    document.getElementById("hesapsayfaparacek").value = "";
    hesapguncellemesayfaaktif();
    
})

// Hesap Bilgileri Buton Fonksiyonları End
// Para Yatır-Çek İşlemleri Start
function paraguncellemeyatir() {
    var secparayatir = document.getElementById("hesapsayfaparayatir").value;
    if (secparayatir != "") {
        kullaniciliste[degiskenindex].Aktifpara = Number(kullaniciliste[degiskenindex].Aktifpara) + Number(secparayatir)
        var secpara = document.getElementById("hesapbilgipara");
        secpara.innerText = `${kullaniciliste[degiskenindex].Aktifpara} ₺`
        kullaniciliste[degiskenindex].Hesaphareket.push(`Hesabıma Para Yatırma/*/${Number(secparayatir)} ₺/*/Kendi Hesaplarımın Arasında/*/${kullaniciliste[degiskenindex].Ad}`)
        hesaphareketlistesi();
    }
    else{alert("Boş Deger Girmeyiniz")}
    
}
document.getElementById("hesabsayfaparayatirbuton").addEventListener("click", (e) => {                      /*Hesap Para Yatır Butonu */
    paraguncellemeyatir();
    
    document.getElementById("hesapsayfaparayatir").value = ""
    
    
})
function paraguncellemecek() {
    var secparacek = document.getElementById("hesapsayfaparacek").value;
    if (Number(kullaniciliste[degiskenindex].Aktifpara) >= Number(secparacek) &&  secparacek!="") {
        kullaniciliste[degiskenindex].Aktifpara = Number(kullaniciliste[degiskenindex].Aktifpara) - Number(secparacek)
        var secpara = document.getElementById("hesapbilgipara");
        secpara.innerText = `${kullaniciliste[degiskenindex].Aktifpara} ₺`
        kullaniciliste[degiskenindex].Hesaphareket.push(`Hesabımdan Para Çekme/*/${Number(secparacek)} ₺/*/Kendi Hesaplarımın Arasında/*/${kullaniciliste[degiskenindex].Ad}`)
        hesaphareketlistesi();
    }
    else{alert(`Yetersiz Bakiye.En Fazla Çekebileceğiniz Tutar: ${kullaniciliste[degiskenindex].Aktifpara}`)}
}
document.getElementById("hesabsayfaparacekbuton").addEventListener("click", (e) => {                                         /*Hesap Cek Yatır Butonu */
    paraguncellemecek();
    document.getElementById("hesapsayfaparacek").value = "";
    

})
// Para Yatır-Çek İşlemleri End
// Para Havale İşlemleri Start
function parahavale() {
    var karsitcno = document.getElementById("hesapsayfahavalealıcıtc").value;
    var kenditcno = kullaniciliste[degiskenindex].Tcno;
    var havalemiktar = document.getElementById("hesapsayfahavalemiktar").value;
  

    //Karsı Tc Kontrol
    var karsiindex = kullaniciliste.findIndex((e) => { return e.Tcno == karsitcno })
    if (karsiindex == -1 || karsitcno==kenditcno) {
        alert("Girilen Tc'ye Ait Bilgi Bulunamamıştır.")
        return
    }
    else if (Number(kullaniciliste[degiskenindex].Aktifpara) < Number(havalemiktar)){
        alert(`Yetersiz Bakiye.En Fazla Havale Tutarı: ${kullaniciliste[degiskenindex].Aktifpara}`)
        return
        
    }
    else {
        kullaniciliste[karsiindex].Aktifpara = Number(kullaniciliste[karsiindex].Aktifpara) + Number(havalemiktar)
        kullaniciliste[karsiindex].Hesaphareket.push(`Gelen Havale/*/${Number(havalemiktar)} ₺/*/TcNo: ${kullaniciliste[degiskenindex].Tcno}/*/${kullaniciliste[degiskenindex].Ad}`)
        kullaniciliste[degiskenindex].Aktifpara = Number(kullaniciliste[degiskenindex].Aktifpara) - Number(havalemiktar)
        kullaniciliste[degiskenindex].Hesaphareket.push(`Giden Havale/*/${Number(havalemiktar)} ₺/*/TcNo: ${kullaniciliste[karsiindex].Tcno}/*/${kullaniciliste[karsiindex].Ad}`)
        var secpara = document.getElementById("hesapbilgipara");
        secpara.innerText = `${kullaniciliste[degiskenindex].Aktifpara} ₺` 
        hesaphareketlistesi();
    }
}
document.getElementById("hesabsayfahavalebuton").addEventListener("click", (e) => {
    parahavale();
    document.getElementById("hesapsayfahavalealıcıtc").value = "";
    document.getElementById("hesapsayfahavalemiktar").value = "";
    

})
// Para Havale İşlemleri End
// Hesap Harekat İşlemleri Start
function hesaphareketlistesi() {
    if (kullaniciliste[degiskenindex].Hesaphareket.length != 0) {
        var hesaplisteayırma = [];
        var yenihesapliste = [];
        var yeniliste = [];
        for (i = 0; i < kullaniciliste[degiskenindex].Hesaphareket.length; i++) {
        
            yeniliste.push(kullaniciliste[degiskenindex].Hesaphareket[i]);
        }
        for (i = 0; i < yeniliste.length; i++) {
            hesaplisteayırma.push(yeniliste[i].split("/*/"))
        }
        for (i = 0; i < hesaplisteayırma.length; i++) {
            for (a = 0; a < hesaplisteayırma[i].length; a++) {
                yenihesapliste.push(hesaplisteayırma[i][a])
            }
        
        
        }
        hesaptabloyazdirma(yenihesapliste);
    }
    else{return}
}
function hesaptabloyazdirma(liste) {
    var yapılanislemliste = [];
    var miktarliste = [];
    var tcliste = [];
    var isimliste = [];
    for (i = 0; i < liste.length; i = i + 4) {
        yapılanislemliste.push(liste[i]);
        miktarliste.push(liste[i + 1]);
        tcliste.push(liste[i + 2]);
        isimliste.push(liste[i + 3]);
    }
   
    hesaptabloyazdirmahtml(yapılanislemliste, miktarliste, tcliste, isimliste)
}
function hesaptabloyazdirmahtml(yapılanislemliste, miktarliste, tcliste, isimliste) {
    document.getElementById("tabloyazdirma").innerHTML = "";
    for (i = 0; i < yapılanislemliste.length; i++) {
        var selecttablo = document.getElementById("tabloyazdirma")
        var satirtr = document.createElement("tr")
        var sutuntd1 = document.createElement("td")
        var sutuntd2 = document.createElement("td")
        var sutuntd3 = document.createElement("td")
        var sutuntd4 = document.createElement("td")
        
        sutuntd1.innerText = yapılanislemliste[i]
        sutuntd2.innerText = miktarliste[i]
        sutuntd3.innerText = tcliste[i]
        sutuntd4.innerText = isimliste[i]

        selecttablo.appendChild(satirtr)
        satirtr.appendChild(sutuntd1)
        satirtr.appendChild(sutuntd2)
        satirtr.appendChild(sutuntd3)
        satirtr.appendChild(sutuntd4)    
    }
}
/*-----------------------------Kontrol Sayfası End---------------------------*/
/*-----------------------------Hesap Bilgi Güncelleme Sayfası Start---------------------------*/
function hesapguncellemesayfa() {
    var secyeniad = document.getElementById("hesapguncellemesayfaad").value.trim().toUpperCase();
    var secyenisoyad = document.getElementById("hesapguncellemesayfasoyad").value.trim().toUpperCase();
    var secyeniyas = document.getElementById("hesapguncellemesayfayas").value;
    var secyenisifre = document.getElementById("hesapguncellemesayfasıfre").value;


    kullaniciliste[degiskenindex].Ad = secyeniad;
    kullaniciliste[degiskenindex].Soyad = secyenisoyad;
    kullaniciliste[degiskenindex].Yas = secyeniyas;
    kullaniciliste[degiskenindex].Sifre = secyenisifre;
    if (secyeniad == "") {
        alert("Lütfen Bir Ad Giriniz")
        return
    }
    else if (secyenisoyad == "") {
        alert("Lütfen Bir Soyad Giriniz")
        return
    }                                                                                               /*Güncelleme Sayfası İnputlardan Verilerin Kontrol Edildiği Kısım*/
    else if (secyeniyas <= 17 || isNaN(secyeniyas)) {
        alert("Lütfen Geçerli Bir Yaş Giriniz(Hesap bilginiz 18 yaşından büyük olmalı)")
        return
    }
    else if (secyenisifre.length < 6) {
        alert("Geçerli Bir Şifre Oluşturunuz")
        return
    }
    else {
        kontrolsayfahesapbilgileriyazdirma(secyeniad, secyenisoyad, kullaniciliste[degiskenindex].Tcno, kullaniciliste[degiskenindex].Aktifpara, secyeniyas);
        hesapsayfaaktif();
    }
 }   
 document.getElementById("hesapguncellemesayfaguncelleme").addEventListener("click", (e) => {
     hesapguncellemesayfa();
    document.getElementById("hesapguncellemesayfaad").value = "";
    document.getElementById("hesapguncellemesayfasoyad").value = "";
    document.getElementById("hesapguncellemesayfayas").value = "";
    document.getElementById("hesapguncellemesayfasıfre").value= ""; 

})
    
document.getElementById("hesapguncellemesayfavazgec").addEventListener("click", (e) => {
    hesapsayfaaktif();
    
    document.getElementById("hesapguncellemesayfaad").value = "";
    document.getElementById("hesapguncellemesayfasoyad").value = "";
    document.getElementById("hesapguncellemesayfayas").value = "";
    document.getElementById("hesapguncellemesayfasıfre").value= ""; 
   
})
/*-----------------------------Hesap Bilgi Güncelleme Sayfası Start---------------------------*/
function hesapsil() {
    kullaniciliste.splice(degiskenindex, 1) 
    anasayfaaktif();
}
function eminmisin() {
    var soru = confirm("Hesabını Kalıcı Olarak Silmek İstediğine Emin misin?(Hesapta Kalan Paranızı Şubeden Talep Edebilirsiniz)");
    if (soru) {
        alert("Evet,Eminim.Paramı Şube yolu ile çekmek İstiyorum");
        hesapsil()
    } else {
      alert("Vazgeç");
    }
}
document.getElementById("hesapguncellemesayfasil").addEventListener("click", (e) => {
    eminmisin();
    document.getElementById("tabloyazdirma").innerHTML = "";
    document.getElementById("hesapguncellemesayfaad").value = "";
    document.getElementById("hesapguncellemesayfasoyad").value = "";
    document.getElementById("hesapguncellemesayfayas").value = "";
    document.getElementById("hesapguncellemesayfasıfre").value = ""; 
   
})
/*-----------------------------Hesap Bilgi Güncelleme Sayfası End---------------------------*/
