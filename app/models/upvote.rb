# == Schema Information
#
# Table name: upvotes
#
#  id            :integer          not null, primary key
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  annotation_id :integer          not null
#  user_id       :integer          not null
#

class Upvote < ApplicationRecord
  validates :annotation, :user, presence: true, uniqueness: true
  belongs_to :annotation
  belongs_to :user
end
