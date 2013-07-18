class CreateWeeks < ActiveRecord::Migration
  def change
    create_table :weeks do |t|
      t.date :begin_date
      t.integer :user_id
      t.string :status

      t.timestamps
    end
  end
end
