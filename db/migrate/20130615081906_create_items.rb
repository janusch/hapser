class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.string :title
      t.integer :count
      t.integer :created_by
      t.datetime :deleted_at
      t.integer :deleted_by
      t.datetime :completed_at
      t.integer :completed_by

      t.timestamps
    end
  end
end
