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
                 lyrics: 'Di mame iz gegangen in mark arayn nokh koyln...',
                 description: "This song is about a boy whose mother went out and found him a wife.",
                 language: 'Yiddish',
                 artist: 'Traditional'
               },
               {
                 name: 'Wave',
                 lyrics: 'Vou te contar, os olhos já não podem ver coisas que só o coração pode entender...',
                 description: "Despite the English title, this bossa nova song is in Portuguese.",
                 language: 'Portuguese',
                 artist: 'Tom Jobim'
               },
               {
                 name: "Wha'll be King But Cherlie",
                 lyrics: "The news frae Moidart cam yestreen will soon gar mony ferlie...",
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
