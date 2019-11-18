let url = location.href;
let userName = (url) => {
    let regexp = new RegExp('(.*\=)');
    let str = regexp.test(url.toString());
    console.log(str);
    let res = !str ? "serger777" : url.toString().replace(regexp, "");
    return res;
};
const creatName = (dataName, dataLink, name) => {
    let a = document.createElement("a");
    a.classList.add(name);
    a.href = dataLink;
    a.innerHTML = dataName;
    document.body.appendChild(a);
};
const creatImg = (data, name) => {
    let img = document.createElement("img");
    img.classList.add(name);
    img.src = data;
    document.body.appendChild(img);
};
const createDesc = (data, name) => {
    let p = document.createElement("p");
    p.classList.add(name);
    p.innerHTML = data;
    document.body.appendChild(p);
};
fetch(`https://api.github.com/users/${userName(url)}`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.message ==="Not Found"){
            throw new Error("Информация о пользователе не доступна")
        }else{
            creatName(data.name, data.html_url, "name-link");
            creatImg(data.avatar_url, "img");
            createDesc(data.bio, "desc");
        }
    })
    .catch(error=>{
        document.body.innerHTML =`<p>${error.message}</p>`
    });
