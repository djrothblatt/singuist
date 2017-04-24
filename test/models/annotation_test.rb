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

require 'test_helper'

class AnnotationTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
