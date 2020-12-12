export default function Home() {
    const body = document.getElementsByTagName("body")[0];
    const ele = document.createElement("div");
    ele.innerHTML = "Hello OpenWeb";
    body.appendChild(ele);
    
}