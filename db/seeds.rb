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
              { username: 'daniel', password: 'daniel', email: 'drothblatt@uchicago.edu' },
              { username: 'garnet', password: 'rubysapphire', email: 'garnet@hotmail.com' },
              { username: 'amethyst', password: 'purplepuma', email: 'amethyst@hotmail.com' },
              { username: 'pearl', password: 'rosequartz', email: 'pearl@hotmail.com' },
              { username: 'greg', password: 'steven', email: 'greg@hotmail.com' },
              { username: 'steven', password: 'cheeseburger', email: 'steven@hotmail.com' }
            ])

Track.destroy_all
Track.create([
               {
                 name: 'Txoria Txori',
                 lyrics: 'Hegoak ebaki banizkio, nerea izango zen...',
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
