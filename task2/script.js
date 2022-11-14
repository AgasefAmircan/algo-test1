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

messenger.send('Agasef','Salam')
messenger.send('Amircanov','Aleykum')
messenger.getTime()
messenger.showHistory()