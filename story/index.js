function open_chapter(chapter){
    window.location.href = `chapters/${chapter}/chapter.html`;
    //registreerKlik('x')
}
function registreerKlik(tekst) {
    fetch("https://sheetdb.io/api/v1/drus1tc7zxoxn", {
    method: "POST",
    headers: {
    "Content-Type": "application/json"
    },
    body: JSON.stringify({
    data: { tekst: tekst, aantal: "1" }
    })
});
}

function login(){
    const login = document.getElementById("login").value;
    const password = document.getElementById("password").value;
    if (login == "ivo" && password == "mytherra"){
        document.location.href = "_index.html";
    } else{
        alert("wrong login or password");
    }
}
