
const { createApp } = Vue

let DateTime = luxon.DateTime;


  createApp({
    data() {
      return {
        activeIndex: 0,
        newText: '',
        search: '',
        chatsListDisplay: true,
        activeChatDisplay: true,
        homeDisplay: false,
        addContactDisplay: false,
        sampleIndex: 0,
        sampleName: '',
        sampleImages: [
          '_1','_2','_3','_4','_5','_6','_7','_8',
        ],
        contacts: [
          {
          name: 'Michele',
          avatar: '_1',
          visible: true,
          messages: [
          {
          date: '10/01/2020 15:30:55',
          text: 'Hai portato a spasso il cane?',
          status: 'sent'
          },
          {
          date: '10/01/2020 15:50:00',
          text: 'Ricordati di stendere i panni',
          status: 'sent'
          },
          {
          date: '10/01/2020 16:15:22',
          text: 'Tutto fatto!',
          status: 'received'
          }
          ],
          },
          {
          name: 'Fabio',
          avatar: '_2',
          visible: true,
          messages: [
          {
          date: '20/03/2020 16:30:00',
          text: 'Ciao come stai?',
          status: 'sent'
          },
          {
          date: '20/03/2020 16:30:55',
          text: 'Bene grazie! Stasera ci vediamo?',
          status: 'received'
          },
          {
          date: '20/03/2020 16:35:00',
          text: 'Mi piacerebbe ma devo andare a fare la spesa.',
          status: 'sent'
          }
          ],
          },
          {
          name: 'Samuele',
          avatar: '_3',
          visible: true,
          messages: [
          {
          date: '28/03/2020 10:10:40',
          text: 'La Marianna va in campagna',
          status: 'received'
          },
          {
          date: '28/03/2020 10:20:10',
          text: 'Sicuro di non aver sbagliato chat?',
          status: 'sent'
          },
          {
          date: '28/03/2020 16:15:22',
          text: 'Ah scusa!',
          status: 'received'
          }
          ],
          },
          {
          name: 'Alessandro B.',
          avatar: '_4',
          visible: true,
          messages: [
          {
          date: '10/01/2020 15:30:55',
          text: 'Lo sai che ha aperto una nuova pizzeria?',
          status: 'sent'
          },
          {
          date: '10/01/2020 15:50:00',
          text: 'Si, ma preferirei andare al cinema',
          status: 'received'
          }
          ],
          },
          {
          name: 'Alessandro L.',
          avatar: '_5',
          visible: true,
          messages: [
          {
          date: '10/01/2020 15:30:55',
          text: 'Ricordati di chiamare la nonna',
          status: 'sent'
          },
          {
          date: '10/01/2020 15:50:00',
          text: 'Va bene, stasera la sento',
          status: 'received'
          }
          ],
          },
          {
          name: 'Claudia',
          avatar: '_6',
          visible: true,
          messages: [
          {
          date: '10/01/2020 15:30:55',
          text: 'Ciao Claudia, hai novità?',
          status: 'sent'
          },
          {
          date: '10/01/2020 15:50:00',
          text: 'Non ancora',
          status: 'received'
          },
          {
          date: '10/01/2020 15:51:00',
          text: 'Nessuna nuova, buona nuova',
          status: 'sent'
          }
          ],
          },
          {
          name: 'Federico',
          avatar: '_7',
          visible: true,
          messages: [
          {
          date: '10/01/2020 15:30:55',
          text: 'Fai gli auguri a Martina che è il suo compleanno!',
          status: 'sent'
          },
          {
          date: '10/01/2020 15:50:00',
          text: 'Grazie per avermelo ricordato, le scrivo subito!',
          status: 'received'
          }
          ],
          },
          {
          name: 'Davide',
          avatar: '_8',
          visible: true,
          messages: [
          {
          date: '10/01/2020 15:30:55',
          text: 'Ciao, andiamo a mangiare la pizza stasera?',
          status: 'received'
          },
          {
          date: '10/01/2020 15:50:00',
          text: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
          status: 'sent'
          },
          {
          date: '10/01/2020 15:51:00',
          text: 'OK!!',
          status: 'received'
          }
          ],
          },
          {
          name: 'Alessandro',
          avatar: '_5',
          visible: true,
          messages: [
            {
              
              date: '',
              text: 'Inizia a chattare',
              status: 'noMessages'
              
          }
          ],
          }
          ]
      }
    },
    methods: {
      lastMessage(index) {
        let i = 0
        for (message in this.contacts[index].messages){
          i++
        }
        return this.contacts[index].messages[i - 1]
      },
      submitMessage(index){
        if (!this.newText.replace(/\s/g, '').length == false){
          let now = DateTime.now().toFormat("dd/MM/yyyy HH:mm:ss")
          let thisContact = this.contacts[index]
          if (this.contacts[this.activeIndex].messages[0].status == 'noMessages'){
            this.contacts[this.activeIndex].messages = [{
              date: now,
              text: this.newText,
              status: 'sent'
            }]
          }
          else{
            let newMessage = {
            date: now,
            text: this.newText,
            status: 'sent'
          }
            thisContact.messages.push(newMessage)
          }
          this.newText = ''
          let reply = {
            date: now,
            text: 'ok',
            status: 'received'
          }
          setTimeout(function(){
            thisContact.messages.push(reply)
          }, 1000)
      }
      },
      formatTime(dateTime){
        time = DateTime.fromFormat(dateTime, "dd/MM/yyyy HH:mm:ss").toLocaleString(DateTime.TIME_SIMPLE);
        
        return time
      },
      addUserButton() {
        this.addContactDisplay = true
        this.homeDisplay = false
        this.activeChatDisplay = false
        if (window.innerWidth <= 768){
          this.homeDisplay = false
          this.activeChatDisplay = false
          this.chatsListDisplay = true
        }
      },
      addUserBackButton(){
        this.addContactDisplay = false
        this.chatsListDisplay = true
        if (window.innerWidth > 768) {
          this.activeChatDisplay = true
        }
      },
      addUser() {
        let imgURL = this.sampleImages[this.sampleIndex]
        let userName = this.sampleName 
        if (!this.sampleName.replace(/\s/g, '').length == false) {
          this.contacts.push(
            {
              name: userName,
              avatar: imgURL,
              visible: true,
              messages: [
                {
                  
                  date: '',
                  text: 'Inizia a chattare',
                  status: 'noMessages'
                  
              }
              ],
              })
            let arrLenght = this.contacts.length
            this.addContactDisplay = false
            this.activeChatDisplay = true
            this.activeIndex = arrLenght - 1
            this.sampleName = ''
        }

      },
      searchOnString(){
        for (index in this.contacts){
            let typed = this.search.toUpperCase()
            let userName = this.contacts[index].name.toUpperCase()
            if (userName.includes(typed)){
              this.contacts[index].visible = true
            }
            else {
              this.contacts[index].visible = false
            }
        
        }
      },
      deleteThisMessage(index){
        if (this.contacts[this.activeIndex].messages.length == 1) {
          this.contacts[this.activeIndex].messages = [
            {
              
                date: '',
                text: 'Inizia a chattare',
                status: 'noMessages'
                
            }
          ]
        }
        else {
          let removedMessage= this.contacts[this.activeIndex].messages.splice(index, 1)[index]
        }
      },
      deleteChat(){
        this.contacts[this.activeIndex].messages = [
          {
            
              date: '',
              text: 'Inizia a chattare',
              status: 'noMessages'
              
          }
        ]
        this.activeIndex++
      },
      onResize() {
        if (this.homeDisplay == true) {
          this.activeChatDisplay = false
        }
        if (window.innerWidth <= 768 && (this.activeChatDisplay == true || this.homeDisplay == true)) {
          if (this.homeDisplay == true) {
            this.homeDisplay = false
            this.activeChatDisplay = false
            this.chatsListDisplay = true
          }
          else if (this.addContactDisplay == true) {
            this.chatsListDisplay = true
            this.homeDisplay = false
            this.activeChatDisplay = false
          }
          else if (this.activeChatDisplay == true){
            this.homeDisplay = false
            this.activeChatDisplay = true
            this.chatsListDisplay = false
          }
        }
        if (window.innerWidth > 768){
          this.chatsListDisplay = true
          if (this.addContactDisplay == false && this.homeDisplay == false){
            this.activeChatDisplay = true
          }
        }
        
      },
      contactOnClick() {
        this.activeChatDisplay = true
        this.homeDisplay = false
        this.addContactDisplay = false
        if (window.innerWidth <= 768) {
          this.chatsListDisplay = false
      }
      },
      activeChatBackButton() {
        if (window.innerWidth <= 768) {
          this.activeChatDisplay = false
          this.chatsListDisplay = true
      }
      }
    },
    created() {
      this.homeDisplay = true
      this.activeChatDisplay = false
      if (window.innerWidth < 768) {
        this.homeDisplay = false
    }
      window.addEventListener('resize', this.onResize)
    },
    
    beforeDestroy() {
      window.removeEventListener('resize', this.onResize)
    },
    
  }).mount('#app')