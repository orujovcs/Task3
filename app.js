const messages = []
const sendButton = document.querySelector(".btn-send");
const showButton = document.querySelector(".btn-show");
const aName = document.querySelector(".aname");
const message = document.querySelector(".message");
const history = document.querySelector(".history");
function gettime() {
    let now = new Date();
    return `${now.toLocaleTimeString()}`;
}

class Message{
    constructor(authorName, message){
        this.authorName = authorName;
        this.currentTime = gettime();
        this.messageContent = message;
    }
    toHtml(){
        return `<p>${this.currentTime} ${this.authorName}: ${this.messageContent}</p>`;
    }
}

class Messenger{
    messages = []
    send(author,text){
        let p = new Message(author,text);
        messages.push(p.toHtml());
    }
    show_history(){
        messages.forEach(element => {
            console.log(element);
        });
    }
}
sendButton.addEventListener('click',() => {
    let p = new Message(aName.value,message.value);
    messages.push(p.toHtml());
});

showButton.addEventListener('click', () => {
    history.innerHTML = "";
    messages.forEach(item => {
        history.innerHTML += (item);
    });
});