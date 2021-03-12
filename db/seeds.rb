# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


p "destroying data"
User.destroy_all

p "seeding data"

u3 = User.new(
  username: 'guest',
  email: 'g@g.com',
  password: 'password',
  provider: 'email',
  uid: 'g@g.com'
)
u3.skip_confirmation!
u3.save!

u1 = User.new(
  username: 'Nora',
  email: 'n@n.com',
  password: 'nora123',
  provider: 'email',
  uid: 'n@n.com'
)
u1.skip_confirmation!
u1.save!

u2 = User.new(
  username: 'Ria',
  email: 'r@r.com',
  password: 'ria123',
  provider: 'email',
  uid: 'r@r.com'
)
u2.skip_confirmation!
u2.save!