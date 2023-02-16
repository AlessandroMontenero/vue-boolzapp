
const { createApp } = Vue

let DateTime = luxon.DateTime;


  let boolzapp = createApp({
    data() {
      return {
        activeIndex: 0,
        newText: '',
        search: '',
        chatsListDisplay: true,
        activeChatDisplay: true,
        homeDisplay: false,
        addContactDisplay: false,
        lastLoginDisplay: 'block',
        isTypingDisplay: 'none',
        emojiContainerDisplay: 'none',
        notificationBannerDisplay: true,
        isOnline: false,
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
          status: 'sent',
          readed: true
          },
          {
          date: '10/01/2020 15:50:00',
          text: 'Ricordati di stendere i panni',
          status: 'sent',
          readed: true
          },
          {
          date: '10/01/2020 16:15:22',
          text: 'Tutto fatto!',
          status: 'received',
          readed: true
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
          status: 'sent',
          readed: true
          },
          {
          date: '20/03/2020 16:30:55',
          text: 'Bene grazie! Stasera ci vediamo?',
          status: 'received',
          readed: true
          },
          {
          date: '20/03/2020 16:35:00',
          text: 'Mi piacerebbe ma devo andare a fare la spesa.',
          status: 'sent',
          readed: true
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
          status: 'received',
          readed: true
          },
          {
          date: '28/03/2020 10:20:10',
          text: 'Sicuro di non aver sbagliato chat?',
          status: 'sent',
          readed: true
          },
          {
          date: '28/03/2020 16:15:22',
          text: 'Ah scusa!',
          status: 'received',
          readed: true
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
          status: 'sent',
          readed: true
          },
          {
          date: '10/01/2020 15:50:00',
          text: 'Si, ma preferirei andare al cinema',
          status: 'received',
          readed: true
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
          status: 'sent',
          readed: true
          },
          {
          date: '10/01/2020 15:50:00',
          text: 'Va bene, stasera la sento',
          status: 'received',
          readed: true
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
          status: 'sent',
          readed: true
          },
          {
          date: '10/01/2020 15:50:00',
          text: 'Non ancora',
          status: 'received',
          readed: true
          },
          {
          date: '10/01/2020 15:51:00',
          text: 'Nessuna nuova, buona nuova',
          status: 'sent',
          readed: true
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
          status: 'sent',
          readed: true
          },
          {
          date: '10/01/2020 15:50:00',
          text: 'Grazie per avermelo ricordato, le scrivo subito!',
          status: 'received',
          readed: true
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
          status: 'received',
          readed: true
          },
          {
          date: '10/01/2020 15:50:00',
          text: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
          status: 'sent',
          readed: true
          },
          {
          date: '10/01/2020 15:51:00',
          text: 'OK!!',
          status: 'received',
          readed: true
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
              status: 'noMessages',
              readed: true
              
          }
          ],
          }
          ],
          allEmojis: ["😀","😁","😂","😃","😄","😅","😆","😇","😈","👿","😉","😊","😋","😌","😍","😎","😏","😐","😑","😒","😓","😔","😕","😖","😗","😘","😙","😚","😛","😜","😝","😞","😟","😠","😡","😢","😣","😤","😥","😦","😧","😨","😩","😪","😫","😬","😭","😮","😯","😰","😱","😲","😳","😴","😵","😶","😷","😸","😹","😺","😻","😼","😽","😾","😿","🙀","👣","👤","👥","👶","👶🏻","👶🏼","👶🏽","👶🏾","👶🏿","👦","👦🏻","👦🏼","👦🏽","👦🏾","👦🏿","👧","👧🏻","👧🏼","👧🏽","👧🏾","👧🏿","👨","👨🏻","👨🏼","👨🏽","👨🏾","👨🏿","👩","👩🏻","👩🏼","👩🏽","👩🏾","👩🏿","👪","👨‍👩‍👧","👨‍👩‍👧‍👦","👨‍👩‍👦‍👦","👨‍👩‍👧‍👧","👩‍👩‍👦","👩‍👩‍👧","👩‍👩‍👧‍👦","👩‍👩‍👦‍👦","👩‍👩‍👧‍👧","👨‍👨‍👦","👨‍👨‍👧","👨‍👨‍👧‍👦","👨‍👨‍👦‍👦","👨‍👨‍👧‍👧","👫","👬","👭","👯","👰","👰🏻","👰🏼","👰🏽","👰🏾","👰🏿","👱","👱🏻","👱🏼","👱🏽","👱🏾","👱🏿","👲","👲🏻","👲🏼","👲🏽","👲🏾","👲🏿","👳","👳🏻","👳🏼","👳🏽","👳🏾","👳🏿","👴","👴🏻","👴🏼","👴🏽","👴🏾","👴🏿","👵","👵🏻","👵🏼","👵🏽","👵🏾","👵🏿","👮","👮🏻","👮🏼","👮🏽","👮🏾","👮🏿","👷","👷🏻","👷🏼","👷🏽","👷🏾","👷🏿","👸","👸🏻","👸🏼","👸🏽","👸🏾","👸🏿","💂","💂🏻","💂🏼","💂🏽","💂🏾","💂🏿","👼","👼🏻","👼🏼","👼🏽","👼🏾","👼🏿","🎅","🎅🏻","🎅🏼","🎅🏽","🎅🏾","🎅🏿","👻","👹","👺","💩","💀","👽","👾","🙇","🙇🏻","🙇🏼","🙇🏽","🙇🏾","🙇🏿","💁","💁🏻","💁🏼","💁🏽","💁🏾","💁🏿","🙅","🙅🏻","🙅🏼","🙅🏽","🙅🏾","🙅🏿","🙆","🙆🏻","🙆🏼","🙆🏽","🙆🏾","🙆🏿","🙋","🙋🏻","🙋🏼","🙋🏽","🙋🏾","🙋🏿","🙎","🙎🏻","🙎🏼","🙎🏽","🙎🏾","🙎🏿","🙍","🙍🏻","🙍🏼","🙍🏽","🙍🏾","🙍🏿","💆","💆🏻","💆🏼","💆🏽","💆🏾","💆🏿","💇","💇🏻","💇🏼","💇🏽","💇🏾","💇🏿","💑","👩‍❤️‍👩","👨‍❤️‍👨","💏","👩‍❤️‍💋‍👩","👨‍❤️‍💋‍👨","🙌","🙌🏻","🙌🏼","🙌🏽","🙌🏾","🙌🏿","👏","👏🏻","👏🏼","👏🏽","👏🏾","👏🏿","👂","👂🏻","👂🏼","👂🏽","👂🏾","👂🏿","👀","👃","👃🏻","👃🏼","👃🏽","👃🏾","👃🏿","👄","💋","👅","💅","💅🏻","💅🏼","💅🏽","💅🏾","💅🏿","👋","👋🏻","👋🏼","👋🏽","👋🏾","👋🏿","👍","👍🏻","👍🏼","👍🏽","👍🏾","👍🏿","👎","👎🏻","👎🏼","👎🏽","👎🏾","👎🏿","☝","☝🏻","☝🏼","☝🏽","☝🏾","☝🏿","👆","👆🏻","👆🏼","👆🏽","👆🏾","👆🏿","👇","👇🏻","👇🏼","👇🏽","👇🏾","👇🏿","👈","👈🏻","👈🏼","👈🏽","👈🏾","👈🏿","👉","👉🏻","👉🏼","👉🏽","👉🏾","👉🏿","👌","👌🏻","👌🏼","👌🏽","👌🏾","👌🏿","✌","✌🏻","✌🏼","✌🏽","✌🏾","✌🏿","👊","👊🏻","👊🏼","👊🏽","👊🏾","👊🏿","✊","✊🏻","✊🏼","✊🏽","✊🏾","✊🏿","✋","✋🏻","✋🏼","✋🏽","✋🏾","✋🏿","💪","💪🏻","💪🏼","💪🏽","💪🏾","💪🏿","👐","👐🏻","👐🏼","👐🏽","👐🏾","👐🏿","🙏","🙏🏻","🙏🏼","🙏🏽","🙏🏾","🙏🏿","🌱","🌲","🌳","🌴","🌵","🌷","🌸","🌹","🌺","🌻","🌼","💐","🌾","🌿","🍀","🍁","🍂","🍃","🍄","🌰","🐀","🐁","🐭","🐹","🐂","🐃","🐄","🐮","🐅","🐆","🐯","🐇","🐰","🐈","🐱","🐎","🐴","🐏","🐑","🐐","🐓","🐔","🐤","🐣","🐥","🐦","🐧","🐘","🐪","🐫","🐗","🐖","🐷","🐽","🐕","🐩","🐶","🐺","🐻","🐨","🐼","🐵","🙈","🙉","🙊","🐒","🐉","🐲","🐊","🐍","🐢","🐸","🐋","🐳","🐬","🐙","🐟","🐠","🐡","🐚","🐌","🐛","🐜","🐝","🐞","🐾","⚡️","🔥","🌙","☀️","⛅️","☁️","💧","💦","☔️","💨","❄️","🌟","⭐️","🌠","🌄","🌅","🌈","🌊","🌋","🌌","🗻","🗾","🌐","🌍","🌎","🌏","🌑","🌒","🌓","🌔","🌕","🌖","🌗","🌘","🌚","🌝","🌛","🌜","🌞","🍅","🍆","🌽","🍠","🍇","🍈","🍉","🍊","🍋","🍌","🍍","🍎","🍏","🍐","🍑","🍒","🍓","🍔","🍕","🍖","🍗","🍘","🍙","🍚","🍛","🍜","🍝","🍞","🍟","🍡","🍢","🍣","🍤","🍥","🍦","🍧","🍨","🍩","🍪","🍫","🍬","🍭","🍮","🍯","🍰","🍱","🍲","🍳","🍴","🍵","☕️","🍶","🍷","🍸","🍹","🍺","🍻","🍼","🎀","🎁","🎂","🎃","🎄","🎋","🎍","🎑","🎆","🎇","🎉","🎊","🎈","💫","✨","💥","🎓","👑","🎎","🎏","🎐","🎌","🏮","💍","❤️","💔","💌","💕","💞","💓","💗","💖","💘","💝","💟","💜","💛","💚","💙","🏃","🏃🏻","🏃🏼","🏃🏽","🏃🏾","🏃🏿","🚶","🚶🏻","🚶🏼","🚶🏽","🚶🏾","🚶🏿","💃","💃🏻","💃🏼","💃🏽","💃🏾","💃🏿","🚣","🚣🏻","🚣🏼","🚣🏽","🚣🏾","🚣🏿","🏊","🏊🏻","🏊🏼","🏊🏽","🏊🏾","🏊🏿","🏄","🏄🏻","🏄🏼","🏄🏽","🏄🏾","🏄🏿","🛀","🛀🏻","🛀🏼","🛀🏽","🛀🏾","🛀🏿","🏂","🎿","⛄️","🚴","🚴🏻","🚴🏼","🚴🏽","🚴🏾","🚴🏿","🚵","🚵🏻","🚵🏼","🚵🏽","🚵🏾","🚵🏿","🏇","🏇🏻","🏇🏼","🏇🏽","🏇🏾","🏇🏿","⛺️","🎣","⚽️","🏀","🏈","⚾️","🎾","🏉","⛳️","🏆","🎽","🏁","🎹","🎸","🎻","🎷","🎺","🎵","🎶","🎼","🎧","🎤","🎭","🎫","🎩","🎪","🎬","🎨","🎯","🎱","🎳","🎰","🎲","🎮","🎴","🃏","🀄️","🎠","🎡","🎢","🚃","🚞","🚂","🚋","🚝","🚄","🚅","🚆","🚇","🚈","🚉","🚊","🚌","🚍","🚎","🚐","🚑","🚒","🚓","🚔","🚨","🚕","🚖","🚗","🚘","🚙","🚚","🚛","🚜","🚲","🚏","⛽️","🚧","🚦","🚥","🚀","🚁","✈️","💺","⚓️","🚢","🚤","⛵️","🚡","🚠","🚟","🛂","🛃","🛄","🛅","💴","💶","💷","💵","🗽","🗿","🌁","🗼","⛲️","🏰","🏯","🌇","🌆","🌃","🌉","🏠","🏡","🏢","🏬","🏭","🏣","🏤","🏥","🏦","🏨","🏩","💒","⛪️","🏪","🏫","🇦🇺","🇦🇹","🇧🇪","🇧🇷","🇨🇦","🇨🇱","🇨🇳","🇨🇴","🇩🇰","🇫🇮","🇫🇷","🇩🇪","🇭🇰","🇮🇳","🇮🇩","🇮🇪","🇮🇱","🇮🇹","🇯🇵","🇰🇷","🇲🇴","🇲🇾","🇲🇽","🇳🇱","🇳🇿","🇳🇴","🇵🇭","🇵🇱","🇵🇹","🇵🇷","🇷🇺","🇸🇦","🇸🇬","🇿🇦","🇪🇸","🇸🇪","🇨🇭","🇹🇷","🇬🇧","🇺🇸","🇦🇪","🇻🇳","⌚️","📱","📲","💻","⏰","⏳","⌛️","📷","📹","🎥","📺","📻","📟","📞","☎️","📠","💽","💾","💿","📀","📼","🔋","🔌","💡","🔦","📡","💳","💸","💰","💎","🌂","👝","👛","👜","💼","🎒","💄","👓","👒","👡","👠","👢","👞","👟","👙","👗","👘","👚","👕","👔","👖","🚪","🚿","🛁","🚽","💈","💉","💊","🔬","🔭","🔮","🔧","🔪","🔩","🔨","💣","🚬","🔫","🔖","📰","🔑","✉️","📩","📨","📧","📥","📤","📦","📯","📮","📪","📫","📬","📭","📄","📃","📑","📈","📉","📊","📅","📆","🔅","🔆","📜","📋","📖","📓","📔","📒","📕","📗","📘","📙","📚","📇","🔗","📎","📌","✂️","📐","📍","📏","🚩","📁","📂","✒️","✏️","📝","🔏","🔐","🔒","🔓","📣","📢","🔈","🔉","🔊","🔇","💤","🔔","🔕","💭","💬","🚸","🔍","🔎","🚫","⛔️","📛","🚷","🚯","🚳","🚱","📵","🔞","🉑","🉐","💮","㊙️","㊗️","🈴","🈵","🈲","🈶","🈚️","🈸","🈺","🈷","🈹","🈳","🈂","🈁","🈯️","💹","❇️","✳️","❎","✅","✴️","📳","📴","🆚","🅰","🅱","🆎","🆑","🅾","🆘","🆔","🅿️","🚾","🆒","🆓","🆕","🆖","🆗","🆙","🏧","♈️","♉️","♊️","♋️","♌️","♍️","♎️","♏️","♐️","♑️","♒️","♓️","🚻","🚹","🚺","🚼","♿️","🚰","🚭","🚮","▶️","◀️","🔼","🔽","⏩","⏪","⏫","⏬","➡️","⬅️","⬆️","⬇️","↗️","↘️","↙️","↖️","↕️","↔️","🔄","↪️","↩️","⤴️","⤵️","🔀","🔁","🔂","#⃣","0⃣","1⃣","2⃣","3⃣","4⃣","5⃣","6⃣","7⃣","8⃣","9⃣","🔟","🔢","🔤","🔡","🔠","ℹ️","📶","🎦","🔣","➕","➖","〰","➗","✖️","✔️","🔃","™","©","®","💱","💲","➰","➿","〽️","❗️","❓","❕","❔","‼️","⁉️","❌","⭕️","💯","🔚","🔙","🔛","🔝","🔜","🌀","Ⓜ️","⛎","🔯","🔰","🔱","⚠️","♨️","♻️","💢","💠","♠️","♣️","♥️","♦️","☑️","⚪️","⚫️","🔘","🔴","🔵","🔺","🔻","🔸","🔹","🔶","🔷","▪️","▫️","⬛️","⬜️","◼️","◻️","◾️","◽️","🔲","🔳","🕐","🕑","🕒","🕓","🕔","🕕","🕖","🕗","🕘","🕙","🕚","🕛","🕜","🕝","🕞","🕟","🕠","🕡","🕢","🕣","🕤","🕥","🕦","🕧"]

      }
    },
    methods: {
      isTypingFunct(){
        this.lastLoginDisplay = 'none'
        this.isTypingDisplay = 'block'
      },
      notTypingFunct(){
        this.isTypingDisplay = 'none'
        this.lastLoginDisplay = 'block'
      },
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
              status: 'sent',
              readed: false
            }]
          }
          else{
            let newMessage = {
              date: now,
              text: this.newText,
              status: 'sent',
              readed: false
            }
            thisContact.messages.push(newMessage)
            this.sendReply(index)
          }
          this.newText = ''
        }
      },
      sendReply(index) {
        let now = DateTime.now().toFormat("dd/MM/yyyy HH:mm:ss")
        let repliesText = [
          "Qual'è la più grande bugia dell'universo ?. 'Ho letto e accetto i termini e le condizioni'",
          "Ci sono 10 tipi di persone al mondo; quelli che capiscono il codice binario, e quelli che non lo capiscono",
          "Windows vista può realmente lavorare in multitasking, riesce ad avviarsi e a crashare simultaneamente.",
          "Quando un computer prende un virus, come viene definito? Malato terminale.",
          " Cosa fa un uccellino di un milligrammo su un ramo? Micro-cip… micro-cip…",
          "Errare e' umano, ma per incasinare veramente le cose ci vuole un computer! (Quinta legge dell'inattendibilita',dalle leggi di Murphy).",
          "I computer non sono intelligenti. Pensano solo di esserlo!",
          "Quanti programmatori ci vogliono per avvitare una lampadina? Nessuno, e' un problema hardware!",
          "I computer sono inutili. Ti sanno dare solo risposte!"
        ]
        let repliesNumber = repliesText.length
        let chosenReply = Math.floor(Math.random() * repliesNumber)
        let reply = {
          date: now,
          text: repliesText[chosenReply],
          status: 'received',
          readed: false
        }
        let thisContact = this.contacts[index]
        let i = 0
        for (msgNumber in thisContact.messages) {
          i++
        }
        let timeBeforeOnline = (Math.floor(Math.random() * 2) * 1000) + 1000
        let timeBeforeRead = Math.floor(Math.random() * 2) * 1000 + timeBeforeOnline + 1000
        let timeBeforeReply = timeBeforeRead + (Math.floor(Math.random() * 2) * 1000) + 1000
        setTimeout(function(){
          boolzapp.isOnline = true
          thisContact.messages[i - 1].readed = true
        },timeBeforeOnline)
        setTimeout(function(){
          boolzapp.isTypingFunct()
        }, timeBeforeRead)
        setTimeout(function(){
          thisContact.messages.push(reply)
          boolzapp.notTypingFunct()
          boolzapp.isOnline = false
        }, timeBeforeReply)

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
                  status: 'noMessages',
                  readed: true
                  
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
                status: 'noMessages',
                readed: true
                
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
              status: 'noMessages',
              readed: true
              
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
        if (window.innerWidth <= 769) {
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