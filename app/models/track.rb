# == Schema Information
#
# Table name: tracks
#
#  id          :integer          not null, primary key
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  name        :string           not null
#  lyrics      :text             not null
#  description :text
#  language    :string
#  artist      :string
#

class Track < ApplicationRecord
  validates :name, :lyrics, presence: true
  has_many :annotations
end
