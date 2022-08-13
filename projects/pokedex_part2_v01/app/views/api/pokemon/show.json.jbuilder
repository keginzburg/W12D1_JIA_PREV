json.pokemon do
        json.extract! @pokemon, :id, :name, :attack, :defense, :poke_type
        json.image_url asset_path("pokemon_snaps/#{@pokemon.image_url}")
end

json.moves do
    @pokemon.moves.each do |move|
        json.set! move.id do
            json.extract! move, :id, :name
        end
    end
end

json.items do
    @pokemon.items.each do |item|
        json.set! item.id do
            json.extract! item, :id, :pokemon_id, :name, :price, :happiness, :image_url
        end
    end
end

# items: {
#     1: {
#         id: 1,
#         pokemonId: 1,
#         name: "whatever",
#         price: 5,
#         happiness: 5,
#         :imageUrl: "ehehehe"
#     }
# }