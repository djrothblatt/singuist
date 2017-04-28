# coding: utf-8
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
User.create([
              { username: 'guest', password: 'password', email: 'guest@example.com' },
              { username: 'daniel', password: 'daniel', email: 'drothblatt@example.com' },
              { username: 'garnet', password: 'rubysapphire', email: 'garnet@example.com' },
              { username: 'amethyst', password: 'purplepuma', email: 'amethyst@example.com' },
              { username: 'pearl', password: 'rosequartz', email: 'pearl@example.com' },
              { username: 'greg', password: 'steven', email: 'greg@example.com' },
              { username: 'steven', password: 'cheeseburger', email: 'steven@example.com' },
              { username: 'spongebob', password: 'jellyfishing', email: 'spsqpants@example.com' },
              { username: 'patrick', password: 'thisispatrick', email: 'pstar@example.com' },
              { username: 'squidward', password: 'clarinet', email: 'stentacles@example.com' }
            ])

Track.destroy_all
Track.create([
               {
                 name: 'Txoria Txori',
                 lyrics: <<LYRICS,
Hegoak ebaki banizkio
nerea izango zen,
ez zuen aldegingo.
Bainan, honela
ez zen gehiago txoria izango
eta nik txoria nuen maite.
LYRICS
                 description: 'This is a Basque song, popular since adapted to music by Mikel Laboa',
                 language: 'Basque',
                 artist: 'Mikel Laboa'
               },
               {
                 name: 'Di Mame Iz Gegangen',
                 lyrics: <<LYRICS,
Di mame iz gegangen in mark arayn nokh koyln
hot zi mir gebrakht a meydele fun poyln.
Oy iz dos a meydele a sheyns un a feyns,
mit di shvartse eygelekh, oy ketsele du mayns.

Di mame iz gegangen in mark arayn nach kroyt,
hot zi mir gebrakht a meydele fun boyt,
Oy iz dos a meydele a sheyns un a feyns,
mit di vayse tseyndelekh, oy ketsele du mayns.

Ikh hob gegesn mandlen ikh hob getrunken vayn,
ikh hob gelibt a meydele un ken on ir nisht sayn,
oy iz dos a meydele a sheyns un a feyns,
mit di shvartse herelekh, oy ketsele du mayns
LYRICS
                 description: "This song is about a boy whose mother went out and found him a wife.",
                 language: 'Yiddish',
                 artist: 'Traditional'
               },
               {
                 name: 'Wave',
                 lyrics: <<LYRICS,
Vou te contar
Os olhos já não podem ver
Coisas que só o coração
Pode entender
Fundamental é mesmo o amor
É impossível ser feliz sozinho

O resto é mar
É tudo que eu não sei contar
São coisas lindas
Que eu tenho pra te dar
Vem de mansinho a brisa e me diz
É impossível ser feliz sozinho

Da primeira vez
Era a cidade
Da segunda o cais
E a eternidade

Agora eu já sei
Da onda que se ergueu no mar
E das estrelas
Que esquecemos de contar
O amor se deixa surpreender
Enquanto a noite
Vem nos envolver

Vou te contar
Os olhos já não podem ver
Coisas que só o coração
Pode entender
Fundamental é mesmo o amor
É impossível ser feliz sozinho

O resto é mar
É tudo que eu não sei contar
São coisas lindas
Que eu tenho pra te dar
Fundamental é mesmo o amor
É impossível ser feliz sozinho

Da primeira vez
Era a cidade
Da segunda o cais
E a eternidade

Agora eu já sei
Da onda que se ergueu no mar
E das estrelas
Que esquecemos de contar
O amor se deixa surpreender
Enquanto a noite
Vem nos envolver

Da primeira vez
Era a cidade
Da segunda o cais
E a eternidade

Agora eu já sei
Da onda que se ergueu no mar
E das estrelas
Que esquecemos de contar
O amor se deixa surpreender
Enquanto a noite
Vem nos envolver
LYRICS
                 description: "Despite the English title, this bossa nova song is in Portuguese.",
                 language: 'Portuguese',
                 artist: 'Tom Jobim'
               },
               {
                 name: "Wha'll be King But Cherlie",
                 lyrics: <<LYRICS,
The news from Moidart cam yestreen
Will soon gar mony ferlie,
For ships o war hae just come in
And landed Royal Charlie.

Come through the heather, around him gather,
Ye're all the welcomer early;
Around him cling with a your kin,
For wha'll be King but Charlie?

Come through the heather, around him gather
Come Ronald, come Donald, come a thegither;
And crown your rightfu lawfu King
For wha'll be King but Charlie?
The Highland clans with sword in hand
Frae John o Groats tae Airlie
Hae tae a man declared to stand
Or fa wi Royal Charlie.

The Lowlands a, both great an sma,
Wi many's a lord and laird hae
Declared for Scotia's King an Law,
And spier ye wha, but Charlie.

There's ne'er a lass in a the land
But vows both late and early
To man she'll neer give heart nor hand
Wha wadna fecht fer Charlie.

Then here's a health tae Charlie's cause,
And be't complete and early;
His very name our heart's bluid warms;
Tae arms for Royal Charlie.
LYRICS
                 description: "A Jacobite song to rally the Scots around Bonnie Prince Charlie",
                 language: 'Scots',
                 artist: 'Traditional'
               },
               {
                 name: 'Língua Portuguesa',
                 description: 'Portuguese is a beautiful language, and the poet who wrote this thinks so too!',
                 language: 'Portuguese',
                 artist: 'Olavo Bilac',
                 lyrics: <<LYRICS
Última flor do Lácio, inculta e bela,
És, a um tempo, esplendor e sepultura:
Ouro nativo, que na ganga impura
A bruta mina entre os cascalhos vela...

Amo-te assim, desconhecida e obscura.
Tuba de alto clangor, lira singela,
Que tens o trom e o silvo da procela,
E o arrolo da saudade e da ternura!

Amo o teu viço agreste e o teu aroma
De virgens selvas e de oceano largo!
Amo-te, ó rude e doloroso idioma,

Em que da voz materna ouvi: "meu filho!",
E em que Camões chorou, no exílio amargo,
O gênio sem ventura e o amor sem brilho!
LYRICS
               },
               {
                 name: 'Ja vi elsker dette landet',
                 description: 'The lyrics are a lot prettier in Norwegian than any attempt to translate them could possibly be. The heck is a "saga night"?',
                 language: 'Norwegian',
                 artist: 'Bjørnstjerne Bjørnson',
                 lyrics: <<LYRICS
Ja, vi elsker dette landet,
som det stiger frem,
furet, værbitt over vannet,
med de tusen hjem, —
elsker, elsker det og tenker
på vår far og mor
og den saganatt som senker
drømmer på vår jord.
Og den saganatt som senker,
senker drømmer på vår jord.

Norske mann i hus og hytte,
takk din store Gud!
Landet ville han beskytte,
skjønt det mørkt så ut.
Alt, hva fedrene har kjempet,
mødrene har grett,
har den Herre stille lempet,
så vi vant vår rett.

Ja, vi elsker dette landet,
som det stiger frem,
furet, værbitt over vannet,
med de tusen hjem.
Og som fedres kamp har hevet
det av nød til seir,
også vi, når det blir krevet,
for dets fred slår leir.
LYRICS
               },
               {
                 name: 'Mazurek Dąbrowskiego',
                 description: 'National anthem of Poland',
                 language: 'Polish',
                 artist: 'Józef Wybicki',
                 lyrics: <<LYRICS
Jeszcze Polska nie zginęła,
Kiedy my żyjemy.
Co nam obca przemoc wzięła,
Szablą odbierzemy.

Marsz, marsz, Dąbrowski,
Z ziemi włoskiej do Polski.
Za twoim przewodem
Złączym się z narodem.

Przejdziem Wisłę, przejdziem Wartę,
Będziem Polakami.
Dał nam przykład Bonaparte,
Jak zwyciężać mamy.

Marsz, marsz, Dąbrowski,
Z ziemi włoskiej do Polski.
Za twoim przewodem
Złączym się z narodem.


Jak Czarniecki do Poznania
Po szwedzkim zaborze,
Dla ojczyzny ratowania
Wrócim się przez morze.

Marsz, marsz, Dąbrowski,
Z ziemi włoskiej do Polski.
Za twoim przewodem
Złączym się z narodem.


Już tam ojciec do swej Basi
Mówi zapłakany —
Słuchaj jeno, pono nasi
Biją w tarabany.

Marsz, marsz, Dąbrowski,
Z ziemi włoskiej do Polski.
Za twoim przewodem
Złączym się z narodem.
LYRICS
               },
               {
                 name: 'Finlandia',
                 description: 'There are a *lot* of songs put to this tune. Makes sense, it is a beautiful piece.',
                 language: 'Finnish',
                 artist: 'Veikko Antero Koskenniemi',
                 lyrics: <<LYRICS
Oi, Suomi, katso, sinun päiväs' koittaa,
Yön uhka karkoitettu on jo pois,
Ja aamun kiuru kirkkaudessa soittaa,
Kuin itse taivahan kansi sois'.
Yön vallat aamun valkeus jo voittaa,
Sun päiväs' koittaa, oi synnyinmaa.

Oi, nouse, Suomi, nosta korkealle,
Pääs' seppelöimä suurten muistojen.
Oi, nouse, Suomi, näytit maailmalle,
Sa että karkoitit orjuuden,
Ja ettet taipunut sa sorron alle,
On aamus' alkanut, synnyinmaa.
LYRICS
               },
               {
                 name: 'Korobeiniki',
                 description: "You know this song from Tetris. Unless you're Russian. Then you know it from being Russian.",
                 language: 'Russian',
                 artist: '???',
                 lyrics: <<LYRICS
Ой, полным, полна моя коробушка
Есть и ситец, и парча.
Пожалей, душа моя, зазнобушка,
Молодецкого плеча!
Пожалей, душа моя, зазнобушка,
Молодецкого плеча!
 
Выйдy, выйдy в рожь высокую
Там до ночки погожу.
А завижу черноокую
Все товары разложу.
А завижу черноокую
Все товары разложу.
 
Цены сам платил немалые,
Не торгуйся, не скупись:
Подставляй-ка губы алые,
Ближе к молодцу садись.
Подставляй-ка губы алые,
Ближе к молодцу садись.
 
Вот уж пала ночь туманная,
Ждет удалый молодец.
Вот, идет- пришла желанная,
Продает товар купец.
Вот, идет- пришла желанная,
Продает товар купец.
 
Девка бережно торгуется
Все боится передать.
Парень с девицей целуется
Просит цену набавлять.
Парень с девицей целуется
Просит цену набавлять.
 
Знает только ночь глубокая
Как поладили они.
Распрямись ты, рожь высокая,
Тайну свято сохрани!
Распрямись ты, рожь высокая,
Тайну свято сохрани!
 
Ой! Легка, легка коробушка,
Плеч не режет ремешок!
А всего взяла зазнобушка
Бирюзовый перстенек.
А всего взяла зазнобушка
Бирюзовый перстенек.
 
Дал ей ситцу штуку целую,
Ленту алую для кос.
Поясок-рубаху белую
Подпоясать в сенокос.
Поясок-рубаху белую
Подпоясать в сенокос.
 
Все поклала ненаглядная
В короб кроме перстенька:
"Не хочу ходить нарядная
Без сердечного дружка!
Не хочу ходить нарядная
Без сердечного дружка!"
LYRICS
               },
               {
                 name: 'Tumbalalaika',
                 description: "This is probably the most popular Yiddish song. It's pretty good. Balalaikas are prohibitively expensive, though.",
                 artist: 'Traditional',
                 language: 'Yiddish',
                 lyrics: <<LYRICS
Shteyt a bocher, shteyt un tracht, 
tracht un tracht a gantze nacht. 
Vemen tsu nemen un nit far shemen, 
vemen tsu nemen un nit far shemen. 

Tumbala, tumbala, tumbalalaika, 
Tumbala, tumbala, tumbalalaika
tumbalalaika, shpiel balalaika
tumbalalaika - freylach zol zayn. 

Meydl, meydl, ch'vel bay dir fregen, 
Vos kan vaksn, vaksn on regn?
Vos kon brenen un nit oyfhern? 
Vos kon benken, veynen on treren? 


Narisher bocher, vos darfstu fregn? 
A shteyn ken vaksn, vaksn on regn. 
Libeh ken brenen un nit oyfhern. 
A harts kon benkn, veynen on treren.
LYRICS
               }
             ])

txori_id = Track.find_by(name: 'Txoria Txori').id
mame_id = Track.find_by(name: 'Di Mame Iz Gegangen').id
wave_id = Track.find_by(name: 'Wave').id
charlie_id = Track.find_by(name: "Wha'll be King But Cherlie").id
port_id = Track.find_by(name: "Língua Portuguesa").id
elsker_id = Track.find_by(name: 'Ja vi elsker dette landet').id
mazurek_id = Track.find_by(name: 'Mazurek Dąbrowskiego').id
koro_id = Track.find_by(name: 'Korobeiniki').id
finn_id = Track.find_by(name: 'Finlandia').id
tum_id = Track.find_by(name: 'Tumbalalaika').id

guest_id = User.find_by(username: 'guest').id


Annotation.destroy_all
Annotation.create([
                    {
                      start_index: 136,
                      end_index: 162,
                      user_id: guest_id,
                      track_id: txori_id,
                      body: 'And it was the bird I loved'
                    },
                    {
                      start_index: 31,
                      end_index: 48,
                      user_id: guest_id,
                      track_id: txori_id,
                      body: 'Hi, how are you?'
                    },
                    {
                      start_index: 20,
                      end_index: 23,
                      user_id: guest_id,
                      track_id: charlie_id,
                      body: 'squid?'
                    },
                    {
                      start_index: 31,
                      end_index: 36,
                      user_id: guest_id,
                      track_id: charlie_id,
                      body: 'Hi, how are you?'
                    },
                    {
                      start_index: 0,
                      end_index: 3,
                      user_id: guest_id,
                      track_id: port_id,
                      body: 'Where is my brother?'
                    },
                    {
                      start_index: 2,
                      end_index: 6,
                      user_id: guest_id,
                      track_id: port_id,
                      body: 'Hi, how are you?'
                    },
                    {
                      start_index: 3,
                      end_index: 47,
                      user_id: guest_id,
                      track_id: mame_id,
                      body: 'Stuff about stuff'
                    },
                    {
                      start_index: 80,
                      end_index: 94,
                      track_id: txori_id,
                      user_id: guest_id,
                      body: "But that way\n"                      
                    },
                    {
                      start_index: 3,
                      end_index: 24,
                      track_id: txori_id,
                      user_id: guest_id,
                      body: "If I had clipped her wings"
                    },
                    {
                      track_id: wave_id,
                      user_id: guest_id,
                      body: "I'm going to tell you,\nThe eyes can't see yet\n",
                      start_index: 0,
                      end_index: 10
                    },
                    {
                      track_id: wave_id,
                      user_id: guest_id,
                      body: "Elmer Fudd",
                      start_index: 40,
                      end_index: 46
                    },
                    {
                      track_id: wave_id,
                      user_id: guest_id,
                      body: "hello goodbye",
                      start_index: 55,
                      end_index: 65
                    },
                    {
                      start_index: 10,
                      end_index: 13,
                      user_id: guest_id,
                      track_id: elsker_id,
                      body: 'Yeah'
                    },
                    {
                      start_index: 70,
                      end_index: 75,
                      user_id: guest_id,
                      track_id: elsker_id,
                      body: 'Hi!'
                    },
                    {
                      start_index: 14,
                      end_index: 17,
                      user_id: guest_id,
                      track_id: mazurek_id,
                      body: 'Lizards are cool'
                    },
                    {
                      start_index: 100,
                      end_index: 106,
                      user_id: guest_id,
                      track_id: mazurek_id,
                      body: 'I do not speak Polish'
                    },
                    {
                      start_index: 50,
                      end_index: 60,
                      user_id: guest_id,
                      track_id: koro_id,
                      body: 'Hi!'
                    },
                    {
                      start_index: 10,
                      end_index: 13,
                      user_id: guest_id,
                      track_id: koro_id,
                      body: 'This Russian is really weird!'
                    },
                    {
                      start_index: 10,
                      end_index: 13,
                      user_id: guest_id,
                      track_id: finn_id,
                      body: "This Russian is really weird! So weird it's actually Finnish!"
                    },
                    {
                      start_index: 60,
                      end_index: 64,
                      user_id: guest_id,
                      track_id: finn_id,
                      body: 'Finnish is spoken in Finland'
                    },
                    {
                      start_index: 4,
                      end_index: 13,
                      user_id: guest_id,
                      track_id: tum_id,
                      body: 'Yiddish is great!'
                    }
                  ])
