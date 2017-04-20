# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



User.create([
              {username: 'daniel', password: 'daniel', email: 'drothblatt@uchicago.edu'},
              {username: 'garnet', password: 'rubysapphire', email: 'garnet@hotmail.com'},
              {username: 'amethyst', password: 'purplepuma', email: 'amethyst@hotmail.com'},
              {username: 'pearl', password: 'rosequartz', email: 'pearl@hotmail.com'},
              {username: 'greg', password: 'steven', email: 'greg@hotmail.com'},
              {username: 'steven', password: 'cheeseburger', email: 'steven@hotmail.com'}
            ])
