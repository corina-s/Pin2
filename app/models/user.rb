class User < ApplicationRecord
        # Include default devise modules.
        devise :database_authenticatable, :registerable,
                :recoverable, :rememberable, :trackable, :validatable,
                :confirmable, :omniauthable
        include DeviseTokenAuth::Concerns::User
        extend Devise::Models
  
  validates :encrypted_password, presence: true
  validates :username, :email, presence: true, uniqueness: true
 
end
