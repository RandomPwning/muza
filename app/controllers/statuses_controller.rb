class StatusesController < ApplicationController

	def index
    		render json: [] and return unless params[:user_id]

		@status = Status.where(user_id: params[:user_id])
	end
	
	def new
		@status = Status.new
	end

	def create
		@status = Status.new(user_id: params[:user_id])
	end

	def show
	end

	def destroy
		Status.find(params[:id]).destroy
		redirect_to root_path
	end
	
end
