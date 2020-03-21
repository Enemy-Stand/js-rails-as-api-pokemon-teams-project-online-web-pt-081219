class PokemonsController < ApplicationController
  def show
    pokemon = Pokemon.find(params[:id])
    render json: PokemonSerializer.new(pokemon)
  end

  def index
    pokemons = Pokemon.all
    render json: PokemonSerializer.new(pokemons)
  end

  def create
    if trainer.team_size < 6
      Pokemon.create
    else
      flash.alert = "You already have 6 Pokemon."
    end
  end

  def destroy
  end
end
