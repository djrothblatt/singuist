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

Di mame iy gegangen in mark arayn nach kroyt,
hot zi mir gebrakht a meydele fun boyd,
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
               }
             ])

Annotation.destroy_all
Annotation.create([
                    {
                      track_id: Track.find_by(name: 'Txoria Txori').id,
                      user_id: User.find_by(username: 'daniel').id,
                      body: 'text',
                      start_index: 0,
                      end_index: 5
                    },
                    {
                      track_id: Track.find_by(name: 'Txoria Txori').id,
                      user_id: User.find_by(username: 'garnet').id,
                      body: 'This is Basque. Look at it move!',
                      start_index: 10,
                      end_index: 12
                    },
                    {
                      track_id: Track.find_by(name: 'Wave').id,
                      user_id: User.find_by(username: 'guest').id,
                      body: 'I do not speak this language',
                      start_index: 6,
                      end_index: 16
                    },
                    {
                      track_id: Track.find_by(name: 'Di Mame Iz Gegangen').id,
                      user_id: User.find_by(username: 'daniel').id,
                      body: 'Yiddish is the future!',
                      start_index: 17,
                      end_index: 19
                    },
                    {
                      track_id: Track.find_by(name: 'Txoria Txori').id,
                      user_id: User.find_by(username: 'daniel').id,
                      body: 'text',
                      start_index: 17,
                      end_index: 20
                    }
                  ])
