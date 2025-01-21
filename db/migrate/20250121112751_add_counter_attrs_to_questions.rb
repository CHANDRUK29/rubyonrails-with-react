class AddCounterAttrsToQuestions < ActiveRecord::Migration[8.0]
  def change
    add_column :questions, :likesCount, :integer, default: 0
    add_column :questions, :dislikesCount, :integer, default: 0
  end
end
