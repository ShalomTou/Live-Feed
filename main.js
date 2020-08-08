const clients =  [
    {
        "image": "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
        "name": "Leon Golden",
        "date": "2020-08-07T23:28:56.782Z",
        "contex": "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages."
    },
    {
        "image": "https://images.pexels.com/photos/1793306/pexels-photo-1793306.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "name": "Yogev Levi",
        "date": "2020-08-07T20:28:56.782Z",
        "contex": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },
    {
        "image": "https://images.pexels.com/photos/2825851/pexels-photo-2825851.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "name": "Roni Tal",
        "date": "2020-08-08T23:28:56.782Z",
        "contex": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. "
    },
    {
        "image": "https://images.pexels.com/photos/3785110/pexels-photo-3785110.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "name": "Samuel Ramirez",
        "date": "2020-08-07T12:28:56.782Z",
        "contex": "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum'."
    },
    {
        "image": "https://images.pexels.com/photos/752802/pexels-photo-752802.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "name": "Shahar Wizel",
        "date": "2020-08-08T23:17:01.782Z",
        "contex": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour."
    },
    {
        "image": "https://images.pexels.com/photos/2209510/pexels-photo-2209510.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "name": "Ofek Or",
        "date": "2020-08-08T10:10:01.782Z",
        "contex": "Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words."
    },
    {
        "image": "https://images.pexels.com/photos/4621422/pexels-photo-4621422.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "name": "Noam Winston",
        "date": "2020-08-07T02:17:01.782Z",
        "contex": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC."
    },
    {
        "image": "https://images.pexels.com/photos/3536436/pexels-photo-3536436.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "name": "John Herold",
        "date": "2020-08-07T14:17:01.782Z",
        "contex": "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested."
    },
    {
        "image": "https://images.pexels.com/photos/3139612/pexels-photo-3139612.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "name": "Shaked Shemesh",
        "date": "2020-08-07T17:17:01.782Z",
        "contex": "Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form."
    },
    {
        "image": "https://images.pexels.com/photos/2914149/pexels-photo-2914149.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        "name": "Yaer Waisman",
        "date": "2020-08-07T16:17:11.782Z",
        "contex": "Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
    }
]

let state = {
    currentClient: 0
}

const numberOfCards = 3

function populateMessages(event) {
     clearAll()
    fetchDataFromClients()
    .forEach(client => {
        insertToHTML(creatHtmlClientCard(client))
    });
}

function fetchDataFromClients(){
    const fetchedClients = []
    let j = 0
    for(let i = state.currentClient; i < clients.length; ++i) {
        if(j >= numberOfCards) {
            break;
        }
        fetchedClients.push(clients[i])
        j++
    }
    state.currentClient += numberOfCards
    if(state.currentClient >= clients.length) {
        state.currentClient = 0
    }
    return fetchedClients
}

function clearAll() {
    const cardsContainer = document.getElementById("divCARDS")
    while (cardsContainer.firstChild) {
        cardsContainer.removeChild(cardsContainer.lastChild);
    }
}
function insertToHTML(card){
    document.getElementById("divCARDS").appendChild(card)
}

function init() {
    // loadJSON()
    populateMessages()
    console.log(clients)
}

function diff_hours(dt2, dt1) 
 {

    var diff =(dt2.getTime() - dt1.getTime()) / 1000;
    diff /= (60 * 60);
    return Math.abs(Math.round(diff));
  
 }

function creatHtmlClientCard(client){
    const container = document.createElement('div')
    const firstChild = document.createElement('div')
    firstChild.classList.add('row')
    firstChild.classList.add('no-gutters')
    const col = document.createElement('div')
    col.classList.add('col-md-8')
    const cardBody = document.createElement('div')
    cardBody.classList.add('card-body')
    const cardTitle = document.createElement('h5')
    cardTitle.classList.add('card-title')
    const p1 = document.createElement('p')
    p1.classList.add('card-text')
    const p2 = document.createElement('p')
    p2.classList.add('card-text')
    const small = document.createElement('small')
    small.classList.add('text-muted')
    const col2 = document.createElement('div')
    const colsContainer = document.createElement('div')
    colsContainer.appendChild(col)
    colsContainer.appendChild(col2)
    colsContainer.style.height = '100%' 
    container.style.height = `${100/numberOfCards}%`
    
    col2.classList.add('col-md-4')
    const img = document.createElement('img')
    img.classList.add('card-img')

    p1.innerHTML = client.contex
    p2.innerHTML = diff_hours(new Date(), new Date(JSON.parse(`"${client.date}"`)))
    console.log(diff_hours(new Date(), new Date(JSON.parse(`"${client.date}"`))))
    img.src = client.image

    cardBody.appendChild(cardTitle)
    cardBody.appendChild(p1)
    cardBody.appendChild(p2)
    p2.appendChild(small)
    col.appendChild(cardBody)
    firstChild.appendChild(col)
    col2.appendChild(img)
    firstChild.appendChild(col2)
    container.appendChild(firstChild)
    

    small.innerText = ` hours ago`
    container.classList.add('w3-animate-opacity')

    return container

}
