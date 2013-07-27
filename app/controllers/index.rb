get '/' do
  # Look in app/views/index.erb
  erb :index
end

post '/colour' do
  #Create and return a JSON object with the random cell and color given below.
  cell = rand(1..9)
  colour = "#" + "%06x" % (rand * 0xffffff)
  response = {:cell => cell, :colour => colour}.to_json
end
