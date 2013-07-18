class CreateWeekPresences < ActiveRecord::Migration
  def change
    create_table :week_presences do |t|
      t.boolean :monday
      t.boolean :tuesday
      t.boolean :wednesday
      t.boolean :thursday
      t.boolean :friday
      t.references :week
      t.references :user

      t.timestamps
    end
    add_index :week_presences, :week_id
    add_index :week_presences, :user_id
  end
end
