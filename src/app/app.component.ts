import { Component, OnInit, } from '@angular/core';
import {Movie} from './movies';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    rowsLength = 5;
    placesLength = 8;
    rows = [];
    places = [];
    hall = [];
    busy = false;
    json: string;
    payload: any;
    loaded = [];
    movie: Movie;
    buyVisible = false;
    searchVisible = true;
    filteredOff = [];
    movies = [
      {
        id: 0,
        title: 'Влада',
        description: 'Усі знають, що світом керують гроші і влада. Коли з’являється людина, що відрізняється унікальними розумовими здібностями і винятковим даром переконання, вона може проникнути на найвищі рівні і, ховаючись у тіні, стати для великих світу цього справжнім ляльководом…',
        genre: 'Comedy',
        startTime: '19:00',
        duration: '127 хв.',
        dateOfRelease: '2019',
        ticketPrice: '69 грн.',
        img: 'https://s3.vcdn.biz/static/f/1623934191/image.jpg/pt/r300x423'
      },
      {
        id: 1,
        title: 'Як приборкати дракона 3: Прихований свiт',
        description: 'До уваги глядачів третя серія пригод вікінга Іккінга та дракона Беззубіка. На жаль, вже відомо, що ця стрічка стане завершальною в трилогії і буде присвячена тому, як розійдуться шляхи головних героїв. У цю частину повернеться дракон Блудвіст.',
        genre: 'Adventure',
        startTime: '17:00',
        duration: '104 хв.',
        dateOfRelease: '2019',
        ticketPrice: '99 грн.',
        img: 'https://s8.vcdn.biz/static/f/1639964051/image.jpg/pt/r300x423'
      },
      {
        id: 2,
        title: 'Lego Фiльм 2',
        description: 'Продовження знаменитого хіта 2014 року про іграшкові фігурки, які проживають в світі дитячого конструктора Лего. Точний сюжет картини поки невідомий, проте варто сподіватися, що в стрічку повернуться всі найцікавіші персонажі з його попередника.',
        genre: 'Adventure',
        startTime: '15:00',
        duration: '102 хв.',
        dateOfRelease: '2019',
        ticketPrice: '89 грн.',
        img: 'https://s6.vcdn.biz/static/f/1638729591/image.jpg/pt/r300x423'
      },
      {
        id: 3,
        title: 'Крід II: Спадок Роккі Бальбоа',
        description: 'Потомствений боксер Андоніс Крід повертається на ринг… Його тренує Рокі Бальбоа – знаменитий чемпіон, за сумісництвом старий друг батька Андоніса, якого багато років тому вбив на рингу Іван Драго – тренер і батько російського бійця Віктора. Рокі та Андоніс готові боротися з найголовнішим суперником у їхньому житті.',
        genre: 'Drama',
        startTime: '13:00',
        duration: '129 хв.',
        dateOfRelease: '2018',
        ticketPrice: '39 грн.',
        img: 'https://s3.vcdn.biz/static/f/1614017631/image.jpg/pt/r300x423'
      },
      {
        id: 4,
        title: 'Анігіляція',
        description: 'Зона Ікс - моторошне місце, повне небезпечних пасток і аномалій. Невідомо звідки з\'явилася ця територія, ось тільки живим з неї мало хто повертався. Одинадцять експедицій було загублено в цій зоні, і ось, чотири жінки - біолог, психолог, топограф і антрополог, збираються ризикнути всім, щоб дізнатися істину існування цього місця.',
        genre: 'Adventure',
        startTime: '11:00',
        duration: '110 хв.',
        dateOfRelease: '2019',
        ticketPrice: '29 грн.',
        img: 'https://s4.vcdn.biz/static/f/1632012061/image.jpg/pt/r300x423'
      },
      {
        id: 5,
        title: 'Море спокуси',
        description: 'Чоловік відданий морю, палючому сонцю, вітру і своєму кораблю. Його життя — суцільний ризик, а єдина жінка, яку він кохав, уже давно заміжня. Раптово вона знову вривається в його життя і благає про допомогу. З цього моменту розмірене життя моряка бушує ураганом спокуси.',
        genre: 'Crime',
        startTime: '9:00',
        duration: '101 хв.',
        dateOfRelease: '2019',
        ticketPrice: '49 грн.',
        img: 'https://s9.vcdn.biz/static/f/1456513011/image.jpg/pt/r300x423'
      },
      {
        id: 6,
        title: 'Усі гроші світу',
        description: 'Драматичні події розгортаються в родині найбагатшої людини в світі. Невідомі люди викрадають його онука і вимагають викуп. Пол Гетті володіє світом, але не погоджується платити викрадачам. Надією матері на порятунок сина стає загадковий працівник охорони Гетті.',
        genre: 'Crime',
        startTime: '21:00',
        duration: '132 хв.',
        dateOfRelease: '2018',
        ticketPrice: '69 грн.',
        img: 'https://s4.vcdn.biz/static/f/1230477781/image.jpg/pt/r300x423'
      },
      {
        id: 7,
        title: 'Півтора шпигуна',
        description: 'Через двадцять років Кельвін і Роббі зустрічаються на вечорі випускників. Раніше популярний в школі баскетболіст Кельвін перетворився на фінансового аналітика, а товстун Роббі - на накачаного громилу. Найнесподіванішим виявляється те, що Роббі тепер працівник ЦРУ, про що його однокласник дізнається, коли потрапляє під кулі, призначені для агента.',
        genre: 'Action',
        startTime: '23:00',
        duration: '107 хв.',
        dateOfRelease: '2016',
        ticketPrice: '169 грн.',
        img: 'https://s2.vcdn.biz/static/f/1621883891/image.jpg/pt/r300x423'
      },
      {
        id: 8,
        title: 'Вітряна ріка',
        description: '"Вітряна річка" - індійська резервація, яка опинилася під пильною увагою агента ФБР Джейн Беннер. Убито молоду дівчину. У незвіданому світі допомогу агенту надає Корі Ламберт, в минулому якого теж все не безхмарно і просто. Чи зможуть вони разом перемогти зло?',
        genre: 'Action',
        startTime: '7:00',
        duration: '102 хв.',
        dateOfRelease: '2017',
        ticketPrice: '59 грн.',
        img: 'https://s4.vcdn.biz/static/f/1054453981/image.jpg/pt/r300x423'
      },
      {
        id: 9,
        title: 'Еверест',
        description: 'Еверест - велика неприступна гора, підкорити вершину яку мріють багато професійних скелелазів. Одна з експедицій на її вершину закінчилася справжньою трагедією, однак цей факт не зупиняє відважних альпіністів. Роб Хол довгий час мріяв підкорити цю неприступну гору і одного разу йому випав такий шанс. Зібравши групу з кращих альпіністів, він як ніколи наблизився до своєї заповітної мрії. Всі ці люд..',
        genre: 'Drama',
        startTime: '5:00',
        duration: '121 хв.',
        dateOfRelease: '2015',
        ticketPrice: '19 грн.',
        img: 'https://s2.vcdn.biz/static/f/1590403241/image.jpg/pt/r300x423'
      }

    ];
  movieClicked(movie) {
      this.buyVisible = true;
      this.searchVisible = false;
      this.movie = movie;
  }
  hide(e) {
      this.buyVisible = false;
      this.searchVisible = true;
      this.filter(e);
  }
  buy() {
    this.json = JSON.stringify(this.loaded).replace(/book/g, 'busy');
    localStorage.setItem('payload', this.json);
    this.ngOnInit();
  }
  clear() {
    this.json = JSON.stringify(this.loaded).replace(/busy/g, '').replace(/book/g, '');
    localStorage.setItem('payload', this.json);
    this.ngOnInit();
  }
  getColor(placeMode) {
    switch (placeMode) {
      case '':
        return 'white';
      case 'book':
        return 'yellow';
      case 'busy':
        return 'red';
    }
  }
  filter(e) {
    let arr = [];
    this.movies = [];
    this.movies = (JSON.parse(JSON.stringify(this.filteredOff)));
    if (e !== 'All') {
      while (this.movies.length > 0) {
        if (this.movies[0].genre === e) {
          arr.push(this.movies.splice(0, 1)[0]);
        } else {this.movies.splice(0, 1); }
      }
      this.movies = (JSON.parse(JSON.stringify(arr)));
    }
  }
  setClicked($event) {
    const movieValue = $event.target.parentElement.parentElement.previousSibling.firstChild.data.replace(' index: ', '');
    const rowArr = $event.target.id.split(';');
    const rowValue = rowArr[0].replace('R', '');
    const placeValue = rowArr[1].replace('S', '');
    if (this.loaded[movieValue][rowValue - 1][placeValue - 1] !== 'busy') {
     if (this.loaded[movieValue][rowValue - 1][placeValue - 1] !== 'book') {
       this.loaded[movieValue][rowValue - 1][placeValue - 1] = 'book';
     } else {
       this.loaded[movieValue][rowValue - 1][placeValue - 1] = '';
     }
    }
  }
  ngOnInit() {
    this.filteredOff = (JSON.parse(JSON.stringify(this.movies)));
    const moviesLength = this.movies.length;
    for (let p = 0; p < this.placesLength; p++) {
      this.places.push('');
    }

    for (let r = 0; r < this.rowsLength; r++) {
      this.rows.push(JSON.parse(JSON.stringify(this.places)));
    }

    for (let m = 0; m < moviesLength; m++) {
      this.loaded.push(JSON.parse(JSON.stringify(this.rows)));
    }
    this.payload = JSON.parse(localStorage.getItem('payload'));
     if (this.payload) {
       this.loaded = this.payload;
     }
     console.log(this.loaded);
  }
}
