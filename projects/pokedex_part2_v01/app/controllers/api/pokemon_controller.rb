class Api::PokemonController < ApplicationController
    def index
        @pokemons = Pokemon.all
        render :index
    end

    def show
        debugger
        @pokemon = Pokemon.includes(:items, :moves).find_by(id: params[:id])
        render :show
    end
end
