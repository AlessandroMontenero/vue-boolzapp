
const { createApp } = Vue
let DateTime = luxon.DateTime;


  createApp({
    data() {
      return {
        activeIndex: 0,
        newText: '',
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
        let now = DateTime.now().toFormat("dd/MM/yyyy HH:mm:ss")
        let thisContact = this.contacts[index]
        let newMessage = {
          date: now,
          text: this.newText,
          status: 'sent'
        }
        let reply = {
          date: now,
          text: 'ok',
          status: 'received'
        }
        thisContact.messages.push(newMessage)
        this.newText = ''
        setTimeout(function(){
          thisContact.messages.push(reply)
        }, 1000)
      },
      formatTime(dateTime){
        time = DateTime.fromFormat(dateTime, "dd/MM/yyyy HH:mm:ss").toLocaleString(DateTime.TIME_SIMPLE);
        
        return time
      },
    }
  }).mount('#app')