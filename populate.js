const db = require('./models/db');

const populateEggs = db.connection.then(() => db.eggs.insertMany([
  { 'name': 'Shonen', 'photo': 'https://cdn.mylittleLegendlist.net/images/littleLegend/1460/109155.jpg' },
  { 'name': 'Horror', 'photo': 'https://cdn.mylittleLegendlist.net/images/littleLegend/6/7333.jpg' }
]));

const populateLittleLegends = db.connection.then(() => db.littleLegends.insertMany([
  {
    'photo': 'https://cdn.mylittleLegendlist.net/images/littleLegend/1460/109155l.jpg',
    'egg': 'Shonen', 'price': 15000, 'stock': 35,
    'name': 'One Piece',
    'description': 'One Piece is a Japanese manga series written and illustrated by Eiichiro Oda. It has '
      .concat('been serialized in Shueisha\'s Weekly Shōnen Jump magazine since July 1997, with its ')
      .concat('individual chapters compiled into 97 tankōbon volumes as of September 2020. The story ')
      .concat('follows the adventures of Monkey D. Luffy, a boy whose body gained the properties of ')
      .concat('rubber after unintentionally eating a Devil Fruit. With his crew of pirates, named the ')
      .concat('Straw Hat Pirates, Luffy explores the Grand Line in search of the worldi\'s ultimate ')
      .concat('treasure known as "One Piece" in order to become the next King of the Pirates. In August ')
      .concat('2020, it was announced that One Piece was approaching its final arc.')
  },
  {
    'photo': 'https://cdn.mylittleLegendlist.net/images/littleLegend/1453/106768l.jpg',
    'egg': 'Shonen', 'price': 6000, 'stock': 22,
    'name': 'Haikyuu !!',
    'description': 'Haikyu!! (Japanese: ハイキュー!!, Hepburn: Haikyū!!, from the kanji 排球 "volleyball") '
      .concat('is a Japanese manga series written and illustrated by Haruichi Furudate. The story ')
      .concat('follows Shōyō Hinata, a boy determined to become a great volleyball player despite ')
      .concat('his small stature. Its individual chapters were serialized in Weekly Shōnen Jump ')
      .concat('from February 2012 through July 2020. As of August 2020, forty-four tankōbon volumes ')
      .concat('have been released in Japan by Shueisha')
  },
  {
    'photo': 'https://cdn.mylittleLegendlist.net/images/littleLegend/1536/109462l.jpg',
    'egg': 'Shonen', 'price': 12000, 'stock': 23,
    'name': 'Shingeki No Kyojin',
    'description': 'Attack on Titan (Japanese: 進撃の巨人, Hepburn: Shingeki no Kyojin, lit. "The Advancing '
      .concat('Giant[s]") is a Japanese manga series written and illustrated by Hajime Isayama. It ')
      .concat('is set in a world where humanity lives within cities surrounded by enormous walls that ')
      .concat('protect them from gigantic man-eating humanoids referred to as Titans; the story follows ')
      .concat('Eren Yeager, who vows to retake the world after a Titan brings about the destruction of ')
      .concat('his home town and the death of his mother. Attack on Titan has been serialized in Kodansha ')
      .concat('monthly Bessatsu Shōnen Magazine since September 2009, and collected into 32 tankōbon ')
      .concat('volumes as of September 2020.')
  },
  {
    'photo': 'https://cdn.mylittleLegendlist.net/images/littleLegend/6/7333l.jpg',
    'egg': 'Horror', 'price': 25000, 'stock': 13,
    'name': 'Hellsing Ultimate',
    'description': 'Hellsing: Ultimate (ヘルシング Herushingu?) is an Original Video Animation series. The '
      .concat('series was created after the Hellsing littleLegend had finished, and was intended to be more true ')
      .concat('to the manga than the littleLegend was. Over the course of the years, they have changed animation ')
      .concat('studios at multiple occasions. Hellsing Ultimate 1-4 were animated by the animation studio ')
      .concat('Satelight, before Madhouse took over as of 5-7. It was then announced that a new company ')
      .concat('would be animating the final three episodes of the series; Graphinica x Kelmadick, though ')
      .concat('it is still being produced by Geneon.')

  }
]));

Promise.all([populateeggs, populateLittleLegends]).then(() =>
  console.log('done !!!'));
