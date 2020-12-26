import MyElement from './dummy';
var myElement = new MyElement();
export default function Home() {
    const body = document.getElementsByTagName("body")[0];
    body.appendChild(myElement);
}