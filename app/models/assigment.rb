class Assigment < ApplicationRecord
	acts_as_list scope: :package

	belongs_to :team
	belongs_to :package
end
