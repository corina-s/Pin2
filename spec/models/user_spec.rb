require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'validation' do
    it 'ensures mandatory fields are present' do
      user = User.new 
      expect(user.save).to be(false)

      expect(user.errors[:email]).not_to be_nil
      expect(user.errors[:username]).not_to be_nil
      expect(user.errors[:encrypted_password]).not_to be_nil
    end

    it 'ensures email uniqueness' do
      user1 = create(:user, email: "myuser@example.com")
      user2 = build(:user, email: "myuser@example.com")

      expect(user2.save).to be(false)
      expect(user2.errors[:email]).not_to be_nil
    end

  end
end
