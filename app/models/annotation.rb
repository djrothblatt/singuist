# == Schema Information
#
# Table name: annotations
#
#  id          :integer          not null, primary key
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  track_id    :integer          not null
#  user_id     :integer          not null
#  body        :text             not null
#  start_index :integer          not null
#  end_index   :integer          not null
#

class Annotation < ApplicationRecord
  validates :track, :user, :body, :start_index, :end_index, presence: true
  
  belongs_to :user
  belongs_to :track
end
