class Message{
    constructor(author,send_date,text,messages=[]){
        this.author=author,
        this.send_date=send_date,
        this.text=text,
        this.messages=messages
    }
    toString(){
        return `${this.send_date} : ${this.author}/${this.text}`
    }
}

class Messenger extends Message{
    constructor(author,send_date,text,messages){
        super(author,send_date,text,messages)
    }
    showHistory(){
        this.messages.forEach(e=>{
            console.log(e[0])
        })
    }
    getTime(){
        let currentDate=new Date();
        return `${currentDate.getHours()} : ${currentDate.getMinutes()}`
    }
    send(author,text){
        this.author=author
        this.text=text
        this.messages.push([`${this.getTime()}   ${this.author} :  ${this.text}`])
    }
}

let messenger=new Messenger()
const text=document.querySelector('.text')
const name=document.querySelector('.name')
const btn=document.querySelector('button')
const mesag=document.querySelector('.mesag')

btn.addEventListener('click',()=>{
   const x= messenger.send(text.value,name.value)
    const y =messenger.showHistory();
    mesag.innerHTML=x+y
    text.value=''
    name.value=''
})