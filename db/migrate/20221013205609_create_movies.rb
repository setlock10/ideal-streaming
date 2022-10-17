class CreateMovies < ActiveRecord::Migration[7.0]
  def change
    create_table :movies do |t|
      t.string :imdbID
      t.string :tmdbID                                                          
      t.integer :imdbRating                                                      
      t.integer :imdbVoteCount                                                   
      t.integer :tmdbRating                                                      
      t.string :backdropURL                                                    
      t.string :originalTitle                                                   
      t.integer :year                                                            
      t.integer :runtime                                                         
      t.string :cast                                                            
      t.string :title                                                           
      t.string :overview
      t.string :tagline
      t.string :video
      t.string :posterURL
      t.string :age
      t.string :originalLanguage
     
      t.timestamps
    end
  end
end
